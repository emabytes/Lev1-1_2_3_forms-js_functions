function double() {
    // get value of input & save to variable
    let someNumber = document.getElementById("number").value;
    // add *2 to the variable
    someNumber *= 2;
    // display value to p tag with id result
    document.getElementById("result").innerHTML = someNumber;
}

function calculateAge() {
    //get value of input & save to variable
    let yearOfBirth = document.getElementById("year").value;
    // get current year
    let date = new Date();
    let currentYear = date.getFullYear();
    //calculate age and save to a new var
    let age = currentYear - yearOfBirth;
    //display age to p tag 
    document.getElementById("result-age").innerHTML = age;
}

function calculateDifference() {
    //get values of both inputs & save to variables
    let ageFirst = document.getElementById("age-first").value;
    let ageSecond = document.getElementById("age-second").value;
    //calculate difference in age
    let difference = ageFirst - ageSecond;
    //display difference to p tag
    document.getElementById("result-difference").innerHTML = "The difference is: " + difference;
}