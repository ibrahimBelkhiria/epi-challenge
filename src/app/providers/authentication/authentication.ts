import { Injectable } from '@angular/core';
import firebase from "firebase";
import {User} from "../models/user";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../../pages/home/home';

@Injectable()
export class Authentication {
  public navCtrl: NavController;
  getinfo = {
    displayName :'',
    email :'',
    photoURL :'',
    logedin : false}

  public chatUser: any = null;

  constructor() {

  }

  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(() => {
      firebase.auth().getRedirectResult().then(result => {
        var user = result.user;
        this.navCtrl.push(HomePage);
      }).catch(function (error) {
        console.log(error);
      });
    });
  }

  logout(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signOut().then(function () {
      console.log("Logout successful");
    }, function (error) {
      console.log(error);
    });
  }
  logingoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res =>{console.log(res);
      this.getinfo.displayName = res.user.displayName;
this.getinfo.photoURL=res.user.photoURL;
this.getinfo.email = res.user.email;
this.getinfo.logedin = true;

  })
}

}
