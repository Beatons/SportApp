import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

//import { AuthService } from '../providers/auth';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/login/register/register';
import { StartGamePage } from '../pages/admin/start-game/start-game';
import { AdminPage } from '../pages/admin/admin';
import { ScoresPage } from '../pages/admin/scores/scores';
import { SetupPage } from '../pages/admin/setup/setup';
import { SettingsPage } from '../pages/admin/settings/settings';
import { TeamsPage } from '../pages/admin/setup/teams/teams';
import { PlayersPage } from '../pages/admin/setup/players/players';
import { SeasonsPage } from '../pages/admin/setup/seasons/seasons';
import { TabsPage } from '../pages/admin/setup/tabs/tabs';

//import { TeamPage } from '../pages/admin/team/team';
//import { GamePage } from '../pages/admin/game/game';
//import { NewseasonPage } from '../pages/admin/season/newseason/newseason';


import { MyApp } from './app.component';

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
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'offDB',
      driverOrder: ['indexeddb','sqlite','websql']
    })
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
    TabsPage
  ],
  providers: [
  //  AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
