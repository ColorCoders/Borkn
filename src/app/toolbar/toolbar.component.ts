import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //menu action
  showMenu(){
    console.log("menu clicked");
  }

  //for person icon
  showPerson(){
    console.log("person clicked");

  }

  //for settings cog
  showSettings(){
    console.log("settings clicked");
  }
}
