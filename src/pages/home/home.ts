import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CompuPage } from '../compu/compu';
import { BusquedaPage } from '../busqueda/busqueda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  computadoras= [];
  compuPage = CompuPage;
  buscarPage= BusquedaPage

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data => {
      //console.log(JSON.stringify(data));
      if(data.hasOwnProperty('list_ads')){
      this.computadoras= data['list_ads'];
      }
    }, error => {
       console.log(JSON.stringify(error));
    });
  }

  verCompu(compu){
  this.navCtrl.push(this.compuPage, {compu: compu});
  }

  buscar(){
    this.navCtrl.push(this.buscarPage,{compu: this.computadoras});
   }

}
