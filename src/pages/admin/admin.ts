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
  items: Array<{title:string, date: string}>; // string[];


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
      { title: 'Game1', date: '16/05/2017'},
      { title: 'Game2', date: '15/05/2017'},
      { title: 'Game3', date: '07/08/2017'},
      { title: 'Game4', date: '04/12/2016'},
      { title: 'Game5', date: '03/07/2016'},
      { title: 'Game6', date: '23/06/2016'},
      { title: 'Game7', date: '15/05/2017'},
      { title: 'Game8', date: '15/05/2017'}
     
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
        return (item.date.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
