import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarvillaComponent } from './barvilla/barvilla.component';
import { MozarellaComponent } from './mozarella/mozarella.component';
import { WokComponent } from './wok/wok.component';



@NgModule({
  declarations: [BarvillaComponent, MozarellaComponent, WokComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BarvillaComponent,
    MozarellaComponent,
    WokComponent
  ]
})
export class RestsModule { }
