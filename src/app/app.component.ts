import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgOption } from '@ng-select/ng-select';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = false;
  title = 'car-dekho';

    selectBudget = [
        { id: 11, name: '1-5 Lakh' },
        { id: 12, name: '5-10 Lakh' },
        { id: 13, name: '10-20 Lakh' },
        { id: 14, name: '20-30 Lakh' },
        { id: 15, name: '30-50 Lakh' },
        { id: 16, name: '50 Lakh-1 Crore'},
    ];

    AllVehicalType = [
        { id: 21, name: 'Hatchback' },
        { id: 22, name: 'Sedan' },
        { id: 23, name: 'SUV' },
        { id: 24, name: 'MUV' },
        { id: 25, name: 'Luxury' },
        { id: 26, name: 'Hybrid'},
    ];

    SelectBrand = [
      { id: 31, name: 'Maruti' },
      { id: 32, name: 'Hyundai' },
      { id: 33, name: 'Honda' },
      { id: 34, name: 'Tata' },
      { id: 35, name: 'Mhindra' },
      { id: 36, name: 'Renault'},
      { id: 37, name: 'Ford'},
      { id: 38, name: 'Nissan'},
      { id: 39, name: 'Toyota'},
      { id: 40, name: 'MG'},


  ];

  SelectCity = [
    { id: 41, name: 'Indore' },
    { id: 42, name: 'Rudrapur' },
    { id: 43, name: 'Mumbai' },
    { id: 44, name: 'Delhi' },
    { id: 45, name: 'Pune' },
    { id: 46, name: 'Banglore'},
    { id: 47, name: 'Chennai'},
    { id: 48, name: 'Dehradun'},
    { id: 49, name: 'Dineshpur'},
    { id: 50, name: 'kanpur'},


];

  

  constructor(private router: Router) {

  }

  test() {
    debugger
  }

  navigateOnSearchUrl() {
  //   debugger
  //  this.router.navigateByUrl("https://www.cardekho.com/new-sedan+cars+under-10-lakh")
  }
}


