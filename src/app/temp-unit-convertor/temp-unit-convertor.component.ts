import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {
   constructor() { }
 
   celsius: number = null;
   fahrenheit: number = null;

    CelToFahr() {
      this.fahrenheit = this.celsius * 9.0/5.0 + 32;
    }


    FahrToCel() {
      this.celsius = (this.fahrenheit - 32) * 5.0/9.0;
    }


  ngOnInit() {
  }

}




