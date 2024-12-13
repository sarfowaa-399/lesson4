// function are re-useable block of code

// function sayHello(){
//     let user = prompt("what is your name");
//     alert (`Hello ${user}`);
// }
// sayHello();


// function cookRice(salt, water, rice){
//     alert(`i cooked ${rice} cups of rice with ${salt} a pinch of salt and ${water} with 5kilograms of water`)
// }
// cookedRice("half", "500ml, 10");


// function order(HowMany, size){
//     alert(`you just ordered ${HowMany} ${size} burgers`);
// }
// order("HowMany", "size");

function checkAge(){
 let age = prompt("what is your age?");
    if (age<6){
    alert(`you are ${age} years old and you are too young`)
}else if (age <= 6 && age <=17){
    alert (`you are ${age} years old and you have limited options`)
}else if ( age >= 18){
    alert (`you are ${age} years old and you have unlimited options`)
}else {
    alert(`enter an age please!`);
}
}
checkAge();
prompt();