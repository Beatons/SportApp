import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverTeamPlayersPage } from '../../new-game/start-game/popover/popover-team-players';
/**
 * Generated class for the Scores page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-team-red-players',
  templateUrl: 'team-red-players.html',
})
export class TeamRedPlayersPage {

  constructor(public popoverCtrl:PopoverController) {
  }


   PresentTeamPlayer() {
    let popover = this.popoverCtrl.create(PopoverTeamPlayersPage);
    popover.present({
      
    });
   }
}
