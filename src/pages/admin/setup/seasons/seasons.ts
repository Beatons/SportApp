import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Season } from '../../../../models/season';
import { GenService } from '../../../../services/gen';
import { SeasonPage } from "./season/season";
import { SeasonNewPage } from "./season-new/season-new";

@Component({
  selector: 'page-seasons',
  templateUrl: 'seasons.html',
})
export class SeasonsPage {

  seasons: Season[];

  constructor(private genService: GenService, private modalCtrl: ModalController, private navCtrl: NavController) {
  }
  	
    ionViewWillEnter() {
    this.seasons = [];
    this.loadItems();
  }
   onViewSeason(season: Season) {
   const modal = this.modalCtrl.create(SeasonPage, season);
  modal.present();
   modal.onDidDismiss((remove: boolean) => {
    if(remove){
     this.genService.removeSeason(season);
      this.seasons = this.genService.getSeasons();
      const position = this.seasons.findIndex((seasonEl: Season) => {
         return seasonEl.nameSeason == season.nameSeason;
    });
     this.seasons.splice(position, 1);
     }
     console.log(remove);
   });
  }
  addNewSeason(){
  this.navCtrl.push(SeasonNewPage);

}
  private loadItems() {
       this.seasons = this.genService.getSeasons();
  }
}