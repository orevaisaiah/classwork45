/*document.getElementById("p1").innerHTML = "My name is";
document.getElementById("p2").style.color="blue";
function myFunction(){
    document.getElementById("demo").innerHTML = "The paragraph has changed"
};
document.write("Document");
//window.alert("Frontend")
console.log(900)
var x = 5;
var y = 10;
var z = x + y;


console.log(z);

var name = 'Oreva Isaiah';
var age = 26;
var isMarried = false;
var numOfChildren = null;
var definition = undefined;

document.getElementById("p3").innerHTML = name;
document.getElementById("p4").innerHTML = age;
document.getElementById("p5").innerHTML = isMarried;
document.getElementById("p6").innerHTML = numOfChildren;
document.getElementById("p7").innerHTML = definition;

console.log(name);
console.log(age);
console.log(isMarried);
console.log(numOfChildren);
console.log(definition);

var number1 = 10;
var number2 = 20;

var sum = number1 = number2;

console.log(sum);

var a = 5;
var b = 6;

var multiple = a * b;

console.log(multiple);

var c = 20;
var d = 10;
var subt = c - d;

console.log(subt);

var e = 65;
var f = 5;
var div = e / f;

console.log(div);

var g = 10;
g++;
console.log('increment operator', g);

var h = 10;
h--;
console.log('decrement operator', h);


function divide( numb1, numb2){
    let div = numb1/numb2
    console.log(div)
}
divide(300, 6)


const users = [
    {
        firstName: 'Orevaoghene', lastName: 'Inabor', age: 27
    },
    {
        firstName: 'Obaro', lastName: 'Inabor', age: 26
    }
];

console.log(users);

function details(){
    document.getElementById("name1").innerHTML=users[0].firstName+' ' +users[0].lastName;
    document.getElementById("name2").innerHTML=users[1].firstName+' ' +users[1].lastName;
    document.getElementById("age").innerHTML=users[0].age+users[1].age;
};
console.log(users[0].firstName+' ' +users[0].lastName);
console.log(users[1].firstName+' ' +users[1].lastName);
console.log(users[1].age+users[1].age);

let names=[ 'Felix', 'Isaac', 'Helen', 'Glory', 'Michael'];
console.log(names.length);
console.log(names.sort());
console.log(names.toString());

 //let passed = document.getElementById(pass).innerHTML = "You passed";
    //let failed = document.getElementById(pass).innerHTML = " You failed";
    //let score = document.getElementById('score').value;
    //(score >= 50)? passed:failed;


function gradeScore(){
    let score = document.getElementById('score').value;
    if (score )
}

let users = [
    {
        name: 'Micheal', age: 23
    },
    {
        name: 'Jennifer', age: 30
    }
];
for(let i = 0; i < users.length; i++) {
    console.log(users[i].name);
    console.log(users[i].age);
}
users.forEach(function(val, i, arr){
    console.log(val)
    console.log(val.age)
});
users.map(function(val, i, arr){
    console.log(val)
});*/

for(let i = 0; i <= 15; i++){
    if(i % 2 == 0){
        console.log(i, 'is even');
    }
    else{
        console.log(i, 'is odd');
    }
}