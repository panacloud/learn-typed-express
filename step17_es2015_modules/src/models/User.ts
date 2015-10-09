export default class User {
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    
    browsing(){
        return this.name + " is a User from a ES2015 class/module and is eating";
    }
}
