import { Component } from '@angular/core';
import { TeamsPage } from '../teams/teams';
import { PlayersPage } from '../players/players';
import { SeasonsPage } from '../seasons/seasons';


/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs selectedIndex="0">
    <ion-tab [root]="seasonsPage" tabTitle="Seasons" tabIcon="calendar"></ion-tab>
    <ion-tab [root]="teamsPage" tabTitle="Teams" tabIcon="people"></ion-tab>
    <ion-tab [root]="playersPage" tabTitle="Players" tabIcon="person"></ion-tab>
    
  </ion-tabs>
  `,
})
export class TabsPage {

  playersPage = PlayersPage;
  teamsPage = TeamsPage;
  seasonsPage = SeasonsPage;
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
//  }

 
}
