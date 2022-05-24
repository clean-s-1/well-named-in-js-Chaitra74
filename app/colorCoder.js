import {ColorPair} from './ColorPair.js';
import {Color} from './Color.js';
import {PairNumber} from './PairNumber.js';

function ColorCoderTest(){  
	//test cases for checking the color pair returned for given pair number.     
			let pairNumber = 4;
            let colorProcessor = new Color();
            let testPair1 = colorProcessor.getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1.formatColorPair()}`);
			console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "BROWN");

			pairNumber = 5;
            testPair1 = colorProcessor.getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1.formatColorPair()}`);
			console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "SLATE");
			 
			pairNumber = 23;
            testPair1 = colorProcessor.getColorFromPairNumber(pairNumber);
            console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1.formatColorPair()}`);
			console.assert(testPair1.majorColor == "VIOLET");
			console.assert(testPair1.minorColor == "GREEN");
	
	//test cases for checking the pair number returned for given color pair.   
            let testPair2 = new ColorPair();
			testPair2.majorColor="YELLOW";
			testPair2. minorColor ="GREEN";
            let pairNumProcessor = new PairNumber();
            pairNumber = pairNumProcessor.getPairNumberFromColor(testPair2);
            console.log(`[In]Colors: ${testPair2.formatColorPair()}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==18);

			testPair2 = new ColorPair();
			testPair2.majorColor="RED";
			testPair2. minorColor ="BLUE";
            pairNumber =pairNumProcessor.getPairNumberFromColor(testPair2);
            console.log(`[In]Colors: ${testPair2.formatColorPair()}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==6);
	
	//printing wiring color pair manual.		
            console.log("PairNumber Manual");
			colorProcessor.getAllColorsFromPairNumbers();          
}
ColorCoderTest();

