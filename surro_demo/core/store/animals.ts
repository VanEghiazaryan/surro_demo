export abstract class Animals {
    name:String;
    types: AnimalsType;
    constructor(name: string, types: AnimalsType) {
        this.name = name;
        this.types = types;
    }
    abstract showMydescription(): void
}
export class Pet extends Animals {
    showMydescription(): void {
        alert(this.types)
    }
    constructor(name: string, types: AnimalsType) {
        super(name, types)
    }
    
}

export class Wild extends Animals{
    showMydescription(): void {
        alert(this.types)
    }
  
    constructor(name: string, types: AnimalsType) {
        super(name,types)
    }
}

export  class Zoo {

    constructor() {
        
    }
}

export enum AnimalsType{
    pet = 'Pet',
    wild = 'Wild'
}