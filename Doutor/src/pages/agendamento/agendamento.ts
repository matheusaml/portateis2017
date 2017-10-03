import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser'; 


/**
 * Generated class for the AgendamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendamento',
  templateUrl: 'agendamento.html',
})
export class AgendamentoPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
    

  ngOnInit(){
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendamentoPage');
  }
  

}
