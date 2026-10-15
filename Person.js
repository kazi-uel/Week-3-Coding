
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
    }
}

const person1 = new Person(
    "Kazi Navid Alam Aritro",
    21,
    "u3233448@uel.ac.uk"
);

person1.getPersonInfo();
