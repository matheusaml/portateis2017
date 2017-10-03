import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginPage } from './../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { ExamePage } from './../pages/exame/exame';
import { SlidesPage } from './../pages/slides/slides';
import { MedicoPage } from './../pages/medico/medico';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MeudoutorPage } from './../pages/meudoutor/meudoutor';
import { AgendamentoPage } from './../pages/agendamento/agendamento';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';


  var config = {
    apiKey: "AIzaSyAd-AywTYhhSoC3IHzYP1w6R7bdks2-NZM",
    authDomain: "drnahora-35138.firebaseapp.com",
    databaseURL: "https://drnahora-35138.firebaseio.com",
    projectId: "drnahora-35138",
    storageBucket: "drnahora-35138.appspot.com",
    messagingSenderId: "212488305388"
  };

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'APP_ID'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AgendamentoPage,
    MeudoutorPage,
    MedicoPage,
    SlidesPage,
    ExamePage,
    LoginPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AgendamentoPage,
    MeudoutorPage,
    MedicoPage,
    SlidesPage,
    ExamePage,
    LoginPage,
    CadastroPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
