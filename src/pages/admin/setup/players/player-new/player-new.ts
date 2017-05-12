import { GenService } from '../../../../../services/gen';
//import { NgForm } from '@angular/forms/src/directives';
import { Player } from '../../../../../models/player';
import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NgForm } from "@angular/forms";



@Component({
  selector: 'page-player-new',
  templateUrl: 'player-new.html',
})
export class PlayerNewPage {

player: Player


  constructor(private navCtrl: NavController, private genService: GenService) {
  }

  saveNewPlayer(form: NgForm) {
    console.log(form)
   this.genService.createPlayer(form.value.name, form.value.date, form.value.text);
   form.reset();
   this.navCtrl.pop()
 }
  back() {
    this.navCtrl.pop()
  }
}