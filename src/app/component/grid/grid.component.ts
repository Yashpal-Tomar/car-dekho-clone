import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
