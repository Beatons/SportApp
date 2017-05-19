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
  selector: 'page-team-blue-players',
  templateUrl: 'team-blue-players.html',
})
export class TeamBluePlayersPage {

  constructor(public popoverCtrl:PopoverController) {
  }


   PresentTeamPlayer() {
    let popover = this.popoverCtrl.create(PopoverTeamPlayersPage);
    popover.present({
      
    });
   }
}
