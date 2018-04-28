import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { HomePage } from '../home/home';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  getinfo = {
    displayName :'',
    email :'',
    photoURL :'',
    logedin : false
  };
  public chatuser : any= null ;

  constructor(public navCtrl: NavController, public navParams: NavParams,private authf:AngularFireAuth ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  login(){
    this.navCtrl.push(LoginPage);
    }
    signup(){
      this.navCtrl.push(SignupPage);
      }
      loginFB(){
this.authf.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res =>{console.log(res);
  
  this.getinfo.displayName = res.user.displayName;
  this.getinfo.photoURL=res.user.photoURL;
  this.getinfo.email = res.user.email;
  this.getinfo.logedin = true;
  this.navCtrl.push(HomePage,{
    name : this.getinfo.displayName,
    email : this.getinfo.email,
    photoURL : this.getinfo.photoURL,
     bolez : this.getinfo.logedin
  });


}  ) 
      }

      logingoogle(){
        this.authf.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res =>{console.log(res);
          this.getinfo.displayName = res.user.displayName;
  this.getinfo.photoURL=res.user.photoURL;
  this.getinfo.email = res.user.email;
  this.getinfo.logedin = true;
          this.navCtrl.push(HomePage,{
            name : this.getinfo.displayName,
            email : this.getinfo.email,
            photoURL : this.getinfo.photoURL,
             bolez : this.getinfo.logedin
          });
      })
    }
}
