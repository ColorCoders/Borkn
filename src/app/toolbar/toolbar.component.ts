import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SettingsComponent} from '../settings/settings.component';
import {ProfileComponent} from '../profile/profile.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    
  }

  //menu action
  showMenu(){
    console.log("menu clicked");
  }

  //for person icon
  showPerson(){

    const profilePopup = this.dialog.open(ProfileComponent);
    
    profilePopup.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //for settings cog
  showSettings(){

    const settingsDialog = this.dialog.open(SettingsComponent);

    settingsDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
