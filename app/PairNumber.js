import {MajorColorNames} from './MajorColorNames.js';
import {MinorColorNames} from './MinorColorNames.js';

export class PairNumber {
    constructor(pair) {
        this.pair = pair;
    }

    //This function returns the pair number for the given color pair.
    getPairNumberFromColor(pair) {
        let majorIndex = this.getIndex(pair.majorColor, MajorColorNames);       
        let minorIndex = this.getIndex(pair.minorColor, MinorColorNames);           
    
        if (majorIndex == -1 || minorIndex == -1) {
                throw `Unknown Colors:${pair.toString()}`;
            }
        return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
	 }    

     //This function returns the color index.
     getIndex(color, colorNames)
     {
        let index = -1;
        for (let i = 0; i < colorNames.length; i++)
        {
            if (colorNames[i] == color) {
                index = i;
                break;
            }
        }
        if(index == -1){
            throw `Unknown Colors:${color}`;
        }
        return index;
     }
}