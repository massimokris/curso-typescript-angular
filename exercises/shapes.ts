class Person {
    private age: number;
    private height: number;
    private dni: string;

    constructor(age: number, height: number, dni: string) {
        this.age = age;
        this.height = height;
        this.dni = dni;
    }
}

class Student extends Person {
    private id: string;

    constructor(age: number, height: number, dni: string, id: string) {
        super(age, height, dni);
        this.id = id;
    }
}

let person: Person = new Person(27, 1.69, '95744039');
let student: Student = new Student(22, 1.78, '95748391', '10');

person = student;