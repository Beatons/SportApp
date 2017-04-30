import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import { StartGamePage } from "../pages/admin/start-game/start-game";
//import { SetupPage } from "../pages/admin/setup/setup";
import { ScoresPage } from "../pages/admin/scores/scores";
import { SettingsPage } from "../pages/admin/settings/settings";
import { TabsPage } from "../pages/admin/setup/tabs/tabs";

//import { Page } from '../pages/admin/admin';
//import { AuthService } from '../providers/auth';
//import { SeasonPage } from '../pages/admin/season/season';
//import { PlayerPage } from '../pages/admin/player/player';
//import { StatPage } from '../pages/admin/stat/stat';
//import { TeamPage } from '../pages/admin/team/team';
//import { GamePage } from '../pages/admin/game/game';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild('nav') nav: NavController;
  rootPage: any = LoginPage;

pages: Array<{title:string, component:any, icon: string}>;

  constructor(public platform: Platform, private menuCtrl: MenuController,  public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
      this.pages = [
      { title: 'Home', component: AdminPage, icon: 'home' },
      { title: 'Setup', component: TabsPage,  icon: 'clipboard' }, 
      { title: 'Start game', component: StartGamePage, icon: 'play' },
      { title: 'Scores', component: ScoresPage, icon: 'list' },
      { title: 'Settings', component: SettingsPage, icon: 'settings' }
      
      
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    logout() {
   // this.authservice.logout();
    this.nav.setRoot(LoginPage);
  }
}

