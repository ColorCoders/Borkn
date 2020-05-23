import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Dog } from '../models/Dog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router, private _formBuilder: FormBuilder) { }

  isLinear = false;

  //For use with ngFor
  dogs: Dog[];

  ngOnInit(): void {
  }

  //Get method for carousel or scrollable list
  showDogs(){
    
  }
}
