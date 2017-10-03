import { AgendamentoPage } from './../agendamento/agendamento';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  AgendamentoPage = AgendamentoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    teste(){
    this.navCtrl.setRoot(HomePage);
  }




  }
