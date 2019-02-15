import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JuegoinfoPage } from '../juegoinfo/juegoinfo';
import { Busqueda2Page } from '../busqueda2/busqueda2';

/**
 * Generated class for the VideojuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videojuegos',
  templateUrl: 'videojuegos.html',
})
export class VideojuegosPage {

  videojuegos= [];
  juegoInfo= JuegoinfoPage;
  buscar2Page= Busqueda2Page;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.hasOwnProperty('list_ads')){
      this.videojuegos= data['list_ads'];
      }
    }, error => {
       console.log(JSON.stringify(error));
    });
  }
  verJuego(juego){
    this.navCtrl.push(this.juegoInfo, {juego: juego});
    }
  
   buscar(){
    this.navCtrl.push(this.buscar2Page,{juego: this.videojuegos});
    }

}
