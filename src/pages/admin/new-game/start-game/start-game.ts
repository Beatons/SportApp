import { TeamLayerPage } from './team-layer/team-layer';
import { GenService } from '../../../../services/gen';
import { NewGame } from '../../../../models/new-game';
import { NavController, NavParams } from 'ionic-angular';
import { Component, Input, OnInit } from '@angular/core';
import  { ITimer } from './itimer';
import { Vibration } from '@ionic-native/vibration';
import { AlertController } from 'ionic-angular';
import { PlayersPage } from '../../setup/players/players';



@Component({
  selector: 'page-start-game',
  templateUrl: 'start-game.html',
})
export class StartGamePage implements OnInit {
       // inGame: string;
    private newGame: NewGame = null;

 @Input() timeInSeconds: number;
    public timer: ITimer;

 
    constructor(private genService: GenService, public vibration: Vibration, private alertCtrl: AlertController, private navCtrl: NavController, private navParams: NavParams) {
    }
 
    ngOnInit() {
        console.log('nginit');
        this.genService.fetchNewGame().then(
            (newGame) =>{ 
            this.newGame = newGame;
            console.log(this.newGame,"this");
            console.log(newGame,"without");
            
            }
        );
        console.log(this.newGame)
        this.initTimer();
    }

    ionViewWillEnter(){
       this.newGame = this.genService.loadNewGame();
    }
 
    hasFinished() {
        return this.timer.hasFinished;
    }
 
    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0.001 ; }
 
        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsPassed: this.timeInSeconds
        };
 
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsPassed);
    }

    AreSureToReset(){
        const alert = this.alertCtrl.create({
  subTitle: 'Want to restart?',
  message:'Are you sure want to reset the timer?',
  buttons:[{
    text:"Yes",
    handler:()=>{
      this.initTimer();
    }
  },
  {
    text:"No",
    role:'cancel',
    handler:()=>{
      console.log("Cancelled!");
    }
  }]
});

alert.present();
    }
 
    startTimer() {
        this.vibration.vibrate(100);
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
       
    }
 
    pauseTimer() {
        this.timer.runTimer = false;
    }
 
    resumeTimer() {
        this.startTimer();
    }
 
    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsPassed++;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsPassed);
            if (this.timer.secondsPassed > 0) {
                this.timerTick();
            }
            else {
                this.timer.hasFinished = true;
            }
        }, 1000);
    }
 
    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }

     goToPlayers(index: string){
        console.log(index);
       this.navCtrl.push(TeamLayerPage, index);
    }

}
