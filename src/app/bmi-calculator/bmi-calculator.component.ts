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
  message: String = null;

  //methods/functions

  //Main BMI calculation
   calculateBmi() {
    var weight = this.kgs
    var height = this.metres

    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height*height)

    if(finalBmi < 16){
    this.message = "Your estimated BMI is "+ finalBmi + " : Severe Thinness."
    }

    if(finalBmi >= 16 && finalBmi <= 17){
    this.message = "Your estimated BMI is "+ finalBmi + " : Moderate Thinness."
    }

    if(finalBmi > 17 && finalBmi <= 18.5){
    this.message = "Your estimated BMI is "+ finalBmi + " : Mild Thinness."
    }

    if(finalBmi > 18.5 && finalBmi <= 25){
    this.message = "Your estimated BMI is "+ finalBmi + " : Normal."
    }

    if(finalBmi > 25 && finalBmi <= 30){
    this.message = "Your estimated BMI is "+ finalBmi + " : Overweight."
    }

    if(finalBmi > 30 && finalBmi <= 35){
    this.message = "Your estimated BMI is "+ finalBmi + " : Obese Class 1."
    }

    if(finalBmi > 35 && finalBmi <= 40){
    this.message = "Your estimated BMI is "+ finalBmi + " : Obese Class 2."
    }

    if(finalBmi > 40){
    this.message = "Your estimated BMI is "+ finalBmi + " : Obese Class 3."
    }
    }
    }


  //weight conversions
  stoneConvert() {
    this.pounds = this.stone * 14.000;
    this.kgs = this.stone / 0.15747
  }

  poundConvert() {
    this.stone = this.pounds * 0.071429;
    this.kgs  = this.pounds / 2.2046;
  }

  kgConvert() {
    this.stone = this.kgs * 0.15747;
    this.pounds = this.kgs * 2.2046;
  }



  //height conversions
  feetConvert() {
    this.inches = this.feet * 12.000;
    this.metres = this.feet / 3.2808;
  }
  

  inchesConvert() {
    this.feet = this.inches * 0.083333;
    this.metres = this.inches / 39.370;
  }


  metresConvert() {
    this.feet = this.metres * 3.2808;
    this.inches = this.metres * 39.370;
  }

  clearAll(){
      this.stone = null;
      this.pounds = null;
      this.kgs = null;
      this.feet = null;
      this.inches = null;
      this.metres = null;
      this.message = null;
    }



  ngOnInit() {
  }
}
