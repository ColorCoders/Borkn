import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from "@petfinder/petfinder-js";


@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient ) { }

  //Set up connection with PetFinder API
  pf = new Client({apiKey: "bS31MfyTwQCaFMsXu2EnuS7TZhr8lTcuIEVmnyDGVSOC5v9klB", secret: "vlDK6VSCFq2YL4vN7yeo3TGhBkPrFYnPcWfzbPnT"});

  //Get dogs
  getDogs() {

    this.pf.animal.search()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        // Handle the error
    });
  }

  //Makes use of query parameters 
  customSearch(){

  }

}
