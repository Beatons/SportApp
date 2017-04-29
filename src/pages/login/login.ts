import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

//import { AuthService } from '../../providers/auth';
//import { HomePage } from '../home/home';
import { RegisterPage } from './register/register';
import { AdminPage } from '../admin/admin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    public user : any;
    usercreds = {
     email: '',
     password: ''
};

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
   //    this.authservice.loadUserCredentials();
  //  if(this.authservice.isLoggedin == true || this.authservice.AuthToken !== null){
  //          this.navCtrl.setRoot(AdminPage);

 //   }

  }

  login(user) {
    /*   this.authservice.authenticate(user).subscribe(data => {
            console.log(data,"data")
                if(data.token !== "" || data.user !== null){
                    console.log('token pass')
                this.authservice.storeUserCredentials(data.token);
                this.authservice.AuthToken = data.token;
                this.authservice.UserData = data.user;
                this.navCtrl.setRoot(AdminPage); */
                this.navCtrl.push(AdminPage);
        /*    }
            else {
                let alert = this.alertCtrl.create({
                    title: "Oh snap...",
                    subTitle: "An error has ocured when trying to login.",
                    buttons: ['ok']
                });
                alert.present();
            }
        });

     ///  if(this.authservice.isLoggedin == true) {

     //  }
         //   this.user = data;

             //console.log(data);

        /*.then(data => {
            if(data) {
            }
    });*/
}
    signup() {
        this.navCtrl.push(RegisterPage);
    }

}
