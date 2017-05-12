import { Player } from '../models/player';
import { Injectable } from '@angular/core';
import { Season } from '../models/season';
import { Storage } from '@ionic/storage'; 
import { NewGame } from '../models/new-game';

@Injectable()
export class GenService {
    private seasons: Season[] = [];
    private players: Player[] = [];
    private newGame: NewGame = null;
    constructor(private storage: Storage) {
       // this.fetchSeasons();
    }

    createSeason(name: string, date: string, text: string) {
        
       
           console.log(this.seasons);
        const seas = new Season(name,date,text)

        this.seasons.push(seas);
        this.storage.set('season', this.seasons).then(
           data => {
               console.log("stored");
               return this.seasons;
        })
        .catch(err => {
            this.seasons.splice(this.seasons.indexOf(seas), 1);
        });
        
    }
    removeSeason(index: number) {
        //const season = this.seasons[index];
       this.seasons.splice(index,1);
        this.storage.set('season',this.seasons).then(
            (data) => {
                
        })
        .catch( err => console.log(err)

        );
 
    }
    loadSeasons(){
         //this.fetchSeasons();
         console.log("loading");
       return this.seasons.slice();
        
    } 
    fetchSeasons() {
       return this.storage.get('season').then(
        //    console.log(val);
        (seasons: Season[]) => {
            this.seasons = seasons != null ? seasons : [];
             console.log(this.seasons, "fetch"); 
            return this.seasons;//.slice();
        }
           
            
            //this.seasons = val;
            
        );
    }
    createPlayer(name: string, date: string, text: string) {
        
       
           console.log(this.players);
        const seas = new Player(name,date,text)

        this.players.push(seas);
        this.storage.set('player', this.players).then(
           data => {
               console.log("stored");
               return this.players;
        })
        .catch(err => {
            this.players.splice(this.players.indexOf(seas), 1);
        });
        
    }
    removePlayer(index: number) {
        //const player = this.players[index];
       this.players.splice(index,1);
        this.storage.set('player',this.players).then(
            (data) => {
                
        })
        .catch( err => console.log(err)

        );
 
    }
    loadPlayers(){
         //this.fetchplayers();
         console.log("loading");
       return this.players.slice();
        
    } 
    fetchPlayers() {
       return this.storage.get('player').then(
        //    console.log(val);
        (players: Player[]) => {
            this.players = players != null ? players : [];
             console.log(this.players, "fetch"); 
            return this.players;//.slice();
        }
           
            
            //this.players = val;
            
        );
    }
    createNewGame(name,one,two = null, track){
        var date = "current date";
        const team = [
            {
                name: 'Red'
            },
            {
                name: 'Blue'
            }
        ];
        const gam = new NewGame(name,date,team, null,track);
        this.newGame = gam;
       // this.newGame.push(game);
        this.storage.set('game',gam).then(
            data => {
                console.log('stored');
               // return this.newGame;
            }
        )
         .catch(err => {
         //   this.newGame.splice(this.newGame.indexOf(game), 1);
        });
    }

    fetchNewGame(){
        return this.storage.get('game').then(
            (newGame) => {
                this.newGame = newGame != null ? newGame: [];
                console.log(this.newGame,"gameFetch");
                return this.newGame;
            }
        );
    } 

    loadNewGame() {
        console.log('loading');
        return this.newGame;
    }
      //     const position = this.seasons.findIndex((seasonEl: Season) => {
   //         return seasonEl.nameSeason == seasons.nameSeason;
   //     });
     //   this.seasons.splice(position, 1);
   // isSeason(seasons : Season) {
 //       return this.seasons.find((seasonEl: Season) => {
 //           return seasonEl.nameSeason == seasons.nameSeason;
   //     }); 
   // }

}