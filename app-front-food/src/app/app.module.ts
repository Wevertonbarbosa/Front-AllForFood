import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TelMascaraDirective } from './Diretiva/tel-mascara.directive';


@NgModule({
  declarations: [
    TelMascaraDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot()
  ]
})
export class AppModule { }
