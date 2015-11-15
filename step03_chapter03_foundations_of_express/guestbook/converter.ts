/// <reference path="./typings/tsd.d.ts" />

export class Converter1{
    static rate = 100;
    
    static setRate(rate: number){
        Converter1.rate = rate;
    }
    
    static rupeeToDollar(rupee: number){
        return rupee / Converter1.rate;
    }
    
}
