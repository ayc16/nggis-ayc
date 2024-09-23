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
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Sketch from "@arcgis/core/widgets/Sketch";
import Measurement from "@arcgis/core/widgets/Measurement";
import * as geometryEngineAsync from "@arcgis/core/geometry/geometryEngineAsync"

import { HLayerDetails, FilterListUpdateNullable, FiltersType, LayersOrWidgets, LayersOrWidgetsStatus, MapFilter, MapFilterDetailsNullable, MapFilterNullable, MapService } from '../shared/map.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ExcelService } from '../shared/excel.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esri-map',
  standalone: true,
  imports: [NgxSpinnerModule, ToastrModule, CommonModule],
  templateUrl: './esri-map.component.html',
  styleUrl: './esri-map.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EsriMapComponent implements OnInit, OnDestroy {
  baseUrl = "https://gisisims.azurewebsites.net/api/";
  //baseUrl = "https://localhost:7203/api/";
  public view: any = null;
  constructor(private mapService: MapService, private spinnerService: NgxSpinnerService, private excelService: ExcelService, private toastr: ToastrService) {
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
  private forecastHLayers: any[] = [];//individual forecast layers
  private forecastHLayersDetails: HLayerDetails[] = [];//individual forecast layers details from esri
  private forecastHGroupLayer: any;//forecast group layer

  private recentHLayers: any[] = [];//individual recent layers
  private recentHLayersDetails: HLayerDetails[] = [];//individual recent layers details from esri
  private recentHGroupLayer: any;


  private defaultConditionForLayer: Record<LayersOrWidgets, string | undefined> = {
    [LayersOrWidgets.PlatformLayer]: "latitude <> 0 AND longitude <> 0", //ignore platform having latitude or longitude = 0

    //[LayersOrWidgets.PlatformLayer]: "1=1", //ignore platform having latitude or longitude = 0
    [LayersOrWidgets.BSEEPlatformLayer]: undefined,
    [LayersOrWidgets.Legend]: undefined,
    [LayersOrWidgets.AreaLayer]: undefined,
    [LayersOrWidgets.BLockLayer]: undefined,
    [LayersOrWidgets.HistoricHurricaneTrackLayer]: "1=0",
    [LayersOrWidgets.None]: undefined,
    [LayersOrWidgets.PipelineLayer]: "1=1",
    [LayersOrWidgets.HHConeLayer]: "1=0",
    [LayersOrWidgets.ForecastGroupLayer]: "1=1",
    [LayersOrWidgets.ForecastSubLayer0]: undefined,
    [LayersOrWidgets.ForecastSubLayer1]: undefined,
    [LayersOrWidgets.ForecastSubLayer2]: undefined,
    [LayersOrWidgets.ForecastSubLayer3]: undefined,
    [LayersOrWidgets.ForecastSubLayer4]: undefined,
    [LayersOrWidgets.ForecastSubLayer5]: undefined,
    [LayersOrWidgets.ForecastSubLayer7]: undefined,
    [LayersOrWidgets.ForecastSubLayer8]: undefined,
    [LayersOrWidgets.ForecastSubLayer9]: undefined,
    [LayersOrWidgets.ForecastSubLayer10]: undefined,
    [LayersOrWidgets.ForecastSubLayer11]: undefined,
    [LayersOrWidgets.ForecastSubLayerAll]: undefined,
    [LayersOrWidgets.Sketch]: undefined,
    [LayersOrWidgets.RecentHGroupLayer]: undefined,
    [LayersOrWidgets.RecentHSubLayer0]: undefined,
    [LayersOrWidgets.RecentHSubLayer1]: undefined,
    [LayersOrWidgets.RecentHSubLayer2]: undefined,
    [LayersOrWidgets.Measurement]: undefined
  };

  //graphicsLayer
  private graphicsLayer: any;
  private sketchWidget: any;
  private platformLayerView: any;
  // Create new instance of the Measurement widget
  measurementWidget: any;

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
      position: "top-left"
    });

    this.legend = new Legend({
      view: this.view,
      visible: true
    });
    this.view.ui.add(this.legend, "bottom-right");

    this.measurementWidget = new Measurement({
      view: this.view,
      visible: false,
      linearUnit: "miles",
      areaUnit: "square-miles",
    });
    // Add the appropriate measurement UI to the bottom-right when activated
    this.view.ui.add(this.measurementWidget, "bottom-right");

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

    this.platformLayer
      .when(() => {
        this.view.whenLayerView(this.platformLayer).then(function (layerView: any) {
          mainThis.platformLayerView = layerView;
        });
      })
      .catch((error: any) => {
        console.log('view platformLayer error', error);
      });

    this.SetHistoricHurricaneLayer();
    this.historicHurricaneTrackLayer.load().then(function () {
      map.add(mainThis.historicHurricaneTrackLayer);
    });

    this.SetHHConesLayer();
    this.hhConesLayer.load().then(function () {
      map.add(mainThis.hhConesLayer);
    });

    this.SetForecastHurricaneLayer();

    this.SetSketchLayer();
    map.add(this.graphicsLayer);
    this.view.ui.add(this.sketchWidget, "top-right");

    this.SetRHurricaneLayer();
    this.view.ui.add("sketchPanel", "top-right");
    this.view.ui.add("measurementDiv", "top-right");

    return this.view.when();
  }

  distanceMeasurement() {
    this.measurementWidget.activeTool = "distance";
  }

  areaMeasurement() {
    this.measurementWidget.activeTool = "area";
  }

  // Clears all measurements
  clearMeasurements() {
    this.measurementWidget.clear();
  }

  ClearSketch() {
    this.graphicsLayer.removeAll();
  }

  async ExportFeatures() {
    const graphics = this.graphicsLayer.graphics.items;
    const geometries = graphics.map(function (graphic: any) {
      return graphic.geometry;
    });
    const queryGeometry = await geometryEngineAsync.union(geometries);
    if (this.platformLayerView) {
      const queryView = {
        geometry: queryGeometry,
        outFields: ["*"]
      };

      this.platformLayerView
        .queryFeatures(queryView)
        .then((results: any) => {
          this.exportDataToExcel(results);
        })
        .catch((error: any) => {
          console.log("error while downloading sketched feature:", error);
        });
    }
  }

  getDateFormat(date: any) {
    if (date) {
      var dataAttr = new Date(date);
      return dataAttr.toISOString().slice(0, 10);
    }
    return date;
  }

  SetSketchLayer() {

    this.graphicsLayer = new GraphicsLayer({ title: "graphicsLayer" });

    // setup the Sketch widget with all snapping enabled by default
    this.sketchWidget = new Sketch({
      layer: this.graphicsLayer,
      view: this.view,
      // graphic will be selected as soon as it is created
      creationMode: "update",
      snappingOptions: {  // autocasts as SnappingOptions()
        enabled: true,
        selfEnabled: false,
        // enable snapping on the graphicslayer by default
        featureSources: [{ layer: this.graphicsLayer, enabled: true }]
      }
    });
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
            if (this.forecastHGroupLayer) {
              this.forecastHGroupLayer.visible = status.visible;
              // this.forecastHurricaneLayers.forEach((layer) => {
              //   layer.visible = status.visible;
              // });
            }
            break;
          case LayersOrWidgets.RecentHGroupLayer:
            if (this.recentHGroupLayer) {
              this.recentHGroupLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.PipelineLayer:
            if (this.pipelineLayer) {
              if (status.visible == true)
                this.showLoading(this.pipelineLayer);
              this.pipelineLayer.visible = status.visible;
            }
            break;
          case LayersOrWidgets.ForecastSubLayerAll:
            if (this.forecastHGroupLayer.layers.items) {
              this.forecastHGroupLayer.layers.items.forEach((layer: any) => {
                layer.visible = status.visible;
              });
            }
            break;
          case LayersOrWidgets.Sketch:
            if (this.sketchWidget) {
              this.sketchWidget.visible = status.visible;
              var sketchpnl = document.getElementById('sketchPanel');
              if (sketchpnl)
                sketchpnl.style.display = status.visible ? 'block' : 'none';
            }
            break;
          case LayersOrWidgets.Measurement:
            if (this.measurementWidget) {
              if (status.visible)
                this.distanceMeasurement();
              else
                this.clearMeasurements();
              this.measurementWidget.visible = status.visible;
              var measureMentPnl = document.getElementById('measurementDiv');
              if (measureMentPnl)
                measureMentPnl.style.display = status.visible ? 'block' : 'none';
            }
            break;
          default:
            let resultLayer = this.getLayerFromLayerOrWidget(status.type);
            if (resultLayer)
              resultLayer.visible = status.visible;
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
      mainThis.exportDataToExcel(result);
    });
  }

  private exportDataToExcel(result: any) {
    if (result.features && result.features.length > 0) {
      let header = Object.keys(result.features[0].attributes);
      let datas = [];
      for (let i = 0; i < result.features.length; i++) {

        //convert timestamp(arcgis store date as timestamp) to date format
        result.features[i].attributes.install_Date = this.getDateFormat(result.features[i].attributes.install_Date);
        result.features[i].attributes.removal_Date = this.getDateFormat(result.features[i].attributes.removal_Date);
        result.features[i].attributes.site_Clear_Date = this.getDateFormat(result.features[i].attributes.site_Clear_Date);
        result.features[i].attributes.i_InstallDate = this.getDateFormat(result.features[i].attributes.i_InstallDate);
        result.features[i].attributes.i_RemovalDate = this.getDateFormat(result.features[i].attributes.i_RemovalDate);

        datas.push(result.features[i].attributes);
      }
      this.excelService.ExportDataExcel(datas, header, "Platforms");
    }
    else {
      this.toastr.warning('No data to export', 'NO DATA');
    }
  }

  private SetMainPlatformLayer() {

    let commonPltformSymbols = {
      type: "simple-marker",
      size: "4px", // Adjust the size of the symbol as needed
      outline: {
        color: "transparent" // Set outline color to transparent
      }
    }

    var uniqueValueInfos = [
      {
        value: "Removed",
        symbol: {
          ...commonPltformSymbols,
          color: "grey",
        }
      },
      // You can add more unique value info objects for other values if needed
    ]

    let platformsRender = {
      type: "unique-value", // Use unique-value renderer for different symbols based on values
      legendOptions: {
        title: "Business Asc Name"
      },
      field: "bus_Asc_Name", // Use bus_Asc_Name field for differentiating values
      defaultLabel: "Active",// "Other Operators",
      valueExpression: `
      var bus_Asc_Name = $feature.bus_Asc_Name;
      var removal_Date = $feature.removal_Date;
      var today_date = Today();
      var diff = DateDiff(today_date, removal_Date, 'days');

      if (diff > 0) {
        return 'Removed';
      } else {
        return bus_Asc_Name;
      }
    `,
      defaultSymbol: {
        ...commonPltformSymbols,
        color: "blue",// Default color for features where the expression does not apply here for active we are setting blue and for removed it's gray
      },
      uniqueValueInfos: uniqueValueInfos
    };

    this.platformLayer = new GeoJSONLayer({
      url: `${this.baseUrl}GIS/gisplatformsgeojoined`,
      customParameters: {
        format: "geojson",
      },
      visible: true,
      title: "Platforms",
      refreshInterval: 5,//Refresh interval of the layer in minutes
      outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
      popupTemplate: this.getPlatformPopupTemplate()
    });
    this.platformLayer.renderer = platformsRender;
  }

  private getPlatformPopupTemplate() {
    // Define the popup template
    var popupTemplate = {
      title: "<span style='color: orange;'>Platform : {area_Code} {block_Number} {structure_Name}</span>",
      content: `
      <table class="esri-widget__table" style="width:100%">
          <tr>
              <th style="width:30%">Field Name</th>
              <th style="width:35%">BSEE</th>
              <th style="width:35%">iSIMS</th>
          </tr>
          <tr>
              <td>Complex Id Num</td>
              <td>{complex_Id_Num}</td>
              <td>{i_Cpxid}</td>
          </tr>
          <tr>
              <td>Structure Number</td>
              <td>{structure_Number}</td>
              <td>{i_Stn}</td>
          </tr>
          <tr>
              <td>Bus Asc Name</td>
              <td>{bus_Asc_Name}</td>
              <td>{i_OperatorName}</td>
          </tr>
          <tr>
              <td>Platform Name</td>
              <td>{platformName}</td>
              <td>{i_Platformname}</td>
          </tr>
          <tr>
              <td>Water Depth (feet)</td>
              <td>{water_Depth__feet_}</td>
              <td>{i_Wd}</td>
          </tr>
          <tr>
              <td>Authority Number</td>
              <td>{authority_Number}</td>
              <td>{i_AUTHNUM}</td>
          </tr>
          <tr>
              <td>Authority Status</td>
              <td>{authority_Status}</td>
              <td>{i_AUTHSTATUS}</td>
          </tr>
          <tr>
              <td>Authority Type</td>
              <td>{authority_Type}</td>
              <td>{i_AUTHTYP}</td>
          </tr>
          <tr>
              <td>Install Date</td>
              <td>{install_Date}</td>
              <td>{i_InstallDate}</td>
          </tr>
          <tr>
              <td>Attended 8 Hr</td>
              <td>{attended_8_Hr}</td>
              <td>{i_IsAttendedEighthHours}</td>
          </tr>
          <tr>
              <td>Heliport Flag</td>
              <td>{heliport_Flag}</td>
              <td>{i_HasHeliport}</td>
          </tr>
          <tr>
              <td>District Code</td>
              <td>{district_Code}</td>
              <td>{i_DistrictCode}</td>
          </tr>
          <tr>
              <td>Field</td>
              <td>{field}</td>
              <td></td>
          </tr>
          <tr>
              <td>INCs</td>
              <td>{iNCs}</td>
              <td></td>
          </tr>
          <tr>
              <td>Latitude</td>
              <td>{latitude}</td>
              <td>{i_Latitude}</td>
          </tr>
          <tr>
              <td>Lease Number</td>
              <td>{lease_Number}</td>
              <td></td>
          </tr>
          <tr>
              <td>Longitude</td>
              <td>{longitude}</td>
              <td>{i_Longitude}</td>
          </tr>
          <tr>
              <td>Maj Struc Flag</td>
              <td>{maj_Struc_Flag}</td>
              <td>{i_IsMajorStructure}</td>
          </tr>
          <tr>
              <td>Manned 24 Hr</td>
              <td>{manned_24_Hr}</td>
              <td></td>
          </tr>
          <tr>
              <td>Nad Year Cd</td>
              <td>{nad_Year_Cd}</td>
              <td></td>
          </tr>
          <tr>
              <td>Proj Code</td>
              <td>{proj_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Ptfrm X Location</td>
              <td>{ptfrm_X_Location}</td>
              <td></td>
          </tr>
          <tr>
              <td>Ptfrm Y Location</td>
              <td>{ptfrm_Y_Location}</td>
              <td></td>
          </tr>
          <tr>
              <td>Removal Date</td>
              <td>{removal_Date}</td>
              <td>{i_RemovalDate}</td>
          </tr>
          <tr>
              <td>Site Clear Date</td>
              <td>{site_Clear_Date}</td>
              <td></td>
          </tr>
          <tr>
              <td>Struc Type Code</td>
              <td>{struc_Type_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf E W Code</td>
              <td>{surf_E_W_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf E W Dist</td>
              <td>{surf_E_W_Dist}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf N S Code</td>
              <td>{surf_N_S_Code}</td>
              <td></td>
          </tr>
          <tr>
              <td>Surf N S Dist</td>
              <td>{surf_N_S_Dist}</td>
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
      title: "Platform:{platformName}",
      content: [{
        type: "fields",
        fieldInfos: [
          { fieldName: "bus_Asc_Name", label: "Operator Name" },
          { fieldName: "water_Depth__feet_", label: "Water Depth feet" },
          { fieldName: "install_Date", label: "Install Date" },
          { fieldName: "removal_Date", label: "Removal Date" }
        ]
      }]
    };
    this.platformsBSEELayer = new GeoJSONLayer({
      url: `${this.baseUrl}GIS/gisbseeplatformsgeo`,
      visible: false,
      customParameters: {
        format: "geojson",
      },
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
      layer = this.forecastHLayers;
      defaultCondition = this.defaultConditionForLayer.ForecastGroupLayer;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.RecentHGroupLayer) {
      layer = this.recentHGroupLayer.layers?.items[0];//to get queryExtent
      defaultCondition = this.defaultConditionForLayer.RecentHGroupLayer;
    }

    let finalCondition = this.getFinalFilterCondition(filters.details, defaultCondition);
    if (filters.layerOrWidget == LayersOrWidgets.HHConeLayer) {
      layer.definitionExpression = this.historicHurricaneTrackLayer.definitionExpression + "  AND " + finalCondition;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.PlatformLayer) {
      layer.definitionExpression = this.defaultConditionForLayer.PlatformLayer + " AND " + finalCondition;
    }
    else if (filters.layerOrWidget == LayersOrWidgets.RecentHGroupLayer) {
      this.recentHGroupLayer.layers.forEach((layer: any) => {
        layer.definitionExpression = finalCondition;
      });
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
            case FiltersType.RH_STORMNAME:
              let condition = key.toString() + " IN ('" + value.join("', '") + "')";
              expression.push(condition);
              break;
            case FiltersType.Water_Depth__feet_:
            case FiltersType.Complex_Id_Num:
            case FiltersType.PipelineSegmentNumber:
            case FiltersType.Install_Date:
            case FiltersType.Removal_Date:
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
        return this.forecastHLayers;
      case LayersOrWidgets.ForecastSubLayer0:
        return this.forecastHGroupLayer.layers.items[0];
      case LayersOrWidgets.ForecastSubLayer1:
        return this.forecastHGroupLayer.layers.items[1];
      case LayersOrWidgets.ForecastSubLayer2:
        return this.forecastHGroupLayer.layers.items[2];
      case LayersOrWidgets.ForecastSubLayer3:
        return this.forecastHGroupLayer.layers.items[3];
      case LayersOrWidgets.ForecastSubLayer4:
        return this.forecastHGroupLayer.layers.items[4];
      case LayersOrWidgets.ForecastSubLayer5:
        return this.forecastHGroupLayer.layers.items[5];
      case LayersOrWidgets.ForecastSubLayer7:
        return this.forecastHGroupLayer.layers.items[6];
      case LayersOrWidgets.ForecastSubLayer8:
        return this.forecastHGroupLayer.layers.items[7];
      case LayersOrWidgets.ForecastSubLayer9:
        return this.forecastHGroupLayer.layers.items[8];
      case LayersOrWidgets.ForecastSubLayer10:
        return this.forecastHGroupLayer.layers.items[9];
      case LayersOrWidgets.ForecastSubLayer11:
        return this.forecastHGroupLayer.layers.items[10];
      case LayersOrWidgets.RecentHGroupLayer:
        return this.recentHGroupLayer;
      case LayersOrWidgets.RecentHSubLayer0:
        return this.recentHGroupLayer.layers.items[0];
      case LayersOrWidgets.RecentHSubLayer1:
        return this.recentHGroupLayer.layers.items[1];
      case LayersOrWidgets.RecentHSubLayer2:
        return this.recentHGroupLayer.layers.items[2];
    }
    return null;
  }

  private getFieldDataForFilter(fieldName: FiltersType, condition: string = "1=1") {
    let mainThis = this;
    let options: { text: string, value: string }[] = [];

    //create reference to required layer
    let layerOrWidget = this.mapService.getLayerOrWidgetFromFilterType(fieldName);
    let layer = this.getLayerFromLayerOrWidget(layerOrWidget);

    if (fieldName === FiltersType.RH_STORMNAME)
      layer = this.recentHGroupLayer.layers.items[0];

    layer.queryFeatures({
      where: condition,// "1=1",
      returnDistinctValues: true,
      outFields: [fieldName],
      orderByFields: [fieldName]
    }).then(function (result: any) {
      result.features.forEach(function (feature: any) {
        var value = feature.attributes[fieldName];
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
    this.getFieldDataForFilter(FiltersType.operatorName, "i_IsMainOperator = 1");
    //this.getFieldDataForFilter(FiltersType.operatorName);
    this.getFieldDataForFilter(FiltersType.platformName);
    this.getFieldDataForFilter(FiltersType.HurricaneYear);
    this.getFieldDataForFilter(FiltersType.HurricaneName);
    this.getFieldDataForFilter(FiltersType.PipelineOperator);
    this.getFieldDataForFilter(FiltersType.PipelineStatusCode);
    //this.getFieldDataForFilter(FiltersType.RH_STORMNAME);- done after layer is loaded
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
      this.forecastHLayersDetails = response.data.layers;
      this.forecastHLayersDetails.forEach((layer: HLayerDetails) => {
        layer.isVisible = true;
        var fhLayer = new FeatureLayer({
          url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Active_Hurricanes_v1/FeatureServer/" + layer.id,
          title: layer.name,
          outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
          definitionExpression: "1=1",
          visible: true
        });
        this.forecastHLayers.push(fhLayer);
      });

      this.forecastHGroupLayer = new GroupLayer({
        visibilityMode: "independent",//Each child layer manages its visibility independent from other layers.
        title: "Forecast Hurricanes",
        visible: false
      });
      this.forecastHGroupLayer.layers.addMany(this.forecastHLayers);
      this.forecastHGroupLayer.loadAll()
        .catch((error: any) => {
          // Ignore any failed resources
          console.error("Error loading forecast hurricane layers:", error);
        })
        .then(() => {
          //console.log("All loaded");
          mainThis.map.add(mainThis.forecastHGroupLayer);
          this.mapService.setHLayerListFromMap({ layerOrWidget: LayersOrWidgets.ForecastGroupLayer, detailedList: mainThis.forecastHLayersDetails });
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

  private SetRHurricaneLayer() {

    let recentHUrl = "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Recent_Hurricanes_v1/FeatureServer";
    let mainThis = this;
    esriRequest(recentHUrl, {
      responseType: "json",
      query: {
        f: "json"
      }
    }).then((response: any) => {
      // The requested data
      this.recentHLayersDetails = response.data.layers;
      //console.log(response.data.layers, 'recentHLayersDetails');
      this.recentHLayersDetails.forEach((layer: HLayerDetails) => {
        layer.isVisible = true;
        var rhLayer = new FeatureLayer({
          url: recentHUrl + "/" + layer.id,
          title: layer.name,
          outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
          definitionExpression: "1=1",
          visible: true
        });
        this.recentHLayers.push(rhLayer);
      });

      this.recentHGroupLayer = new GroupLayer({
        visibilityMode: "independent",//Each child layer manages its visibility independent from other layers.
        title: "Recent Hurricanes",
        visible: false
      });
      this.recentHGroupLayer.layers.addMany(this.recentHLayers);
      this.recentHGroupLayer.loadAll()
        .catch((error: any) => {
          // Ignore any failed resources
          console.error("Error loading recent hurricane layers:", error);
        })
        .then(() => {
          //console.log("All loaded");
          mainThis.map.add(mainThis.recentHGroupLayer);
          this.mapService.setHLayerListFromMap({ layerOrWidget: LayersOrWidgets.RecentHGroupLayer, detailedList: mainThis.recentHLayersDetails });
          this.getFieldDataForFilter(FiltersType.RH_STORMNAME);
        });
    }).catch((err) => {
      if (err.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error encountered', err);
      }
    });

    /*
      Observed Position (0)
      Observed Track (1)
      Observed Wind Swath (2)
    */
  }

  private SetRHurricaneLayer_ISims() {
    let recentHUrl = "https://services2.arcgis.com/Tk8KtWY399EerUu0/arcgis/rest/services/recent_hurricane/FeatureServer";
    let mainThis = this;
    esriRequest(recentHUrl, {
      responseType: "json",
      query: {
        f: "json"
      }
    }).then((response: any) => {
      // The requested data
      this.recentHLayersDetails = response.data.layers;
      //console.log(response.data.layers, 'recentHLayersDetails');
      this.recentHLayersDetails.forEach((layer: HLayerDetails) => {
        layer.isVisible = true;
        var rhLayer = new FeatureLayer({
          url: recentHUrl + "/" + layer.id,
          title: layer.name,
          outFields: ["*"],//An array of field names used in the PopupTemplate. Use this property to indicate what fields are required to fully render the PopupTemplate.
          definitionExpression: "1=1",
          visible: true
        });

        if (layer.name == "Observed Wind Swath") {
          const windSwathRenderer: any = {
            type: "unique-value",
            field: "RADII",
            uniqueValueInfos: [
              this.createFillSymbol("34", "#FFFF00", "Tropical Storm Force (34kts)"),
              this.createFillSymbol("50", "#FF9900", "Strong Tropical Storm (50kts)"),
              this.createFillSymbol("64", "#FF0000", "Hurricane Force (64kts+)"),
            ]
          };
          rhLayer.renderer = windSwathRenderer,
            rhLayer.opacity = 0.3
        }
        else if (layer.name == "Observed Track") {
          let pink = "#ff73df";
          let width = 3;
          var uniqueValueInfos = [
            this.createLineSymbol("Low", pink, width),
            this.createLineSymbol("Remnant Low", pink, width),
            this.createLineSymbol("Disturbance", pink, width),
            this.createLineSymbol("Subtropical Storm", pink, width),
            this.createLineSymbol("Tropical Wave", pink, width),
            this.createLineSymbol("Tropical Depression", pink, width),
            this.createLineSymbol("Tropical Storm", "blue", width),
            this.createLineSymbol("Hurricane1", "#00FF00", 4),
            this.createLineSymbol("Hurricane2", "yellow", 5),
            this.createLineSymbol("Hurricane3", "#FF8000", 6),
            this.createLineSymbol("Hurricane4", "#FF0000", 7),
            this.createLineSymbol("Hurricane5", "#000000", 8)
          ]

          let trackRender: any = {
            type: "unique-value", // Use unique-value renderer for different symbols based on values
            legendOptions: {
              title: "Observed Track"
            },
            field: "STORMTYPE", // Use STORMTYPE field for differentiating values    

            // defaultSymbol: {
            //   color: "grey",
            //   type: "simple-fill",
            //   style: "solid",// Default color for features where the expression does not apply here for active we are setting blue and for removed it's gray
            // },
            uniqueValueInfos: uniqueValueInfos
          };

          rhLayer.renderer = trackRender;
          rhLayer.opacity = 0.5;
        }
        else if (layer.name == "Observed Position") {
          const positionRenderer: any = this.createDotSymbol("black", "10px", "orange", 2);
          rhLayer.renderer = positionRenderer;
          rhLayer.opacity = 1;
        }
        this.recentHLayers.push(rhLayer);
      });

      this.recentHGroupLayer = new GroupLayer({
        visibilityMode: "independent",//Each child layer manages its visibility independent from other layers.
        title: "Recent Hurricanes",
        visible: false
      });
      this.recentHGroupLayer.layers.addMany(this.recentHLayers);
      this.recentHGroupLayer.loadAll()
        .catch((error: any) => {
          // Ignore any failed resources
          console.error("Error loading recent hurricane layers:", error);
        })
        .then(() => {
          //console.log("All loaded");
          mainThis.map.add(mainThis.recentHGroupLayer);
          this.mapService.setHLayerListFromMap({ layerOrWidget: LayersOrWidgets.RecentHGroupLayer, detailedList: mainThis.recentHLayersDetails });
          this.getFieldDataForFilter(FiltersType.RH_STORMNAME);
        });
    }).catch((err) => {
      if (err.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        console.error('Error encountered', err);
      }
    });

    /*
      Observed Position (0)
      Observed Track (1)
      Observed Wind Swath (2)
    */
  }

  createFillSymbol(value: any, color: string, label: string) {
    return {
      "value": value,
      "symbol": {
        "color": color,
        "type": "simple-fill",
        "style": "solid",
        "outline": {
          "style": "none"
        }
      },
      "label": label
    };
  }

  createLineSymbol(value: any, color: string, lineWidth: number) {
    return {
      "value": value,
      "symbol": {
        "color": color,
        "type": "simple-line",
        "style": "solid",
        "width": lineWidth,
        // "outline": {
        //   "style": "none"
        // }
      },
      "label": value
    };
  }

  createDotSymbol(color: string, size: any, outlineColor: any, outlineWidth: any) {
    return {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        size: size,
        color: color,
        outline: {  // autocasts as new SimpleLineSymbol()
          width: outlineWidth,
          color: outlineColor
        }
      }
    }
  }

  //#endregion

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}

