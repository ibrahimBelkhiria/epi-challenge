import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/providers/models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as User ;
  constructor(private authf:AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  async signup(user:User){
 
      
    
const result = await this.authf.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email,user.password);
this.navCtrl.setRoot(WelcomePage);

  }
}
