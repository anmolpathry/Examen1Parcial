import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompuPage } from '../compu/compu';
import { JuegoinfoPage } from '../juegoinfo/juegoinfo';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  computadoras= [];
  videojuegos = [];
  items= [];
  items2 = [];
  compuPage = CompuPage;
  juegoInfo = JuegoinfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.computadoras= this.navParams.get('compu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  getItems(ev){
   console.log(ev.target.value);

   this.items = this.computadoras.filter(compu => {
     return compu.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
   });

  }
  

  verCompu(compu){
   this.navCtrl.push(this.compuPage, {compu: compu});
  }

}


