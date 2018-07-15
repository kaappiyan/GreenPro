import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private rootPage;


  constructor(public navCtrl: NavController,
    public navParam : NavParams,
    public afDatabase: AngularFireDatabase,
  public storage: Storage) {

    this.rootPage = HomePage;
    
  }
  ionViewDidLoad() {
    console.log(this.storage.get('name'));
    console.log('ionViewDidLoad MainPage');
  }


 
}
