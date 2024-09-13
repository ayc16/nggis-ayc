import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import esriConfig from '@arcgis/core/config';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import LabelClass from "@arcgis/core/layers/support/LabelClass.js";
import TextSymbol from "@arcgis/core/symbols/TextSymbol.js";
import GroupLayer from "@arcgis/core/layers/GroupLayer.js";
import esriRequest from "@arcgis/core/request.js";

import { FHLayer, FilterListUpdateNullable, FiltersType, LayersOrWidgets, LayersOrWidgetsStatus, MapFilter, MapFilterDetailsNullable, MapFilterNullable, MapService } from '../shared/map.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ExcelService } from '../shared/excel.service';

@Component({
  selector: 'app-esri-map',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './esri-map.component.html',
  styleUrl: './esri-map.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EsriMapComponent implements OnInit, OnDestroy {
  public view: any = null;
  constructor(private mapService: MapService, private spinnerService: NgxSpinnerService, private excelService: ExcelService) {
  }

  private mapReady = false;
  private platformLayer: any;
  private legend: any;
  private areaLayer: any;
  private blockLayer: any;
  private platformsBSEELayer: any;
  private pipelineLayer: any;
  private historicHurricaneTrackLayer: any;
  private hhConesLayer: any;
  private forecastHurricaneLayers: any[] = [];//individual forecast layers
  private forecastLayers: FHLayer[] = [];//individual forecast layers details from esri
  private forecastGroupLayer: any;//forecast group layer

  private defaultConditionForLayer: Record<LayersOrWidgets, string | undefined> = {
    [LayersOrWidgets.PlatformLayer]: "Latitude <> 0 AND Longitude <> 0", //ignore platform having latitude or longitude = 0
    [LayersOrWidgets.BSEEPlatformLayer]: undefined,
    [LayersOrWidgets.Legend]: undefined,
    [LayersOrWidgets.AreaLayer]: undefined,
    [LayersOrWidgets.BLockLayer]: undefined,
    [LayersOrWidgets.HistoricHurricaneTrackLayer]: "1=0",
    [LayersOrWidgets.None]: undefined,
    [LayersOrWidgets.PipelineLayer]: "1=1",
    [LayersOrWidgets.HHConeLayer]: "1=0",
    [LayersOrWidgets.ForecastGroupLayer]: "1=1"
  };

  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  map: any;

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;
    esriConfig.apiKey = "AAPKd618a22668304d46bef2738772b6593bfCyEJX_kFpN0SYkRDaQSMcopf5s2JUROU6_-R7hRCsCZzlJLDciyRkfSlNltWu6a";
    //"AAPK72fa5c3fb7af4081905ff6ad19abb5399wBToPk_EGOX58b7MGRCMLBTs6_EbYAks0YjZQf4xkCRb1cekfloEF3ZJZbJMTkm"
    //In console do not log warnings(example : big-integer related warning[ Only integers less than 9007199254740991 (Number.MAX_SAFE_INTEGER) are supported.]) - just log errors
    esriConfig.log.level = 'error';
    const map = new Map({
      basemap: 'arcgis-topographic'
    });

    this.map = map;

    this.view = new MapView({
      container,
      map: map,
      zoom: 6,
      // popupEnabled: true,
      popup:
      {
        defaultPopupTemplateEnabled: true
      },
      center: [-89.052, 24.96]//[longitude, latitude] - Gulf of Mexico
    });

    // Set minimum zoom level
    this.view.constraints = {
      minZoom: 3
    }

    ///ScaleBar
    let scaleBar = new ScaleBar({
      view: this.view
    });
    // Add widget to the bottom left corner of the view
    this.view.ui.add(scaleBar, {
      position: "bottom-left"
    });

    this.legend = new Legend({
      view: this.view,
      visible: true
    });
    this.view.ui.add(this.legend, "bottom-right");

    //Add Layers with toggle.
    this.SetAreaLayer();
    this.SetBlockLayer();
    this.SetBSEEPlatformLayer();
    this.SetPipelineLayer();

    var mainThis = this;
    // Once the layers are loaded, add them to the map
    Promise.all([this.areaLayer.load(), this.blockLayer.load(), this.platformsBSEELayer.load()]).then(function () {
      map.addMany([mainThis.areaLayer, mainThis.blockLayer, mainThis.platformsBSEELayer]);
      //console.log("Layers loaded");
    }).catch(function (error) {
      console.error("Error loading layers:", error);
    });

    Promise.all([this.pipelineLayer.load()]).then(function () {
      map.add(mainThis.pipelineLayer);
    }).catch(function (error) {
      console.error("Error loading pipeline layer:", error);
    });

    this.SetMainPlatformLayer();
    map.add(this.platformLayer);

    this.SetHistoricHurricaneLayer();
    this.historicHurricaneTrackLayer.load().then(function () {
      map.add(mainThis.historicHurricaneTrackLayer);
    });

    this.SetHHConesLayer();
    this.hhConesLayer.load().then(function () {
      map.add(mainThis.hhConesLayer);
    });

    this.SetForecastHurricaneLayer();

    // Promise.all([this.forecastHurricaneLayers.forEach(x => x.load())]).then(function () {
    //   map.add(mainThis.forecastGroupLayer);
    // }).catch(function (error) {
    //   console.error("Error loading forecast hurricane layers:", error);
    // });

    // Promise.all([this.forecastGroupLayer]).then(function () {
    //   map.add(mainThis.forecastGroupLayer);
    // }).catch(function (error) {
    //   console.error("Error loading forecast hurricane layers:", error);
    // });

    // this.forecastGroupLayer.loadAll()
    //   .catch((error: any) => {
    //     // Ignore any failed resources
    //     console.error("Error loading forecast hurricane layers:", error);
    //   })
    //   .then(() => {
    //     console.log("All loaded");
    //     map.add(mainThis.forecastGroupLayer);
    //   });

    return this.view.when();
  }

  ngOnInit() {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
      this.mapReady = true;

      this.setFilterValue();

      this.mapService.showLayersOrWidgets$.subscribe((status: LayersOrWidgetsStatus) => {
        if (!this.mapReady)
          return;
        switch (status.type) {
          case LayersOrWidgets.PlatformLayer:
            if (this.platformLayer) {
              this.platformLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.BSEEPlatformLayer:
            if (this.platformsBSEELayer) {
              this.platformsBSEELayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.AreaLayer:
            if (this.areaLayer) {
              this.areaLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.BLockLayer:
            if (this.blockLayer) {
              this.blockLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.Legend:
            if (this.legend) {
              this.legend.visible = status.visible;
            }
            break;
          case LayersOrWidgets.HistoricHurricaneTrackLayer:
            if (this.historicHurricaneTrackLayer) {
              this.historicHurricaneTrackLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.HHConeLayer:
            if (this.hhConesLayer) {
              this.hhConesLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.ForecastGroupLayer:
            if (this.forecastGroupLayer) {
              this.forecastGroupLayer.visible = status.visible;
              // this.forecastHurricaneLayers.forEach((layer) => {
              //   layer.visible = status.visible;
              // });
            }
            break;
          case LayersOrWidgets.PipelineLayer:
            if (this.pipelineLayer) {

              if (status.visible == true)
                this.showLoading(this.pipelineLayer);
              this.pipelineLayer.visible = status.visible;
            }
            break;
          default:
            break;
        }
      });

      this.mapService.setMapFilters$.subscribe((filters: MapFilterNullable) => {
        if (filters != null)
          this.ApplyMapFilters(filters);
      });

      this.mapService.updateFiltersList$.subscribe((filters: FilterListUpdateNullable) => {
        this.UpdateFilterList(filters);
      });

      this.mapService.downloadFilteredData$.subscribe((layerOrWidget: LayersOrWidgets | null) => {
        if (layerOrWidget != null)
          this.downloadFilteredData(layerOrWidget);
      });
    });
  }
  downloadFilteredData(layerOrWidget: LayersOrWidgets) {
    let mainThis = this;
    // let layer = this.platformLayer;
    // if (layerOrWidget == LayersOrWidgets.HistoricHurricaneTrackLayer) {
    //   layer = this.historicHurricaneTrackLayer;
    // }
    // else if (layerOrWidget == LayersOrWidgets.PipelineLayer) {
    //   layer = this.pipelineLayer;
    // }
    let basicCondition = "1=1";
    if (layerOrWidget == LayersOrWidgets.PlatformLayer && this.defaultConditionForLayer.PlatformLayer != undefined) {
      basicCondition = this.defaultConditionForLayer.PlatformLayer;
    }

    let layer = this.getLayerFromLayerOrWidget(layerOrWidget);
    layer.queryFeatures({
      where: layer.definitionExpression || basicCondition,
      outFields: ["*"],
      orderByFields: [FiltersType.platformName]
    }).then(function (result: any) {
      let header = Object.keys(result.features[0].attributes);

      let datas = [];
      for (let i = 0; i < result.features.length; i++) {
        datas.push(result.features[i].attributes);
      }

      mainThis.excelService.ExportDataExcel(datas, header, "FilteredData");
    });
  }

  private SetMainPlatformLayer() {

    let commonPltformSymbols = {
      type: "simple-marker",
      size: "4px", // Adjust the size of the symbol as needed     
      outline: {
        color: "transparent" // Set outline color to transparent
      }
    }

    // Esri color ramps - Beaded Pastel
    //const colors = ["#d7191cff", "#fdae61ff", "#ffffbfff", "#2b83baff", "#e65154ff", "#26b6ffff", "#cd76d6ff", "#ffca8cff", "#fff2b3ff", "#ff8cd9ff", "#d99d5bff", "#c8f2a9ff", "#d4b8ffff"];

    // Esri color ramps - Metro Movement
    // #ed5151ff,#149eceff,#a7c636ff,#9e559cff,#fc921fff,#ffde3eff,#f789d8ff,#b7814aff,#3caf99ff,#6b6bd6ff,#b54779ff,#7f7f7fff
    const colors = ["red", "blue", "green", "yellow", "violet", "deeppink", "maroon", "orange", "indigo", "lightseagreen"];//https://www.w3.org/wiki/CSS/Properties/color/keywords

    var uniqueValueInfos = [
      {
        value: "Removed",
        symbol: {
          ...commonPltformSymbols,
          color: "grey",
        }
      },
      // {
      //   value: "Apache Corporation",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[0],
      //   }
      // },
      // {
      //   value: "Arena Offshore, LP",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[1],
      //   }
      // },
      // {
      //   value: "Cantium, LLC",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[2],
      //   }
      // },
      // {
      //   value: "Chevron U.S.A. Inc.",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[3],
      //   }
      // },
      // {
      //   value: "Cox Operating, L.L.C.",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[4],
      //   }
      // },
      // {
      //   value: "Fieldwood Energy LLC",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[5],
      //   }
      // },
      // {
      //   value: "Renaissance Offshore, LLC",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[6],
      //   }
      // },
      // {
      //   value: "Sanare Energy Partners, LLC",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[7],
      //   }
      // },
      // {
      //   value: "Talos Energy Offshore LLC",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[8],
      //   }
      // },
      // {
      //   value: "W & T Offshore, Inc.",
      //   symbol: {
      //     ...commonPltformSymbols,
      //     color: colors[9],
      //   }
      // }
      // You can add more unique value info objects for other values if needed
    ]

    let platformsRender = {
      type: "unique-value", // Use unique-value renderer for different symbols based on values
      legendOptions: {
        title: "Business Asc Name"
      },
      field: "Bus_asc_name", // Use Bus_asc_name field for differentiating values
      defaultLabel: "Active",// "Other Operators",
      valueExpression: `
      var Bus_asc_name = $feature.Bus_Asc_Name;
      var Removal_Date = $feature.Removal_Date;
      var today_date = Today();
      var diff = DateDiff(today_date, Removal_Date, 'days');

      if (diff > 0) {
        return 'Removed';
      } else {
        return Bus_asc_name;
      }
    `,
      defaultSymbol: {
        ...commonPltformSymbols,
        color: "blue",// Default color for features where the expression does not apply here for active we are setting blue and for removed it's gray
      },
      uniqueValueInfos: uniqueValueInfos
    };

    this.platformLayer = new FeatureLayer({
      //url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/Join_Features_to_Platform_BSEE_view/FeatureServer",
      url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/JoinLayerBSEEiSIMS/FeatureServer",
      visible: true,
      title: "Platforms",
      refreshInterval: 5,//Refresh interval of the layer in minutes
      outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
      popupTemplate: this.getPlatformPopupTemplate()
    });

    // this.platformLayer.load().then(() => {
    this.platformLayer.renderer = platformsRender;
    //});
  }

  private getPlatformPopupTemplate() {
    // Define the popup template
    var popupTemplate = {
      title: "<span style='color: orange;'>Platform : {Area_Code} {Block_Number} {Structure_Name}</span>",
      content: `
      <table class="esri-widget__table" style="width:100%">
          <tr>
              <th style="width:30%">Field Name</th>
              <th style="width:35%">BSEE</th>
              <th style="width:35%">iSIMS</th>
          </tr>
          <tr>
              <td>Complex Id Num</td>
              <td>{Complex_Id_Num}</td>
              <td>{cpxid}</td>
          </tr>
          <tr>
              <td>Structure Number</td>
              <td>{Structure_Number}</td>
              <td>{stn}</td>
          </tr>
          <tr>
              <td>Bus Asc Name</td>
              <td>{Bus_Asc_Name}</td>
              <td>{operatorName}</td>
          </tr>
          <tr>
              <td>Platform Name</td>
              <td>{PlatformName}</td>
              <td>{platformname}</td>
          </tr>
          <tr>
              <td>Water Depth (feet)</td>
              <td>{Water_Depth__feet_}</td>
              <td>{wd}</td>
          </tr>
          <tr>
              <td>Authority Number</td>
              <td>{Authority_Number}</td>
              <td>{authnum}</td>
          </tr>
          <tr>
              <td>Authority Status</td>
              <td>{Authority_Status}</td>
              <td>{authstatus}</td>
          </tr>
          <tr>
              <td>Authority Type</td>
              <td>{Authority_Type}</td>
              <td>{authtyp}</td>
          </tr>
          <tr>
              <td>Install Date</td>
              <td>{Install_Date}</td>
              <td>{installDate}</td>
          </tr>
          <tr>
              <td>Attended 8 Hr</td>
              <td>{Attended_8_Hr}</td>
              <td>{isAttendedEighthHours}</td>
          </tr>
          <tr>
              <td>Heliport Flag</td>
              <td>{Heliport_Flag}</td>
              <td>{hasHeliport}</td>
          </tr>
          <tr>
              <td>District Code</td>
              <td>{District_Code}</td>
              <td>{districtCode}</td>
          </tr>
          <tr>
              <td>Field</td>
              <td>{Field}</td>
              <td></td>
          </tr>
          <tr>
              <td>INCs</td>
              <td>{INCs}</td>
              <td></td>
          </tr>
          <tr>
              <td>Latitude</td>
              <td>{Latitude}</td>
              <td>{latitude}</td>
          </tr>
          <tr>
              <td>Lease Number</td>
              <td>{Lease_Number}</td>
              <td></td>
          </tr>
          <tr>
              <td>Longitude</td>
              <td>{Longitude}</td>
              <td>{longitude}</td>
          </tr>
          <tr>
              <td>Maj Struc Flag</td>
              <td>{Maj_Struc_Flag}</td>
              <td>{isMajorStructure}</td>
          </tr>
          <tr>
              <td>Manned 24 Hr</td>
              <td>{Manned_24_Hr}</td>
              <td></td>
          </tr>
          <tr>
              <td>Nad Year Cd</td>
              <td>{Nad_Year_Cd}</td>
              <td></td>
          </tr>
          <tr>
              <td>Proj Code</td>
              <td>{Proj_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Ptfrm X Location</td>
              <td>{Ptfrm_X_Location}</td>
              <td></td>
          </tr>
          <tr>
              <td>Ptfrm Y Location</td>
              <td>{Ptfrm_Y_Location}</td>
              <td></td>
          </tr>
          <tr>
              <td>Removal Date</td>
              <td>{Removal_Date}</td>
              <td>{removalDate}</td>
          </tr>
          <tr>
              <td>Site Clear Date</td>
              <td>{Site_Clear_Date}</td>
              <td></td>
          </tr>
          <tr>
              <td>Struc Type Code</td>
              <td>{Struc_Type_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf E W Code</td>
              <td>{Surf_E_W_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf E W Dist</td>
              <td>{Surf_E_W_Dist}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf N S Code</td>
              <td>{Surf_N_S_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf N S Dist</td>
              <td>{Surf_N_S_Dist}</td>
              <td></td>
          </tr>
      </table>
  `
    };

    return popupTemplate;
  }

  private SetBSEEPlatformLayer() {

    let platformBSEERender: any = {
      type: "simple",  // autocasts as new SimpleRenderer()// Since you want a solid color without any category differentiation, you can use a simple renderer
      symbol: {
        type: "simple-marker",
        color: [200, 200, 200, 1], // Light grey color with full opacity (R,G,B,Opacity)
        size: "4px",
        outline: {
          color: "transparent" // Set outline color to transparent
        }
      }
    };
    var popupTemplate = {
      title: "Platform:{PlatformName}",
      content: [{
        type: "fields",
        fieldInfos: [
          { fieldName: "Bus_Asc_Name", label: "Operator Name" },
          { fieldName: "Water_Depth__feet_", label: "Water Depth feet" },
          { fieldName: "Install_Date", label: "Install Date" },
          { fieldName: "Removal_Date", label: "Removal Date" }
        ]
      }]
    };
    this.platformsBSEELayer = new FeatureLayer({
      url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/PlatStruc_BSEE/FeatureServer",
      visible: false,
      refreshInterval: 60,
      title: "Platform BSEE",
      //popup
      popupTemplate: popupTemplate,
      opacity: 0.5, // Set opacity to make it look like a background layer
      renderer: platformBSEERender
    });
  }

  private SetAreaLayer() {
    // Define the LabelClass
    var labelClass = new LabelClass({
      // Define the label expression. Here we're labeling with the 'name' field
      labelExpressionInfo: { expression: "$feature.AREA_CODE" },

      // Define the text symbol
      symbol: new TextSymbol({
        color: "black",
        haloColor: "",
        haloSize: "2px",
        font: { // autocast as Font
          family: "Arial",
          size: 6,
          weight: "bold"
        }
      })
    });

    this.areaLayer = new FeatureLayer({
      url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/protclip/FeatureServer",
      // Set the LabelClass on the layer's labelingInfo property
      labelingInfo: [labelClass],
      visible: false,
      title: "Area",
      popupTemplate: {
        title: "Area:{AREA_CODE}",
        content: [{
          type: "fields",
          fieldInfos: [
            { fieldName: "AREA_CODE", label: "Area code" },
            { fieldName: "PLAN_AREA_", label: "Plan area" },
            { fieldName: "PLAN_AREA1", label: "plan area1" },
            { fieldName: "PROJ_ZONE_", label: "Proj zone" },
            { fieldName: "PROT_APRV_", label: "PROT_APRV_" },
            { fieldName: "PROT_NAME", label: "PROT_NAME" },
            { fieldName: "PROT_NUMBE", label: "PROT_NUMBER" },
            { fieldName: "PROTCLIP_", label: "PROTCLIP" },

          ]
        }]
      },
    });
  }

  private SetBlockLayer() {
    // Define the LabelClass for the "Block" layer
    var labelClassb = new LabelClass({
      // Define the label expression. Here we're labeling with the 'BLOCK_NUMB' field
      labelExpressionInfo: { expression: "$feature.BLOCK_NUMB" },
      // Define the text symbol
      symbol: new TextSymbol({
        color: "black",
        haloColor: "",
        haloSize: "2px",
        font: { // autocast as Font
          family: "Arial",
          size: 6,
          weight: "bold"
        }
      }),
      // Set the minimum and maximum scales for label visibility
      minScale: 500000, // Adjust this value as needed
      maxScale: 100000 // Adjust this value as needed
    });


    this.blockLayer = new FeatureLayer({
      url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/block/FeatureServer/0",
      labelingInfo: [labelClassb],
      visible: false,
      title: "Block",
      popupTemplate: {
        title: "Block:{BLOCK_NUMB}",
        content: [{
          type: "fields",
          fieldInfos: [
            { fieldName: "AC_LAB", label: "AC_LAB" },
            { fieldName: "AREA_CODE", label: "AREA_CODE" },
            { fieldName: "BLK_FED_AP	", label: "BLK_FED_AP	" },
            { fieldName: "BLOCK LAB	", label: "BLOCK LAB	" },
            { fieldName: "BLOCK_NUMB", label: "BLOCK_NUMB" },
            { fieldName: "BLOCKS", label: "BLOCKS" },
            { fieldName: "BLOCKS_ID", label: "BLOCKS_ID" },
            { fieldName: "PROT_APRV_", label: "PROT_APRV_" },
            { fieldName: "PROT_NUMBE", label: "PROT_NUMBE" },
            { fieldName: "MMS_REGION", label: "MMS_REGION" },
          ]
        }]
      },
    });
  }

  private SetPipelineLayer() {

    let pipelineRenderer: any = {
      type: "simple",
      symbol: {
        type: "simple-line",
        color: "#a553b7",// symbol color
      }
    };

    this.pipelineLayer = new FeatureLayer({
      url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/Join_Features_to_Pipeline_view/FeatureServer",
      visible: false,
      title: "Pipelines",
      opacity: 0.4,// Set opacity to make it look like a background layer
      // popupTemplate: blockPopupTemplate // Assign pop-up template
      popupTemplate: {
        title: "Segment Number:{SEGMENT_NU}",
        content: [{
          type: "fields",
          fieldInfos: [
            { fieldName: "SEG_LENGTH", label: "Segment Length" },
            { fieldName: "STATUS_COD", label: "Status Code" },
            { fieldName: "PPL_SIZE_C	", label: "Pipeline Size" },
            { fieldName: "ROW_NUMBER", label: "Row Number" },
            { fieldName: "PROD_CODE", label: "Production Code" },
            { fieldName: "APRV_CODE", label: "Approval code" },
            { fieldName: "SDE_COMPAN", label: "SDE Company" },
            // { fieldName: "Segment_Number", label: "Segment_Number " },
            { fieldName: "Originating_Id_Name", label: "Originating Id Name" },
            { fieldName: "Originating_Area_Code", label: "Originating Area Code" },
            { fieldName: "Originating_Block_Number", label: "Originating Block Number" },
            { fieldName: "Originating_Lease_Number", label: "Originating Lease Number" },
            { fieldName: "Receiving_Id_Name", label: "Receiving Id Name" },
            { fieldName: "Receiving_Area_Code", label: "Receiving Area Code" },
            { fieldName: "Receiving_Block_Number", label: "Receiving Block Number" },
            { fieldName: "Receiving_Lease_Number", label: "Receiving Lease Number" },
            { fieldName: "Approved_Date", label: " Approved Date" },
            { fieldName: "Install_Date", label: "Install Date" },
            //{ fieldName: "ROW_Number", label: "ROW Number" },
            // { fieldName: "Status_Code", label: "Status Code" },
            // { fieldName: "Pipeline_Size_Code", label: "Pipeline Size Code" },
            // { fieldName: "Production_Code", label: "Production Code" },
            //// { fieldName: "Facility_Operator", label: "Operator" },
            // { fieldName: "Operator", label: "SDE Company" },
            { fieldName: "Max_Water_Depth__feet_", label: "Max Water Depth (feet)" },
            { fieldName: "Max_Allowable_Operating_Pressure", label: "Max Allowable Operating Pressure" },
            // { fieldName: "Cathodic_Code", label: "Cathodic Code" },
            // { fieldName: "Pipeline_ROW_Seg_Status_Code", label: "Pipeline ROW Seg Status Code" },
            // { fieldName: "Segment_Length", label: "Segment Length" },
            { fieldName: "Authority", label: "Authority" },
            { fieldName: "Bidirectional", label: " Bidirectional" },
            { fieldName: "Out_of_Service_Date", label: "Out of Service Date" },
            // { fieldName: "Temporary_Cessation_of_Operations_Date", label: "Temporary Cessation of Operations Date" },
            // { fieldName: "Flush_and_Fill_Date", label: "Flush and Fill Date" },
            { fieldName: "Abandonment_Approval_Date", label: "Abandonment Approval Date" },
            { fieldName: "Abandonment_Date", label: "Abandonment Date" },
          ]
        }]
      },
      renderer: pipelineRenderer
    });
  }

  private ApplyMapFilters(filters: MapFilter) {
    //console.log(filters, 'filetrs');
    let layer = this.platformLayer;
    let defaultCondition = this.defaultConditionForLayer.PlatformLayer;

    if (filters.layerOrWidget == LayersOrWidgets.HistoricHurricaneTrackLayer) {
      layer = this.historicHurricaneTrackLayer;
      defaultCondition = this.defaultConditionForLayer.HistoricHurricaneTrackLayer;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.PipelineLayer) {
      layer = this.pipelineLayer;
      defaultCondition = this.defaultConditionForLayer.PipelineLayer;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.HHConeLayer) {
      layer = this.hhConesLayer;
      defaultCondition = this.defaultConditionForLayer.HHConeLayer;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.ForecastGroupLayer) {
      layer = this.forecastHurricaneLayers;
      defaultCondition = this.defaultConditionForLayer.ForecastGroupLayer;
    }

    let finalCondition = this.getFinalFilterCondition(filters.details, defaultCondition);
    if (filters.layerOrWidget == LayersOrWidgets.HHConeLayer) {
      layer.definitionExpression = this.historicHurricaneTrackLayer.definitionExpression + "  AND " + finalCondition;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.PlatformLayer) {
      layer.definitionExpression = this.defaultConditionForLayer.PlatformLayer + " AND " + finalCondition;
    }
    else {
      layer.definitionExpression = finalCondition;
    }
    this.showLoading(layer);
    let mainThis = this;

    // Queries for the extent of all features matching the layer's configurations
    // e.g. definitionExpression
    layer.queryExtent().then(function (results: any) {
      //console.log(results, 'results');
      // go to the extent of the results satisfying the query
      if (results != null && results.extent)
        mainThis.view.goTo(results.extent);
      else//use visible layer's fullextent
      //set the view's extent to the layer's fullextent
      //this.view.extent = this.platformLayer.fullExtent;
      {
        //console.log("Extent else");
        if (mainThis.platformLayer.visible)
          mainThis.view.goTo(mainThis.platformLayer.fullExtent);
        else if (mainThis.pipelineLayer.visible)
          mainThis.view.goTo(mainThis.pipelineLayer.fullExtent);
        else if (mainThis.historicHurricaneTrackLayer.visible && mainThis.historicHurricaneTrackLayer.definitionExpression != "1=0")
          mainThis.view.goTo(mainThis.historicHurricaneTrackLayer.fullExtent);
        else if (mainThis.hhConesLayer.visible && mainThis.hhConesLayer.definitionExpression != "1=0")
          mainThis.view.goTo(mainThis.hhConesLayer.fullExtent);
        else
          mainThis.view.goTo(mainThis.platformLayer.fullExtent);
      }
    });
  }

  showLoading(featureLayer: any) {
    this.spinnerService.show("appSpinner");
    var mainThis = this;
    var layerViewPromise = this.view.whenLayerView(featureLayer);
    layerViewPromise.then(function (layerView: any) {
      //console.log(layerView.updating, 'status');
      if (!layerView.updating) {
        mainThis.spinnerService.hide("appSpinner");
        return;
      }
      var handle = layerView.watch("updating", function (newVal: any, oldVal: any, prop: any, target: any) {
        //console.log(prop + " CHANGED FROM " + oldVal + " TO " + newVal);
        if (!newVal) {
          //console.log(prop + " CHANGED FROM " + oldVal + " TO " + newVal);
          handle.remove();
          mainThis.spinnerService.hide("appSpinner");
        }
      });
    });
  }

  private UpdateFilterList(filters: FilterListUpdateNullable) {
    //console.log("filterList update", filters);
    if (filters == null) return;

    let defaultCondition = "1=1";//this is to get filter list so each layer will have a default condition value as 1=1 to get all unique values   
    if (filters.type == FiltersType.HConeAdvisory) {
      //we need data only if we have some other conditions
      defaultCondition = "1=0";
    }
    let condition = this.getFinalFilterCondition(filters.value, defaultCondition);
    this.getFieldDataForFilter(filters.type, condition);
  }

  private getFinalFilterCondition(filters: MapFilterDetailsNullable, defaultCondition: string | undefined) {
    let expression: string[] = [];
    if (filters != null && filters.size > 0) {
      filters.forEach((value: any, key: FiltersType) => {
        if (value.length > 0) {
          switch (key) {
            case FiltersType.ActiveStatus:
            case FiltersType.Area_Code:
            case FiltersType.Block_Number:
            case FiltersType.Bus_Asc_Name:
            case FiltersType.platformName:
            case FiltersType.operatorName:
            case FiltersType.HurricaneName:
            case FiltersType.HurricaneYear:
            case FiltersType.PipelineOperator:
            case FiltersType.PipelineStatusCode:
            case FiltersType.HConeAdvisory:
              let condition = key.toString() + " IN ('" + value.join("', '") + "')";
              expression.push(condition);
              break;
            case FiltersType.Water_Depth__feet_:
            case FiltersType.Complex_Id_Num:
            case FiltersType.Install_Date:
            case FiltersType.Removal_Date:
            case FiltersType.PipelineSegmentNumber:
              let condition2 = key.toString() + " " + value;
              expression.push(condition2);//will be formed from calling side
              break;
            default:
              break;
          }
        }
      });
    }
    let condition = defaultCondition;// "1 = 1";//no filtering - reset filter
    if (expression.length)
      condition = expression.join(" AND ");
    //console.log(condition, 'condition');
    return condition;
  }

  private getLayerFromLayerOrWidget(layerOrWidget: LayersOrWidgets) {
    switch (layerOrWidget) {
      case LayersOrWidgets.PlatformLayer:
        return this.platformLayer;
      case LayersOrWidgets.HistoricHurricaneTrackLayer:
        return this.historicHurricaneTrackLayer;
      case LayersOrWidgets.PipelineLayer:
        return this.pipelineLayer;
      case LayersOrWidgets.HHConeLayer:
        return this.hhConesLayer;
      case LayersOrWidgets.ForecastGroupLayer:
        return this.forecastHurricaneLayers;
    }
    return null;
  }

  private getFieldDataForFilter(fieldName: FiltersType, condition: string = "1=1") {
    let mainThis = this;
    let options: { text: string, value: string }[] = [];

    //create reference to required layer
    //let layer = this.platformLayer;
    let layerOrWidget = this.mapService.getLayerOrWidgetFromFilterType(fieldName);
    // if (layerOrWidget == LayersOrWidgets.HistoricHurricaneTrackLayer) {
    //   layer = this.historicHurricaneTrackLayer;
    // }
    // else if (layerOrWidget == LayersOrWidgets.PipelineLayer) {
    //   layer = this.pipelineLayer;
    // }
    let layer = this.getLayerFromLayerOrWidget(layerOrWidget);

    layer.queryFeatures({
      where: condition,// "1=1",
      returnDistinctValues: true,
      outFields: [fieldName],
      orderByFields: [fieldName]
    }).then(function (result: any) {
      result.features.forEach(function (feature: any) {
        var value = feature.attributes[fieldName];
        //console.log(value, 'feature');
        var displayValue = value; // Get the area name later
        if (value === undefined || value === null || value == '')
          displayValue = 'Unknown';
        options.push({ text: displayValue, value: value });
      });
      if (fieldName == FiltersType.HConeAdvisory) {
        options.sort((a, b) => parseFloat(a.text) - parseFloat(b.text));
      }
      mainThis.mapService.setFilterListFromMap({ type: fieldName, value: options });
    });
  }

  private setFilterValue() {
    this.getFieldDataForFilter(FiltersType.Area_Code);
    this.getFieldDataForFilter(FiltersType.Block_Number);
    this.getFieldDataForFilter(FiltersType.Bus_Asc_Name);
    this.getFieldDataForFilter(FiltersType.operatorName);
    this.getFieldDataForFilter(FiltersType.platformName);
    this.getFieldDataForFilter(FiltersType.HurricaneYear);
    this.getFieldDataForFilter(FiltersType.HurricaneName);
    this.getFieldDataForFilter(FiltersType.PipelineOperator);
    this.getFieldDataForFilter(FiltersType.PipelineStatusCode);
  }

  //#region Hurricane

  private SetHistoricHurricaneLayer() {
    this.historicHurricaneTrackLayer = new FeatureLayer({
      url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/IBTrACS_ALL_list_v04r00_lines_1/FeatureServer",
      title: "Historic Hurricanes",
      refreshInterval: 5,//Refresh interval of the layer in minutes
      outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
      definitionExpression: "1=0", // Initially, set to display no features
      visible: false
    });
  }

  private SetHHConesLayer() {
    this.hhConesLayer = new FeatureLayer({
      //url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/HIstoric_Hurricane_Cones/FeatureServer",
      url: "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/ALL_Cones/FeatureServer",
      title: "Historic Hurricanes Cones",
      refreshInterval: 5,//Refresh interval of the layer in minutes
      outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
      definitionExpression: "1=0", // Initially, set to display no features
      visible: false
    });
  }

  private SetForecastHurricaneLayer() {
    let forecastUrl = "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Active_Hurricanes_v1/FeatureServer";
    let mainThis = this;
    esriRequest(forecastUrl, {
      responseType: "json",
      query: {
        f: "json"
      }
    }).then((response: any) => {
      // The requested data
      this.forecastLayers = response.data.layers;
      console.log('forecastLayers', this.forecastLayers);

      this.forecastLayers.forEach((layer: FHLayer) => {
        var fhLayer = new FeatureLayer({
          url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Active_Hurricanes_v1/FeatureServer/" + layer.id,
          title: layer.name,
          outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
          definitionExpression: "1=1",
          visible: true
        });
        this.forecastHurricaneLayers.push(fhLayer);
      });

      this.forecastGroupLayer = new GroupLayer({
        visibilityMode: "independent",//Each child layer manages its visibility independent from other layers.
        title: "Forecast Hurricanes",
        visible: false
      });
      this.forecastGroupLayer.layers.addMany(this.forecastHurricaneLayers);
      this.forecastGroupLayer.loadAll()
        .catch((error: any) => {
          // Ignore any failed resources
          console.error("Error loading forecast hurricane layers:", error);
        })
        .then(() => {
          console.log("All loaded");
          mainThis.map.add(mainThis.forecastGroupLayer);
        });
    }).catch((err) => {
      if (err.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error encountered', err);
      }
    });

    /*
    Forecast Position (0)
    Observed Position (1)
    Forecast Track (2)
    Observed Track (3)
    Forecast Error Cone (4)
    Watches and Warnings (5)
    Tropical Storm Force (34kts) (7)
    Strong Tropical Storm (50kts) (8)
    Hurricane Force (64kts+) (9)
    Raw 1/10th Degree Data (All) (10)
    Observed Wind Swath (11)
    */
  }

  //#endregion

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}

