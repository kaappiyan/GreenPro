import { Component,ViewChild } from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthData } from '../providers/auth/auth';

import { HomePage } from '../pages/home/home';


import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  
  @ViewChild('mycontent') navCtrl: NavController;
  rootPage:any ;
  public splashScreen: SplashScreen;

 

  constructor(platform: Platform, 
    statusBar: StatusBar,
    public authProvider: AuthData ) {
    platform.ready().then(() => {
    
      
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCicbhvLvKrHnI-UBWoVXQ_A5GC4rA5pLQ",
      authDomain: "greenpro-1049e.firebaseapp.com",
      databaseURL: "https://greenpro-1049e.firebaseio.com",      
      storageBucket: "",
      messagingSenderId: "473044604830"     
    });

   

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else { 
        this.rootPage = HomePage;
        unsubscribe();
      }
    });
 

    
        
  }

  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
     }

    }
  
    logout(){
      
      this.authProvider.logoutUser();
      this.rootPage = 'LoginPage';
	    
    }
}
