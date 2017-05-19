import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamBluePlayersPage } from './team-blue-players/team-blue-players';
import { TeamRedPlayersPage } from './team-red-players/team-red-players';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(private navCtrl:NavController) {
  }

gotoblueplayers(){
    this.navCtrl.push(TeamBluePlayersPage);
}

gotoredplayers(){
      this.navCtrl.push(TeamRedPlayersPage);
}

}
