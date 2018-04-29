import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";
import {AngularFireDatabase} from "angularfire2/database";
import  {default as firebase} from "firebase";

/**
 * Generated class for the DeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-declaration',
  templateUrl: 'declaration.html',
})
export class DeclarationPage {

  photo:any;



  declaration = {
    description:null,
    date:"29/04/2018",
    image:this.photo
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,private camera:Camera,private db:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeclarationPage');
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

  }


  valider() {

    this.db.list("/declarations").push(this.declaration);
    let storage = firebase.storage();
    const pictures = storage.ref("declarations-images");
    pictures.putString(this.photo,'data_url');

  }



}
