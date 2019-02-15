import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RemInfoPage } from '../rem-info/rem-info';
import { Buscar3pagePage } from '../buscar3page/buscar3page';

/**
 * Generated class for the RemodelacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remodelaciones',
  templateUrl: 'remodelaciones.html',
})
export class RemodelacionesPage {

  remodelaciones= [];
  remInfo= RemInfoPage;
  buscar3Page= Buscar3pagePage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=8020&offset=1&lim=29&lang=es')
    .subscribe(data => {
      console.log(JSON.stringify(data));
      if(data.hasOwnProperty('list_ads')){
      this.remodelaciones= data['list_ads'];
      }
    }, error => {
       console.log(JSON.stringify(error));
    });
  }
  verRem(rem){
    this.navCtrl.push(this.remInfo, {rem: rem});
    }
  
   buscar(){
    this.navCtrl.push(this.buscar3Page,{rem: this.remodelaciones});
    }
}
