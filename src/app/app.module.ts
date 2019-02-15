import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { CompuPage } from '../pages/compu/compu';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { VideojuegosPage } from '../pages/videojuegos/videojuegos';
import { RemodelacionesPage } from '../pages/remodelaciones/remodelaciones';
import { JuegoinfoPage } from '../pages/juegoinfo/juegoinfo';
import { Busqueda2Page } from '../pages/busqueda2/busqueda2';
import { RemInfoPage } from '../pages/rem-info/rem-info';
import { Buscar3pagePage } from '../pages/buscar3page/buscar3page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CompuPage,
    TabsPage,
    FavoritosPage,
    BusquedaPage,
    VideojuegosPage,
    RemodelacionesPage,
    JuegoinfoPage,
    Busqueda2Page,
    RemInfoPage,
    Buscar3pagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompuPage,
    TabsPage,
    FavoritosPage,
    BusquedaPage,
    VideojuegosPage,
    RemodelacionesPage,
    JuegoinfoPage,
    Busqueda2Page,
    RemInfoPage,
    Buscar3pagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
