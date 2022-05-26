import {ColorPair} from './ColorPair.js';
import {MajorColorNames} from './MajorColorNames.js';
import {MinorColorNames} from './MinorColorNames.js';

export class Color {
    //This function returns the color pair for the given pair number.
    getColorFromPairNumber(pairNumber)
    {
        let minorSize = MinorColorNames.length;
        let majorSize = MajorColorNames.length;
        
        if (pairNumber < 1 || pairNumber > minorSize * majorSize)
         {
             throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
        }
        let zeroBasedPairNumber = pairNumber - 1;
        let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
        let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
        let  pair = new ColorPair();
        pair.majorColor = MajorColorNames[majorIndex];
        pair.minorColor = MinorColorNames[minorIndex];
        return pair;
    }

    //This function returns all the colorpairs for corresponding pair numbers.
    getAllColorsFromPairNumbers()
    {  
        let colorPairManual = [];
        for (let pairNum = 1; pairNum <= (MajorColorNames.length * MinorColorNames.length); pairNum++)
        {                   
            let colorPair = this.getColorFromPairNumber(pairNum);
            colorPairManual.push({
                pairNumber: pairNum,
                colorPair: colorPair
            });           
        } 
        return colorPairManual; 
    }    
}
