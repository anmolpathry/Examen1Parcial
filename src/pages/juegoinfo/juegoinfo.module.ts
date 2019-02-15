import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegoinfoPage } from './juegoinfo';

@NgModule({
  declarations: [
    JuegoinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegoinfoPage),
  ],
})
export class JuegoinfoPageModule {}
