import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {
 
  computadoras = [];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');
  }

  remove(compu){
    let index = this.computadoras.findIndex(item => {
      return item.ad.subject == compu.ad.subject &&
             item.ad.user.account.name == compu.ad.user.account.name;
    });

    if(index > -1){
      this.computadoras.splice(index,1);

      const toast = this.toastCtrl.create({
        message: 'Eliminada de Favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  existe(compu){
   return this.computadoras.some(item => {
      return item.ad.subject == compu.ad.subject && 
             item.ad.user.account.name == compu.ad.user.account.name;
    });
  }

  addFavoritos(compu){
    this.computadoras.push(compu);

    const toast = this.toastCtrl.create({
      message: 'Agregada a Favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos(){
    return this.computadoras;
  }

}
