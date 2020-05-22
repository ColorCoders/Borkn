import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Borkn';

  //menu action
  showMenu(){
    console.log("menu clicked");
  }

  //for person icon
  showPerson(){

  }

  //for settings cog
  showSettings(){

  }
}
