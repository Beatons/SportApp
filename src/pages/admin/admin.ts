import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

//import { AuthService } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  username ='';
  email = '';
  picture = '';

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public alertCtrl: AlertController) {


  }
  newSeason() {
    console.log("push a new page");
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
}
