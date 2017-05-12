import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Player } from '../../../../models/player';
import { GenService } from '../../../../services/gen';
import { PlayerPage } from "./player/player";
import { PlayerNewPage } from "./player-new/player-new";




@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage implements OnInit {

players: Player[] = [];

  constructor(private genService: GenService, private modalCtrl: ModalController, private navCtrl: NavController) {
  }

  ngOnInit() {
   //this.players = [];
  console.log('nginit');
   this.genService.fetchPlayers().then(
     (players: Player[]) =>  
     this.players = players
   );
   console.log(this.players);
    }

    ionViewWillEnter() {
    //this.players = [];
    this.players = this.genService.loadPlayers();
  console.log('call once');
  // this.players = this.genService.getplayers();
   console.log(this.players);
  }

   onViewplayer(player: Player, index: number) {
   const modal = this.modalCtrl.create(PlayerPage, player);
  modal.present();
   modal.onDidDismiss((remove: boolean) => {
    if(remove){
     this.genService.removePlayer(index);
      this.players = this.genService.loadPlayers();
     // const position = this.players.findIndex((playerEl: player) => {
     //    return index;
    //});
    // this.players.splice(position, 1);
     }
     console.log(remove,"delete");
   });
  }
  addNewPlayer(){
  this.navCtrl.push(PlayerNewPage);

}

}


