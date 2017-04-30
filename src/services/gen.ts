import { Season } from '../models/season';


export class GenService {
    private seasons: Season[] = [];
    
    createSeason(name: string, date: string, text: string) {
        this.seasons.push(new Season(name,date,text));
        console.log(this.seasons);
    }
    removeSeason(season: Season) {
        const position = this.seasons.findIndex((seasonEl: Season) => {
            return seasonEl.nameSeason == season.nameSeason;
        });
        this.seasons.splice(position, 1);
    }
    getSeasons(){
        return this.seasons.slice();
    }
    isSeason(season : Season) {
        return this.seasons.find((seasonEl: Season) => {
            return seasonEl.nameSeason == season.nameSeason;
        }); 
    }
}