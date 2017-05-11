import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Season } from '../../../../models/season';
import { GenService } from '../../../../services/gen';
import { SeasonPage } from "./season/season";
import { SeasonNewPage } from "./season-new/season-new";

@Component({
  selector: 'page-seasons',
  templateUrl: 'seasons.html',
})
export class SeasonsPage implements OnInit {

  seasons: Season[] = [];

  constructor(private genService: GenService, private modalCtrl: ModalController, private navCtrl: NavController) {
  }
  	
    ngOnInit() {
   //this.seasons = [];
  console.log('nginit');
   this.genService.fetchSeasons().then(
     (seasons: Season[]) =>  
     this.seasons = seasons
   );
   console.log(this.seasons);
    }

    ionViewWillEnter() {
    //this.seasons = [];
    this.seasons = this.genService.loadSeasons();
  console.log('call once');
  // this.seasons = this.genService.getSeasons();
   console.log(this.seasons);
  }

   onViewSeason(season: Season, index: number) {
   const modal = this.modalCtrl.create(SeasonPage, season);
  modal.present();
   modal.onDidDismiss((remove: boolean) => {
    if(remove){
     this.genService.removeSeason(index);
      this.seasons = this.genService.loadSeasons();
     // const position = this.seasons.findIndex((seasonEl: Season) => {
     //    return index;
    //});
    // this.seasons.splice(position, 1);
     }
     console.log(remove,"delete");
   });
  }
  addNewSeason(){
  this.navCtrl.push(SeasonNewPage);

}

}