import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { HomePageComponent } from './home-page/home-page.component';

export const AppRoutes: any = [
    { path: "Temp Unit", component: TempUnitConvertorComponent },
    { path: "Bmi Calculator", component: BmiCalculatorComponent },
    { path: "Home Page", component: HomePageComponent }
];
 
export const AppComponents: any = [
    TempUnitConvertorComponent,
    BmiCalculatorComponent,
    HomePageComponent
];