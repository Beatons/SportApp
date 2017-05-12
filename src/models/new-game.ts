import { DateTime } from 'ionic-angular';
export class NewGame
    {
        constructor (
        public name: string,
        public date: string, 
        public teams: Array<object>, 
        public players: Array<object>,
        public trackers: Array<object>,
        ){
        }
      
    }