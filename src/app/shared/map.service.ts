import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor() { }

  //initially platform layer is visible by default
  private showLayersOrWidgetsSubject = new BehaviorSubject<LayersOrWidgetsStatus>({ type: LayersOrWidgets.PlatformLayer, visible: true });
  public showLayersOrWidgets$ = this.showLayersOrWidgetsSubject.asObservable();
  public ShowHideLayersOrWidgets(show: LayersOrWidgetsStatus) {
    this.showLayersOrWidgetsSubject.next(show);
  }

  //to apply filetering for platform layer - initial value null to identify not to apply filter - to avoid unnecessary call to filters to map on app load
  private setMapFiltersSubject = new BehaviorSubject<MapFilterNullable>(null);
  public setMapFilters$ = this.setMapFiltersSubject.asObservable();

  private platformFilters: MapFilter = { layerOrWidget: LayersOrWidgets.PlatformLayer, details: new MapFilterDetails() };

  //reset filtering
  private resetPlatformFiltersSubject = new BehaviorSubject<any>(null);
  public resetPlatformFilters$ = this.resetPlatformFiltersSubject.asObservable();

  //To update filterlist based on other filters
  //example: update block filter dropdown based on area code selection, update platform name dropdown based on AREA CODE and BLOCK NUMBER selection
  //we pass map(key,value) object then we form filter condition for map to query the layer
  private updateFiltersListSubject = new BehaviorSubject<FilterListUpdateNullable>(null);
  public updateFiltersList$ = this.updateFiltersListSubject.asObservable();

  setMapFilterValue(type: FiltersType, value: any[]) {
    let layerOrWidget = this.getLayerOrWidgetFromFilterType(type);
    let filterList = this.getFilterObjectFromLayerOrWidgetType(layerOrWidget);
    if (filterList == null)
      return;

    let refreshFilters = false;//if some things change then refresh
    if (value.length < 1) {
      //filter cleared
      if (filterList.details.has(type)) {
        filterList.details.delete(type);
        refreshFilters = true;
      }
    }
    else {
      filterList.details.set(type, value);
      refreshFilters = true;
    }

    if (!refreshFilters)
      return;

    this.setMapFiltersSubject.next(filterList);

    switch (layerOrWidget) {
      case LayersOrWidgets.PlatformLayer:
        this.updatePlatformFilterList(type, value);
        break;
      case LayersOrWidgets.HistoricHurricaneTrackLayer:
        this.updateHurricaneFilterList(type, value);
        break;
    }
  }

  private updatePlatformFilterList(type: FiltersType, value: any) {
    if (type === FiltersType.Area_Code) {
      //update block numbers list      
      let areaCodeFilters = new Map<FiltersType, any>();
      areaCodeFilters.set(FiltersType.Area_Code, value);
      this.updateFiltersListSubject.next({ type: FiltersType.Block_Number, value: areaCodeFilters })
    }
  }

  clearPlatformFilters() {
    //get area code list - if not null and count > 0 then update block list
    let areaFilter = this.platformFilters.details.get(FiltersType.Area_Code);
    this.platformFilters.details.clear();
    this.setMapFiltersSubject.next(this.platformFilters);
    this.resetPlatformFiltersSubject.next(true);

    if (areaFilter && areaFilter.length > 0) {
      //update block list (after reseting filter) only if area filter was there , else it would be already a full list
      this.updateFiltersListSubject.next({ type: FiltersType.Block_Number, value: null })
    }
  }

  private downloadFilteredDataSubject = new BehaviorSubject<LayersOrWidgets | null>(null);
  public downloadFilteredData$ = this.downloadFilteredDataSubject.asObservable();
  downloadFilteredData(layerOrWidget: LayersOrWidgets) {
    this.downloadFilteredDataSubject.next(layerOrWidget);
  }

  //#region 
  //to apply filetering for hurricane layer
  //hurricane layer filters
  private hurricaneFilters: MapFilter = { layerOrWidget: LayersOrWidgets.HistoricHurricaneTrackLayer, details: new MapFilterDetails() };

  //To update filterlist based on other filters
  //example: update year filter dropdown based on name selection, update hurricane name dropdown based on year selection

  private updateHurricaneFilterList(type: FiltersType, value: any) {
    //first priority goes to first filter selection. update another filter list only if that filter does not have any filters applied.
    //on clear current filter selection - if another filter has any applied filters then update current filter list 
    if (type === FiltersType.HurricaneYear) {
      if (!this.hurricaneFilters.details.has(FiltersType.HurricaneName)) {
        //update name list only if name list does not has filter    
        let yearFilters = new Map<FiltersType, any>();
        yearFilters.set(FiltersType.HurricaneYear, value);
        this.updateFiltersListSubject.next({ type: FiltersType.HurricaneName, value: yearFilters })
      }
      if (value.length < 1)//current filter is cleared so need to update current filter list
      {
        //update year list based on selected name (name selection may have changed but due to applied filters for year , we have not updated year list. we are only updating year list if it does not have any filter applied)
        let nameFilters = null;
        if (this.hurricaneFilters.details.has(FiltersType.HurricaneName)) {
          nameFilters = new Map<FiltersType, any>();
          nameFilters.set(FiltersType.HurricaneName, this.hurricaneFilters.details.get(FiltersType.HurricaneName));
        }
        this.updateFiltersListSubject.next({ type: FiltersType.HurricaneYear, value: nameFilters });
      }
    }
    else if (type === FiltersType.HurricaneName) {
      if (!this.hurricaneFilters.details.has(FiltersType.HurricaneYear)) {
        //update year list only if it does not has any filter applied      
        let nameFilters = new Map<FiltersType, any>();
        nameFilters.set(FiltersType.HurricaneName, value);
        this.updateFiltersListSubject.next({ type: FiltersType.HurricaneYear, value: nameFilters });
      }
      if (value.length < 1)//current filter is cleared so need to update current filter list
      {
        //update name list based on selected years (year selection may have changed but due to applied filters for name , we have not updated name list. we are only updating name list if it does not have any filter applied)
        let yearFilters = null;
        if (this.hurricaneFilters.details.has(FiltersType.HurricaneYear)) {
          yearFilters = new Map<FiltersType, any>();
          yearFilters.set(FiltersType.HurricaneYear, this.hurricaneFilters.details.get(FiltersType.HurricaneYear));
        }
        this.updateFiltersListSubject.next({ type: FiltersType.HurricaneName, value: yearFilters });
      }
    }

    this.updateFiltersListSubject.next({ type: FiltersType.HConeAdvisory, value: this.hurricaneFilters.details });
  }

  clearHurricaneFilters() {
    //get list - if not null and count > 0 then update dependent list
    let yearFilter = this.hurricaneFilters.details.get(FiltersType.HurricaneYear);
    let nameFilter = this.hurricaneFilters.details.get(FiltersType.HurricaneName);
    this.hurricaneFilters.details.clear();
    this.hConeLayerFilters.details.clear();
    this.setMapFiltersSubject.next(this.hurricaneFilters);
    this.setMapFiltersSubject.next(this.hConeLayerFilters);

    if (yearFilter && yearFilter.length > 0) {
      //update name list (after reseting filter) only if year filter was there , else it would be already a full list
      this.updateFiltersListSubject.next({ type: FiltersType.HurricaneName, value: null })
    }
    if (nameFilter && nameFilter.length > 0) {
      //update year list (after reseting filter) only if name filter was there , else it would be already a full list
      this.updateFiltersListSubject.next({ type: FiltersType.HurricaneYear, value: null })
    }
  }

  private rHFilters: MapFilter = { layerOrWidget: LayersOrWidgets.RecentHGroupLayer, details: new MapFilterDetails() };
  clearRHFilters() {
    this.rHFilters.details.clear();
    this.setMapFiltersSubject.next(this.rHFilters);
  }

  private hConeLayerFilters: MapFilter = { layerOrWidget: LayersOrWidgets.HHConeLayer, details: new MapFilterDetails() };

  //#endregion

  //#region Hurricanes
  //FOR getting hurricane sub layer list from map data
  private HLayerListFromMapSubject = new BehaviorSubject<HLayerDetailsListNullable>(null);
  public hLayerListFromMap$ = this.HLayerListFromMapSubject.asObservable();

  setHLayerListFromMap(value: HLayerDetailsListNullable) {
    this.HLayerListFromMapSubject.next(value);
  }
  //#endregion

  //#region Pipeline filter
  private pipelineFilters: MapFilter = { layerOrWidget: LayersOrWidgets.PipelineLayer, details: new MapFilterDetails() };

  //reset filtering
  private resetPipelineFiltersSubject = new BehaviorSubject<any>(null);
  public resetPipelineFilters$ = this.resetPipelineFiltersSubject.asObservable();
  clearPipelineFilters() {
    this.pipelineFilters.details.clear();
    this.setMapFiltersSubject.next(this.pipelineFilters);
    this.resetPipelineFiltersSubject.next(true);
  }
  //#endregion Pipeline filter

  //FOR getting filter list from map data
  private FilterListFromMapSubject = new BehaviorSubject<FilterListFromMap>({ type: FiltersType.None, value: [] });
  public filterListFromMap$ = this.FilterListFromMapSubject.asObservable();

  setFilterListFromMap(value: FilterListFromMap) {
    this.FilterListFromMapSubject.next(value);
  }

  //#region  Helper functions

  getLayerOrWidgetFromFilterType(type: FiltersType) {
    switch (type) {
      case FiltersType.ActiveStatus:
      case FiltersType.Area_Code:
      case FiltersType.Block_Number:
      case FiltersType.Bus_Asc_Name:
      case FiltersType.operatorName:
      case FiltersType.Complex_Id_Num:
      case FiltersType.Install_Date:
      case FiltersType.Removal_Date:
      case FiltersType.Water_Depth__feet_:
      case FiltersType.platformName:
        return LayersOrWidgets.PlatformLayer;
      case FiltersType.HurricaneName:
      case FiltersType.HurricaneYear:
        return LayersOrWidgets.HistoricHurricaneTrackLayer;
      case FiltersType.PipelineOperator:
      case FiltersType.PipelineSegmentNumber:
      case FiltersType.PipelineStatusCode:
        return LayersOrWidgets.PipelineLayer;
      case FiltersType.HConeAdvisory:
        return LayersOrWidgets.HHConeLayer;
      case FiltersType.RH_STORMNAME:
        return LayersOrWidgets.RecentHGroupLayer;
      default:
        return LayersOrWidgets.None;
    }
  }

  private getFilterObjectFromType(type: FiltersType) {
    let layerOrWidget = this.getLayerOrWidgetFromFilterType(type);
    return this.getFilterObjectFromLayerOrWidgetType(layerOrWidget);
  }
  private getFilterObjectFromLayerOrWidgetType(layerOrWidget: LayersOrWidgets) {
    switch (layerOrWidget) {
      case LayersOrWidgets.PlatformLayer:
        return this.platformFilters;
      case LayersOrWidgets.HistoricHurricaneTrackLayer:
        return this.hurricaneFilters;
      case LayersOrWidgets.HHConeLayer:
        return this.hConeLayerFilters;
      case LayersOrWidgets.PipelineLayer:
        return this.pipelineFilters;
      case LayersOrWidgets.RecentHGroupLayer:
        return this.rHFilters;
      default:
        return null;
    }
  }
  //#endregion  Helper functions
}

//Platform filter types
export enum FiltersType {
  None = 'None',
  ActiveStatus = 'ActiveStatus',//filter from BSEE field-need to add ActiveStatus field to BSEE layer
  Area_Code = 'Area_Code',
  Block_Number = 'Block_Number',
  Bus_Asc_Name = 'Bus_Asc_Name',//BSEE Operator
  operatorName = 'operatorName',//Isims Operator
  platformName = 'PlatformName',//filter from BSEE field-need to add PlatformName field to BSEE layer
  Water_Depth__feet_ = 'Water_Depth__feet_',
  Install_Date = 'Install_Date',
  Removal_Date = 'Removal_Date',
  Complex_Id_Num = 'Complex_Id_Num',
  HurricaneYear = 'year',//For Hurricane
  HurricaneName = 'NAME',//For Hurricane
  PipelineSegmentNumber = 'SEGMENT_NU',
  PipelineOperator = "SDE_COMPAN",
  PipelineStatusCode = "STATUS_COD",
  HConeAdvisory = "AdvisoryNo",//"AdvisoryNu",//For cone layer  
  RH_STORMNAME = "STORMNAME"//for recent hurricane layer
}

export interface FilterList {
  text: string;
  value: string;
}

export enum PlatformStatus {
  Active = 'Active',
  Removed = 'Removed',
}

export interface FilterListUpdate {
  type: FiltersType,//update filter list for type
  value: MapFilterDetailsNullable//depends on other filters - it can be null to get full filter list
}

export type FilterListUpdateNullable = FilterListUpdate | null;

export interface FilterListFromMap {
  type: FiltersType,
  value: FilterList[]
}

export interface LayersOrWidgetsStatus {
  type: LayersOrWidgets
  visible: boolean
}

export enum LayersOrWidgets {
  PlatformLayer = "PlatformLayer",
  BSEEPlatformLayer = "BSEEPlatformLayer",
  Legend = "Legend",
  AreaLayer = "AreaLayer",
  BLockLayer = "BLockLayer",
  HistoricHurricaneTrackLayer = "HistoricHurricaneTrackLayer",
  HHConeLayer = "HHConeLayer",
  ForecastGroupLayer = "ForecastGroupLayer",
  PipelineLayer = "PipelineLayer",
  ForecastSubLayerAll = "ForecastSubLayerAll",
  ForecastSubLayer0 = "ForecastSubLayer0",
  ForecastSubLayer1 = "ForecastSubLayer1",
  ForecastSubLayer2 = "ForecastSubLayer2",
  ForecastSubLayer3 = "ForecastSubLayer3",
  ForecastSubLayer4 = "ForecastSubLayer4",
  ForecastSubLayer5 = "ForecastSubLayer5",
  //ForecastSubLayer6 = "ForecastSubLayer6",//not used in forecast hurricanes
  ForecastSubLayer7 = "ForecastSubLayer7",
  ForecastSubLayer8 = "ForecastSubLayer8",
  ForecastSubLayer9 = "ForecastSubLayer9",
  ForecastSubLayer10 = "ForecasSubtLayer10",
  ForecastSubLayer11 = "ForecasSubtLayer11",
  RecentHGroupLayer = "RecentHGroupLayer",
  RecentHSubLayer0 = "RecentHSubLayer0",
  RecentHSubLayer1 = "RecentHSubLayer1",
  RecentHSubLayer2 = "RecentHSubLayer2",
  None = "None",
  Sketch = "Sketch",
}

export class MapFilterDetails extends Map<FiltersType, any> { };

//Filter for specific layers or widgets. here based on layerOrWidget we apply filter to that layerOrWidget
export interface MapFilter {
  layerOrWidget: LayersOrWidgets,
  details: MapFilterDetails
}

export type MapFilterNullable = MapFilter | null;
export type MapFilterDetailsNullable = MapFilterDetails | null;

export interface MapResultSet {
  Color: string;
  Shape: string;
  Size: number;
  Name: string;
  Index: number;
}

export interface FHLayerDetails {
  // defaultVisibility: true,
  // geometryType: "esriGeometryPoint",
  // id: 0,
  // maxScale: 0,
  // minScale: 0,
  // name: "Forecast Position",
  // parentLayerId: -1,
  // subLayerIds: null,
  // type: "Feature Layer"
  defaultVisibility: boolean,
  geometryType: string,
  id: number,
  maxScale: number,
  minScale: number,
  name: string,
  parentLayerId: number,
  subLayerIds: any,
  type: string,
  isVisible: boolean
}

export interface HLayerDetailsList {
  layerOrWidget: LayersOrWidgets;
  detailedList: FHLayerDetails[];
}

export type HLayerDetailsListNullable = HLayerDetailsList | null