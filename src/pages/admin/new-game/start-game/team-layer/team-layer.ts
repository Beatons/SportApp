import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';




@Component({
  selector: 'page-team-layer',
  templateUrl: 'team-layer.html',
})
export class TeamLayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

   presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      
    });

}


public ClickedBlue:boolean = false;
public ClickedRed:boolean = false;

onButtonClick(){
this.setToTrue();
}

onButtonClickRed(){
  this.setToTrueRed();
}

setToTrue(){
    this.ClickedBlue = !this.ClickedBlue;
  
  }

  setToTrueRed(){
      this.ClickedRed = !this.ClickedRed;
  }



}


