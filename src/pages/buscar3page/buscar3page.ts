import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemInfoPage } from '../rem-info/rem-info';

/**
 * Generated class for the Buscar3pagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar3page',
  templateUrl: 'buscar3page.html',
})
export class Buscar3pagePage {

  remodelaciones= [];
  items = [];
  remInfo = RemInfoPage;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.remodelaciones = this.navParams.get('rem');
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad Busqueda2Page');
 }

 getItems(ev){
   console.log(ev.target.value);

   this.items= this.remodelaciones.filter(rem =>{
     return rem.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
   });
 }

verRem(rem){
  this.navCtrl.push(this.remInfo, {rem: rem});
}
}
