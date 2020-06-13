////////////// Prefered Method 3

// Method 1
/*
var hector ={
    firstName: 'Hector',
    lastName: 'Hernandez',
    birthYear: 1996,
    job: 'Home Depot',
    isMarried: false, 
        calcAge: function(){
            return 2020 - this.birthYear;
        }
}

console.log(hector.calcAge());

*/

// Method 2
/*
var hector ={
    firstName: 'Hector',
    lastName: 'Hernandez',
    birthYear: 1996,
    job: 'Home Depot',
    isMarried: false,
        calcAge: function(birthYear){
    return 2020 - birthYear;
}

console.log(hector.calcAge(1996)); 
*/

// Method 3

var hector = {
    firstName: 'Hector',
    lastName: 'Hernandez',
    birthYear: 1996,
    job: 'Home Depot',
    isMarried: false,
        calcAge: function(){
            this.age = 2020 - this.birthYear;
        }
    }

    hector.calcAge();
    console.log(hector);
