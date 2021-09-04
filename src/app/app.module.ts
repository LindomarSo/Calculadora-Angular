import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalculadoraModule } from './calculadora';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
