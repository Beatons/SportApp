import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-season',
  templateUrl: 'season.html',
})
export class SeasonPage {
  index: number;
  name: string;
  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }
  ionViewDidLoad(){
    this.name = this.navParams.get('nameSeason');
    this.text = this.navParams.get('textSeason');
  }
  onLeave(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
