import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoinfoPage } from '../juegoinfo/juegoinfo';

/**
 * Generated class for the Busqueda2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda2',
  templateUrl: 'busqueda2.html',
})
export class Busqueda2Page {
   videojuegos= [];
   items = [];
   juegoInfo = JuegoinfoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.videojuegos = this.navParams.get('juego');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Busqueda2Page');
  }

  getItems(ev){
    console.log(ev.target.value);

    this.items= this.videojuegos.filter(juego =>{
      return juego.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

 verJuego(juego){
   this.navCtrl.push(this.juegoInfo, {juego: juego});
 }
}

