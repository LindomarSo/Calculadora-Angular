import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppcalcComponent } from './appcalc';

import { CalculadoraService } from './service';

@NgModule({
  declarations: [
    AppcalcComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppcalcComponent
  ],
  providers:[
    CalculadoraService
  ]
})
export class CalculadoraModule { }
