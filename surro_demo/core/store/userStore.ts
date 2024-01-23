export class UserData {
    firstName: string;
    lastName: string;
    age: number;
    worker: string;
    state: number | undefined;
    constructor(firstName:string, lastName:string, age:number, worker:string, state:number | undefined) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.worker = worker,
        this.state = state
    }

    startCoding(){
        console.log("Start Coding");
    }
}

export class JuniorClass extends UserData {
    constructor(firstName: string, lastName: string, age: number, worker: string, state: number) {
        super(firstName, lastName, age, worker, state)
    }
    
    startCoding() {
        super.startCoding();
        console.log('I wrote bad code');
    }

}

export class MiddleClass extends UserData {
    constructor(firstName: string, lastName: string, age: number, worker: string, state: number) {
        super(firstName, lastName, age, worker, state)
    }
    startCoding() {
        super.startCoding();
        console.log('I wrote medium code');
    }
}

export class SeniorClass extends UserData {
    constructor(firstName: string, lastName: string, age: number, worker: string, state: number) {
        super(firstName, lastName, age, worker, state)
    }
    startCoding() {
        super.startCoding();
        console.log('I wrote The Best code');
    }
}

export class WorkerItem{
    type: WorkerType
    constructor(name: WorkerType) {
       this.type = name
    }
}

export enum WorkerType{
    junior = 'junior',
    middle = 'middle',
    senior = 'senior'
}