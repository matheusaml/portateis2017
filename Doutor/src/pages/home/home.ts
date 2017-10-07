import { LoginPage } from './../login/login';
import { AgendamentoPage } from './../agendamento/agendamento';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { auth } from '../../providers/auth/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  AgendamentoPage = AgendamentoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: auth) {
  }
    teste(){
    this.navCtrl.setRoot(HomePage);
  }

  public signOut() {
    this.auth.signOut()
      .then(() => {
        this.navCtrl.parent.parent.setRoot(LoginPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }




  }
