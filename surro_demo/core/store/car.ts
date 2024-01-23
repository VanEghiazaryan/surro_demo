export class Car {
    mark: CarType;
    price: number
    constructor(mark: CarType, price: number) {
        this.mark = mark
        this.price = price
    }
}

export class AutoSalon {
    cars: Array<Car>
    profit: number;
    percentTax:number;
    constructor(cars: Array<Car>) {
        this.cars = cars;
        this.profit = 0;
        this.percentTax = 0;
    }

    addCar(car:Car) {
        this.cars.push(car)
        console.log(this.cars);
    }

    searchCar(mark: CarType) {
        const MyChosenCars = this.cars.filter((car) => car.mark == mark);
        console.log(MyChosenCars);
        return MyChosenCars
    }

    sellCar(item:Car) {
        console.log(item);
        this.calculateProfit(item.price)
    }

    calculateProfit(price:number) {
        this.profit += price - price*10/100;
        this.percentTax += price * 10 / 100;
        console.log('You this time have a '+ this.profit + ' $  profit and ' + this.percentTax +'$ tax' );
    }

}



export enum CarType {
    BMW = 'BMW',
    NISSAN = 'NISSAN',
    OPEL = 'OPEL',
    MASSERATI = 'MASSERATI',
    FORD = 'FORD',
    LADA = 'LADA',
    Acura = 'Acura',
    Audi = 'Audi',
    Avatr = 'Avatr',
    Bentley = 'Bentley',
    Bugatti = 'Bugatti',
    Cadillac = 'Cadillac',
    Chery = 'Chery',
    Chevrolet = 'Chevrolet',
    Chrysler = 'Chrysler',
    Citroen = 'Citroen',
    Daewoo = 'Daewoo',
    Dodge = 'Dodge',
    Ferrari = 'Ferrari',
    GMC = 'GMC',
    Honda = 'Honda',
    Hummer = 'Hummer',
    Infiniti = 'Infiniti',
    Isuzu = 'Isuzu',
    Jaguar = 'Jaguar',
    Jeep = 'Jeep',
    Kia = 'Kia',
    Lamborghini = 'Lamborghini',
    Lexus = 'Lexus',
    Maybach = 'Maybach',
    Mazda = 'Mazda'
}

export enum WeatherType {
    spring = 'Spring',
    summer = 'Summer',
    autumn = 'Autumn',
    winter = 'Winter'
}

export enum EngineType {
    petrol = 'Petrol',
    gas = 'gas',
    diesel = 'diesel'
}

export enum DriveType {
    straight = 'straight',
    back = 'back',
    left = 'left',
    right = 'right'
}
