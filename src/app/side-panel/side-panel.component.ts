import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FHLayerDetails, FilterList, FiltersType, LayersOrWidgets, MapResultSet, MapService, PlatformStatus } from '../shared/map.service';
import { DropdownFilterComponent } from '../shared/dropdown-filter/dropdown-filter.component';
import { NumericFilterComponent } from '../shared/numeric-filter/numeric-filter.component';
import { DateFilterComponent } from "../shared/date-filter/date-filter.component";
import { SimpleNumericFilterComponent } from '../shared/simple-numeric-filter/simple-numeric-filter.component';
import { NumericEqualFilterComponent } from '../shared/numeric-equal-filter/numeric-equal-filter.component';
import { SingleSelectComponent } from "../shared/single-select/single-select.component";

@Component({
  selector: 'app-side-panel',
  standalone: true,
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
  imports: [CommonModule, FormsModule, DropdownFilterComponent, NumericFilterComponent, DateFilterComponent, SimpleNumericFilterComponent, NumericEqualFilterComponent, SingleSelectComponent]
})
export class SidePanelComponent {

  public PlatformStatusEnum = PlatformStatus;
  public LayerOrWidgetEnum = LayersOrWidgets;

  constructor(private mapService: MapService) {
    mapService.setMapFilters$.subscribe((filters) => {
      if (filters == null)//we can use this to turn off all filters on Map in future
        return;
      let hasFilter = filters.details.size > 0;
      if (filters.layerOrWidget == LayersOrWidgets.PlatformLayer)
        this.hasLayerFilters.PlatformLayer = hasFilter;
      else if (filters.layerOrWidget == LayersOrWidgets.HistoricHurricaneTrackLayer)
        this.hasLayerFilters.HistoricHurricaneTrackLayer = hasFilter;
      else if (filters.layerOrWidget == LayersOrWidgets.HHConeLayer)
        this.hasLayerFilters.HHConeLayer = hasFilter;
      else if (filters.layerOrWidget == LayersOrWidgets.PipelineLayer)
        this.hasLayerFilters.PipelineLayer = hasFilter;
      else if (filters.layerOrWidget == LayersOrWidgets.RecentHGroupLayer)
        this.hasLayerFilters.RecentHGroupLayer = hasFilter;
    });
    mapService.filterListFromMap$.subscribe((filters) => {
      switch (filters.type) {
        case FiltersType.Area_Code:
          this.areaCodes = filters.value;
          break;
        case FiltersType.Block_Number:
          this.blockNumbers = filters.value;
          break;
        case FiltersType.Bus_Asc_Name:
          this.bseeOperators = filters.value;
          break;
        case FiltersType.operatorName:
          this.iSIMSOperators = filters.value;
          break;
        case FiltersType.platformName:
          this.platformNames = filters.value;
          break;
        case FiltersType.HurricaneYear:
          this.hurricaneYears = filters.value;
          break;
        case FiltersType.HurricaneName:
          this.hurricaneNames = filters.value;
          break;
        case FiltersType.PipelineOperator:
          this.pipelineOperators = filters.value;
          break;
        case FiltersType.PipelineStatusCode:
          this.pipelineStatusCodes = filters.value;
          break;
        case FiltersType.HConeAdvisory:
          this.coneAdvisory = filters.value;
          let oldValue = this.showHH_Cones;
          this.showHH_Cones = this.showHH_Cones && this.coneAdvisory.length > 0;
          if (oldValue != this.showHH_Cones)
            this.toggleShowHH_Cone();
          break;
        case FiltersType.RH_STORMNAME:
          this.rHurricaneNames = filters.value;
          break;
        default:
          break;
      }
    });
    mapService.hLayerListFromMap$.subscribe((data) => {
      if (data) {
        if (data?.layerOrWidget == LayersOrWidgets.ForecastGroupLayer)
          this.fhSubLayers = data.detailedList;
        if (data?.layerOrWidget == LayersOrWidgets.RecentHGroupLayer)
          this.rhSubLayers = data.detailedList;
      }
    });
  }

  showBlocks = false;
  showArea = false;
  showPlatforms = true;
  showBSEEPlatforms = false;
  platformStatus: PlatformStatus[] = [];
  showHurricaneUI = false;
  showRecentHurricane = false;
  showPipelines = false;
  showHH_Track = false;
  showHH_Cones = false;
  showFH = false;

  areaCodes: FilterList[] = [];
  blockNumbers: FilterList[] = [];
  bseeOperators: FilterList[] = [];
  iSIMSOperators: FilterList[] = [];
  platformNames: FilterList[] = [];
  platformFilterResetItems: [] = [];//AS of now we just need one for all filters to clear the selection on clear all filter button click - clearFilters()
  pipelineFilterResetItems: [] = [];//AS of now we just need one for all filters to clear the selection on clear all filter button click - clearFilters()
  hurricaneFilterResetItems = [] = [];
  recentHFilterResetItems = [] = [];
  hurricaneYears: FilterList[] = [];
  hurricaneNames: FilterList[] = [];
  pipelineOperators: FilterList[] = [];
  pipelineStatusCodes: FilterList[] = [];
  coneAdvisory: FilterList[] = [];
  rHurricaneNames: FilterList[] = [];
  fhSubLayers: FHLayerDetails[] = [];
  rhSubLayers: FHLayerDetails[] = [];

  hasLayerFilters: Record<LayersOrWidgets, Partial<boolean>> = {
    [LayersOrWidgets.PlatformLayer]: false,
    [LayersOrWidgets.HistoricHurricaneTrackLayer]: false,
    [LayersOrWidgets.BSEEPlatformLayer]: false,
    [LayersOrWidgets.Legend]: false,
    [LayersOrWidgets.AreaLayer]: false,
    [LayersOrWidgets.BLockLayer]: false,
    [LayersOrWidgets.None]: false,
    [LayersOrWidgets.PipelineLayer]: false,
    [LayersOrWidgets.HHConeLayer]: false,
    [LayersOrWidgets.ForecastGroupLayer]: false,
    [LayersOrWidgets.ForecastSubLayer0]: false,
    [LayersOrWidgets.ForecastSubLayer1]: false,
    [LayersOrWidgets.ForecastSubLayer2]: false,
    [LayersOrWidgets.ForecastSubLayer3]: false,
    [LayersOrWidgets.ForecastSubLayer4]: false,
    [LayersOrWidgets.ForecastSubLayer5]: false,
    [LayersOrWidgets.ForecastSubLayer7]: false,
    [LayersOrWidgets.ForecastSubLayer8]: false,
    [LayersOrWidgets.ForecastSubLayer9]: false,
    [LayersOrWidgets.ForecastSubLayer10]: false,
    [LayersOrWidgets.ForecastSubLayer11]: false,
    [LayersOrWidgets.ForecastSubLayerAll]: false,
    [LayersOrWidgets.Sketch]: false,
    [LayersOrWidgets.RecentHGroupLayer]: false,
    [LayersOrWidgets.RecentHSubLayer0]: false,
    [LayersOrWidgets.RecentHSubLayer1]: false,
    [LayersOrWidgets.RecentHSubLayer2]: false
  };

  toggleBlockLayer() {
    this.showBlocks = !this.showBlocks;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.BLockLayer, visible: this.showBlocks });
  }

  toggleAreaLayer() {
    this.showArea = !this.showArea;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.AreaLayer, visible: this.showArea });
  }

  togglePlatformLayer() {
    this.showPlatforms = !this.showPlatforms;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.PlatformLayer, visible: this.showPlatforms });
  }

  toggleBSEEPlatformLayer() {
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.BSEEPlatformLayer, visible: this.showBSEEPlatforms });
  }

  setPlatformStatus(status: PlatformStatus) {
    if (!this.platformStatus.includes(status)) {
      this.platformStatus.push(status);
    }
    else {
      this.platformStatus.splice(this.platformStatus.indexOf(status), 1);
    }
    this.mapService.setMapFilterValue(FiltersType.ActiveStatus, this.platformStatus);
  }

  clearPlatformFilters() {
    //clear all filters
    this.platformStatus = [];
    this.mapService.clearPlatformFilters();
    this.platformFilterResetItems = [];
  }

  downloadFilteredPlatforms() {
    this.mapService.downloadFilteredData(LayersOrWidgets.PlatformLayer);
  }

  OnAreaFilterChanged($event: any) {
    var filteredAreaCodes: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.Area_Code, filteredAreaCodes.map(x => x.value));
  }

  OnBlockNumberFilterChanged($event: any) {
    var filtered: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.Block_Number, filtered.map(x => x.value));
  }

  OnBSEEOperatorFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.Bus_Asc_Name, filteredData.map(x => x.value));
  }

  OniSIMSOperatorFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.operatorName, filteredData.map(x => x.value));
  }

  OnPlatformNameFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.platformName, filteredData.map(x => x.value));
  }
  OnWDFilterChanged($event: any) {
    if ($event == null || $event.length == 0) {//reset filter
      this.mapService.setMapFilterValue(FiltersType.Water_Depth__feet_, []);
    }
    else {
      this.mapService.setMapFilterValue(FiltersType.Water_Depth__feet_, $event);
    }
  }

  OnCPXIDFilterChanged($event: any) {
    if ($event == null || $event.length == 0) {//reset filter
      this.mapService.setMapFilterValue(FiltersType.Complex_Id_Num, []);
    }
    else {
      this.mapService.setMapFilterValue(FiltersType.Complex_Id_Num, $event);
    }
  }

  OnInstallDateChanged($event: any) {
    if ($event == null || $event.length == 0) {
      this.mapService.setMapFilterValue(FiltersType.Install_Date, []);
    }
    else {
      this.mapService.setMapFilterValue(FiltersType.Install_Date, $event);
    }
  }
  OnRemovalDateChanged($event: any) {
    if ($event == null || $event.length == 0) {
      this.mapService.setMapFilterValue(FiltersType.Removal_Date, []);
    }
    else {
      this.mapService.setMapFilterValue(FiltersType.Removal_Date, $event);
    }
  }

  //#region Hurricanes 
  clearHurricaneFilters() {
    this.mapService.clearHurricaneFilters();
    this.hurricaneFilterResetItems = [];
  }

  OnHurricaneYearsFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.HurricaneYear, filteredData.map(x => x.value));
  }

  OnHurricaneNamesFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.HurricaneName, filteredData.map(x => x.value));
  }

  OnRHNamesFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.RH_STORMNAME, filteredData.map(x => x.value));
  }

  toggleShowHH_Track() {
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.HistoricHurricaneTrackLayer, visible: this.showHH_Track });
  }

  toggleShowHH_Cone() {
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.HHConeLayer, visible: this.showHH_Cones });
  }

  OnHConeAdvisoryFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.HConeAdvisory, filteredData.map(x => x.value));
  }

  toggleShowFH() {
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.ForecastGroupLayer, visible: this.showFH });
  }

  toggleShowFHlayer(layer: any) {
    layer.isVisible = !layer.isVisible;
    let layerName = "ForecastSubLayer" + layer.id;
    let layerWidget = layerName as keyof typeof LayersOrWidgets;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets[layerWidget], visible: layer.isVisible })
  }

  toggleRecentHLayer() {
    this.showRecentHurricane = !this.showRecentHurricane;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.RecentHGroupLayer, visible: this.showRecentHurricane });
  }

  toggleShowRHlayer(layer: any) {
    layer.isVisible = !layer.isVisible;
    let layerName = "RecentHSubLayer" + layer.id;
    let layerWidget = layerName as keyof typeof LayersOrWidgets;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets[layerWidget], visible: layer.isVisible })
  }

  clearRHFilters() {
    this.mapService.clearRHFilters();
    this.recentHFilterResetItems = [];
  }
  //#endregion Hurricanes

  //#region Pipelines
  togglePipelineLayer() {
    this.showPipelines = !this.showPipelines;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.PipelineLayer, visible: this.showPipelines });
  }
  clearPipelineFilters() {
    this.mapService.clearPipelineFilters();
    this.pipelineFilterResetItems = [];
  }
  OnPipelineOperatorFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.PipelineOperator, filteredData.map(x => x.value));
  }
  OnStatusCodeFilterChanged($event: any) {
    var filteredData: FilterList[] = $event;
    this.mapService.setMapFilterValue(FiltersType.PipelineStatusCode, filteredData.map(x => x.value));
  }
  OnSegmentNumFilterChanged($event: any) {
    if ($event == null || $event.length == 0) {//reset filter
      this.mapService.setMapFilterValue(FiltersType.PipelineSegmentNumber, []);
    }
    else {
      this.mapService.setMapFilterValue(FiltersType.PipelineSegmentNumber, $event);
    }
  }
  //#endregion

  //#region Settings
  resultSet: MapResultSet[] = [];
  shapeOptions = ['circle', 'square', 'cross', 'x', 'diamond', 'triangle', 'path'];
  selectedShape = null;
  selectedName = null;
  selectedColor = '#0d6efd';
  selectedSize = 4;
  selectedResultSet: MapResultSet | null = null;
  shapeSelectionChanged($event: any) {
    this.selectedShape = $event;
  }

  SaveResultSet() {
    let result: MapResultSet = {
      Color: this.selectedColor != null ? this.selectedColor : '#0d6efd',
      Shape: this.selectedShape != null ? this.selectedShape : 'circle',
      Size: this.selectedSize != null ? this.selectedSize : 4,
      Name: this.selectedName != null ? this.selectedName : 'defaultSet',
      Index: 0
    }

    if (this.selectedResultSet != null) {
      result.Index = this.selectedResultSet.Index;
      this.selectedResultSet = result;
      this.resultSet.splice(this.selectedResultSet.Index, 1, result);
    }
    else {
      result.Index = this.resultSet.length;
      this.resultSet.push(result);
    }
  }
  //#endregion
}