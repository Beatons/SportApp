import { GenService } from '../../../services/gen';
import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StartGamePage } from './start-game/start-game';
/**
 * Generated class for the NewGame page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html',
})
export class NewGamePage {

  constructor(public navCtrl: NavController, private genService: GenService, public navParams: NavParams) {
  }

  startCounting(form: NgForm){
        console.log(form)
        if(form.valid)
        {
          var track = [form.value.trackGoal,form.value.trackPenalties,form.value.trackTackles,form.value.trackBlocks];
          
        this.genService.createNewGame(form.value.matchName, form.value.oneTeam, form.value.twoTeam, track);
        form.reset();
        this.navCtrl.setRoot(StartGamePage);
        }
        
  }

}
