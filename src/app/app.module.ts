import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//////
import { IonicSelectableModule } from 'ionic-selectable';
///////
import { CausasService } from './_service/causas.service';
import { dbUserService } from './_service/user.service';
import { CalendarioServices } from './_service/calendario.service';
import { AreaService } from './_service/area.service';
import { CreadorEmbebedPage } from './creador-embebed/creador-embebed.page';
import { CreadorEmbebedPageModule } from './creador-embebed/creador-embebed.module';

@NgModule({
  declarations: [AppComponent],
  exports : [],
  entryComponents: [CreadorEmbebedPage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    IonicSelectableModule,
    AppRoutingModule,
    CreadorEmbebedPageModule],
  providers: [
    StatusBar,
    dbUserService,
    AreaService,
    CalendarioServices,
    CausasService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
