type Dni = number;

interface Person {
    // no son obligatoria mente requeridos los alementos con '?'
    heigh?: number;
    age: number;
    name: string;
    dni: Dni;
}

const person: Person = {
    // heigh: 1.76,
    age: 23,
    name: 'Pepe',
    dni: 95740320
}