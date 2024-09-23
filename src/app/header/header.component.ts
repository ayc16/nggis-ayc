import { Component } from '@angular/core';
import { LayersOrWidgets, MapService } from '../shared/map.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showLegend = true;
  showSketch = true;
  showMeasurement = false;

  constructor(private mapService: MapService) {

  }
  toggleLegend() {
    this.showLegend = !this.showLegend;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.Legend, visible: this.showLegend });
  }
  toggleSketch() {
    this.showSketch = !this.showSketch;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.Sketch, visible: this.showSketch });
  }
  toggleMeasurement() {
    this.showMeasurement = !this.showMeasurement;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.Measurement, visible: this.showMeasurement });
  }
}
