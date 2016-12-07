import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
 
export const AppRoutes: any = [
    { path: "", component: TempUnitConvertorComponent },
    { path: "Bmi Calculator", component: BmiCalculatorComponent }
];
 
export const AppComponents: any = [
    TempUnitConvertorComponent,
    BmiCalculatorComponent
];