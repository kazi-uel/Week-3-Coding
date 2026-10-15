
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

// Exercise 1: Display current date and time
const currentDateTime = new Date();

console.log("This is my first program");
console.log("Program run on: " + currentDateTime.toLocaleString());

var EmpName = "Aritro";
var EmpSalary = 1400;

EmployeeInfo(EmpName, EmpSalary);


// Exercise 2: Display student skills
const EmpSkills = (skills, Name, LabGrp) => {
    console.log("Student ID " + Name + " Expert in " + skills);
    console.log("Lab Group Name " + LabGrp);
};

EmpSkills("java", "3233448", "25");


// Exercise 3: Student information
const dateofBirth = "01/04/2005";

const getStudentName = () => {
    return "Kazi Navid Alam Aritro";
};

const getCampusName = () => {
    return "UEL Docklands Campus";
};

const Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};


// Person class
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo() {
        return {
            Name: this.name,
            Age: this.age,
            Email: this.email
        };
    }
}


// My Information
console.log("Student Name: " + getStudentName());
console.log("Campus: " + getCampusName());
console.log("Date of Birth: " + dateofBirth);
console.log("Grade: " + Studentgrade(55));


// New person discovered here
const person1 = new Person(
    "Jim",
    21,
    "myemail@gmail.com"
);

console.log("Using Person Class:");
console.log("Name: " + person1.getPersonInfo().Name);
console.log("Age: " + person1.getPersonInfo().Age);
console.log("Email: " + person1.getPersonInfo().Email);

console.log("Program ended");
