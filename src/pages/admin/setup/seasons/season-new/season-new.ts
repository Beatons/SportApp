import { GenService } from '../../../../../services/gen';
//import { NgForm } from '@angular/forms/src/directives';
import { Season } from '../../../../../models/season';
import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { NgForm } from "@angular/forms";



@Component({
  selector: 'page-season-new',
  templateUrl: 'season-new.html',
})
export class SeasonNewPage {

season: Season


  constructor(private navCtrl: NavController, private genService: GenService) {
  }

  saveNewSeason(form: NgForm) {
    console.log(form)
   this.genService.createSeason(form.value.nameSeason, form.value.dateSeason, form.value.textSeason);
   form.reset();
   this.navCtrl.pop()
 }
  back() {
    this.navCtrl.pop()
  }
}
