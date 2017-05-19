import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

//import { AuthService } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { MenuController } from 'ionic-angular';
import { HistoryPage } from './history/history';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {

  username ='';
  email = '';
  picture = '';
  searchQuery: string = '';
  items: string[];
  games: Array<{title:string, icon: string}>;

  constructor(public menuCtrl: MenuController, public navCtrl: NavController, public alertCtrl: AlertController) {

  this.initializeItems();

}

goToHistory(){
  this.navCtrl.push(HistoryPage);
}

  newSeason() {
    console.log("push a new page");
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }

   initializeItems() {
    this.items = [
      'Game1',
      'Game2',
      'Game3',
      'Game4',
      'Game5',
    ];
  }

    getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
