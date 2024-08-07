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

  constructor(private mapService: MapService) {

  }
  toggleLegend() {
    this.showLegend = !this.showLegend;
    this.mapService.ShowHideLayersOrWidgets({ type: LayersOrWidgets.Legend, visible: this.showLegend });
  }

}
