function log(target, key) {
    console.log(key + 'this was exceted')
}

class Person2 {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    
    // decorator 
    @log
    sayMyName() {
        return console.log(this.name);
    }
}

const person2: Person2 = new Person2('Massi');

person2.sayMyName();

//CLASSES
//-----------------------------------------------------

function init(target) {
    return class extends target {
        name: string = 'Massi';
        lastname: string = 'DB';

        sayMyName() {
            return `${this.name} ${this.lastname}`;
        }
    }
}

// Decorator
@init
class P {
    constructor() {}

    sayMyNAme() {}
}

const p = new P();

console.log(p.sayMyNAme());

//PROPERTIES
//-----------------------------------------------------

function logProperty(target, key) {
    let _val = this[key];

    const getter = () => { 
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }

    const setter = (newValue) => {
        console.log(`Set: ${key} => ${newValue}`);
        _val = newValue
    }

    const obj = {
        get: getter,
        set: setter
    }

    Object.defineProperty(target, key, obj);
}

class Property {
    @logProperty
    public name: string;

    constructor(name: string) {
        this.name = name
    }
}

const property = new Property('Massi');
property.name = 'Kris';
const nameFromClass = property.name;

//PARAMITERS
//-----------------------------------------------------
function logParameter(target, propertyName, index) {
    const metadataKey = `Log_${propertyName}_parameters`;

    if(Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    } else {
        target[metadataKey] = [index];
    }
}

class Parameter {
    greet(@logParameter message: string): string {
        return message;
    }
}

const parameter = new Parameter()
parameter.greet('hi');