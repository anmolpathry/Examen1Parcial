import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the RemInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rem-info',
  templateUrl: 'rem-info.html',
})
export class RemInfoPage {

  rem= {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritosProvider) {
    this.rem= this.navParams.get('rem');
    if (this.rem.ad.hasOwnProperty('images')){
      this.imgs = this.rem.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompuPage');
  }

  favoritos(rem){
    this.fav.addFavoritos(rem);
  }


}
