import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  index: number;
  name: string;
  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }
  ionViewDidLoad(){
    this.name = this.navParams.get('name');
    this.text = this.navParams.get('text');
  }
  onLeave(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
