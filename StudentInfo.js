
const dateofBirth = "01/04/2005";

// Function to return student name
const getStudentName = () => {
    return "Kazi Navid Alam Aritro";
};

// Function to return campus name
const getCampusName = () => {
    return "UEL Docklands Campus";
};

// Grade
const Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};

// Output
console.log("Student name: " + getStudentName());
console.log("Campus: " + getCampusName());
console.log("Date of birth: " + dateofBirth);
console.log("Grade: " + Studentgrade(80));
