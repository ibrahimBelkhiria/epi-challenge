import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(  public navCtrl: NavController , public app: App) {

  }
  logout(){
    // Remove API token 
    this.app.getRootNav().setRoot(WelcomePage);
    
}
ionViewDidLoad() {
  console.log('ionViewDidLoad HomePage');
}
}
