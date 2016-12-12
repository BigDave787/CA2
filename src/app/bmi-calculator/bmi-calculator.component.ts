import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {
  constructor() { }

  //variables
  stone: number = null;
  pounds: number = null;
  kgs: number = null;

  feet: number = null;
  inches: number = null;
  metres: number = null;

  //methods/functions

  //weight conversions
  stoneConvert() {
    this.pounds = this.stone * 14.000;
    this.kgs = this.stone/0.15747
  }

  poundConvert() {
    this.stone = this.pounds * 0.071429;
    this.kgs  = this.pounds/2.2046;
  }

  kgConvert() {
    this.stone = this.kgs * 0.15747;
    this.pounds = this.kgs * 2.2046;
  }



  //height conversions
  feetConvert() {
    this.inches = this.feet
    this.metres = this.feet
  }
  

  inchesConvert() {
    this.feet = this.inches
    this.metres = this.inches
  }


  metresConvert() {
    this.feet = this.metres
    this.inches = this.metres
  }





  ngOnInit() {
  }
}
