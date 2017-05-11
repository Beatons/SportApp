import { Injectable } from '@angular/core';
import { Season } from '../models/season';
import { Storage } from '@ionic/storage'; 

@Injectable()
export class GenService {
    private seasons: Season[] = [];
    
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
    addSeasons() {
        
    }
    removeSeason(index: number) {
        //const season = this.seasons[index];
       this.seasons.splice(index,1);
        this.storage.set('season',this.seasons).then(
            (data) => {
                
        })
        .catch( err => console.log(err)

        );
   //     const position = this.seasons.findIndex((seasonEl: Season) => {
   //         return seasonEl.nameSeason == seasons.nameSeason;
   //     });
     //   this.seasons.splice(position, 1);
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
    isSeason(seasons : Season) {
        return this.seasons.find((seasonEl: Season) => {
            return seasonEl.nameSeason == seasons.nameSeason;
        }); 
    }
}