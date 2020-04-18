class Vehicle {
    private speed: number;
    private movingType: string;

    constructor(speed: number, movingType: string) {
        this.speed = speed;
        this.movingType = movingType;
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }

    getMovingType() {
        return this.movingType;
    }

    setMovingType(movingType: string) {
        this.movingType = movingType;
    }
}

const corsa: Vehicle = new Vehicle(20, 'street');

class Car extends Vehicle {
    private doors: number;

    constructor(speed: number, movingType: string, doors: number) {
        super(speed, movingType);
        this.doors = doors;
    }

    getDoors() {
        return this.doors;
    }

    setDoors(doors: number) {
        this.doors = this.doors;
    }
}

const mazda: Car = new Car(20, 'street', 3);