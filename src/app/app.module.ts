import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration';

//import { AuthService } from '../providers/auth';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/login/register/register';
import { GenService } from "../services/gen";

import { AdminPage } from '../pages/admin/admin';

import { NewGamePage } from '../pages/admin/new-game/new-game';
import { StartGamePage } from '../pages/admin/new-game/start-game/start-game';
import { PopoverPage } from '../pages/admin/new-game/start-game/popover/popover';
import { TeamLayerPage } from '../pages/admin/new-game/start-game/team-layer/team-layer';


import { ScoresPage } from '../pages/admin/scores/scores';
import { SetupPage } from '../pages/admin/setup/setup';
import { SettingsPage } from '../pages/admin/settings/settings';

import { TeamsPage } from '../pages/admin/setup/teams/teams';
import { PlayersPage } from '../pages/admin/setup/players/players';
import { SeasonsPage } from '../pages/admin/setup/seasons/seasons';
import { TabsPage } from '../pages/admin/setup/tabs/tabs';

import { SeasonPage } from '../pages/admin/setup/seasons/season/season';
import { SeasonNewPage } from "../pages/admin/setup/seasons/season-new/season-new";

import { PlayerPage } from '../pages/admin/setup/players/player/player';
import { PlayerNewPage } from "../pages/admin/setup/players/player-new/player-new";


//import { TeamPage } from '../pages/admin/team/team';
//import { GamePage } from '../pages/admin/game/game';
//import { NewseasonPage } from '../pages/admin/season/newseason/newseason';




@NgModule({
  declarations: [
    MyApp,
    AdminPage,
    LoginPage,
    RegisterPage,
    StartGamePage,
    ScoresPage,
    SetupPage,
    SettingsPage,
    PlayersPage,
    SeasonsPage,
    TeamsPage,
    TabsPage,
    TabsPage,
    SeasonNewPage,
    SeasonPage,
    PopoverPage,
    NewGamePage,
    TeamLayerPage,
    PlayerNewPage,
    PlayerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdminPage,
    LoginPage,
    RegisterPage,
    StartGamePage,
    ScoresPage,
    SetupPage,
    SettingsPage,
    PlayersPage,
    SeasonsPage,
    TeamsPage,
    TabsPage,
    TabsPage,
    SeasonNewPage,
    SeasonPage,
    PopoverPage,
    NewGamePage,
    TeamLayerPage,
    PlayerNewPage,
    PlayerPage
  ],
  providers: [
  //  AuthService,
    GenService,
    StatusBar,
    SplashScreen,
    Vibration,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
