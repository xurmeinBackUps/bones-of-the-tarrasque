import { Component, OnInit } from '@angular/core';
import { Tile } from '../../models/tile.grid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  grid_width : number;
  tiles : Tile[] = [
    { color : 'white', type : 'n/a', tileX : 1, tileY : 1  } 
    
  ];

  constructor() { }

  ngOnInit() {
    this.grid_width = 25;
  }

  deltaX() {

  }
}
