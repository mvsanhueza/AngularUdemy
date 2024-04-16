import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: [
    './mini-map.component.css'
  ]
})
export class MiniMapComponent implements AfterViewInit {

  @Input() LngLat?: [number, number];

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement) throw "Map Div not found";
    if(!this.LngLat) throw "LngLat can't be null";

    const [lng, lat] = this.LngLat;

    const coords = new LngLat(lng, lat);

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: coords, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false, //usuario no puede interactuar con mapa
    });

    //Se agrega el marker:
    new Marker().setLngLat(coords)
      .addTo(map);
  }

}
