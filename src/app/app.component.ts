import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}
  ngOnInit() {
    
  }
 country: any=['United States of America', 'Russia', 'India'];
 add(value: any){
    this.country.push(value);
 };
  
}
