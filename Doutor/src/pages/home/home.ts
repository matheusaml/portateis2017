import { LoginPage } from './../login/login';
import { AgendamentoPage } from './../agendamento/agendamento';
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams} from 'ionic-angular';
import { auth } from '../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  AgendamentoPage = AgendamentoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: auth, private afAuth: AngularFireAuth) {
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
