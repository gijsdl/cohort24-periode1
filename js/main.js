console.log("main loaded");

// const x = 10;
// const y = 17;

// let answer = x + y;
// alert(answer);
// answer = y-x;
// alert(answer);
// answer = y % x;
// alert(answer);

// const x = "dit is een";
// const y = "stuk tekst";

// const string = x + y;

// console.log(x + ' ' + y);

// console.log("je score is " + (x + y));

// const x = 11;
// const y = 10;

// console.log(x >= y);
// console.log(x <= y);
// console.log(x != y);


// const userAge = 18;
// const minimalAge = 18;

// const accept = confirm("ga je akoord met de voorwaarden.");

// if (userAge >= minimalAge && accept){
//     alert("Je bent oud genoeg");
// } else if (userAge >= minimalAge - 1){
//     alert("je moet nog een jaar wachten");
// } else {
//     alert("je bent nog niet oud genoeg");
// }

// let number = 10;
// number = number ** 2;
// number = number + 1;
// console.log(number);

// // const name = prompt("Wat is je naam");

// // if(name === 'jan' || name === 'Jan'){
// //     console.log("welkom jan");
// // }


// const userAge = 18;
// const minimalAge = 18;
// const driverLicence = false;

// if( minimalAge <= userAge && driverLicence){
//     alert("Je mag rijden");
// } 

// const name = prompt("wat is je naam");

// if(name === 'jan' || name === 'Jan'){
//     alert("je mag binnen komen");
// }

// const enable = confirm("geef je toestemming");

// if(enable){
//     alert("je hebt toestemming gegeven");
// }

// let number = 5;
// number = number ** 2;
// console.log(number);


// const dayNumber = 1;
// let day = '';

// switch (dayNumber) {
//     case 1:
//     case 2:
//     case 3:
//         day = "het is het begin van de week";
//         break;
//     case 4:
//     case 5:
//         day = "het is het einde van de week";
//         break;
//     case 6:
//     case 7:
//         day = "het is weekend";
//         break;
//     default:
//         day = "deze dag is er niet";
// }

// console.log(day);


// const diceOne = 2;
// const diceTwo =5;

// if(diceOne < 3 && diceTwo < 3){
//     alert("ze zijn beide lager dan 3");
// }

// const paragraph = document.querySelector(".change-text");
// const button = document.querySelector("button");

// button.addEventListener('click', function () {
//     if (paragraph) {
//         paragraph.innerHTML = "<b>dit is een stuk tekst<b>";
//     }else{
//         console.log("Het paragraph element is niet te vinden");
//     }
// });

// const diceOne = Math.round(Math.random() * (6 - 1) + 1);
// const diceTwo = Math.round(Math.random() * (6 - 1) + 1);
// console.log(diceOne + " + " + diceTwo + " = " + (diceOne + diceTwo));

// const numbers = [1, 2, 3, 4, 5, 6];

// const array = document.querySelectorAll('.list-item');
// console.log(array.innerText);
// let i = 0;

// while(i < array.length){
//     const number = array[i];
//     console.log(number.innerText);
//     i++;
// }

// const correctPassword = 'password';
// let password = '';

// while (password !== correctPassword){
//     password = prompt('wat is het wachtwoord');
// }

// alert('Je hebt toegang');

// const listItems = document.querySelectorAll('.list-item');

// for(let i = 0; i < listItems.length; i++){
//     const listItem = listItems[i];
//     console.log(listItem.innerText);
// }

// const starsDiv = document.querySelector('.stars');
// const starRows = prompt('Hoe veel rijen wil je hebben');
// for(let i = 0; i < starRows; i++){
//     let starString = '';
//     for(let j = 0; j < i; j++){
//         starString += '&ensp;';
//     }
//     for(let j = i; j < starRows; j++){
//         starString += '*';
//     }
//     console.log(starString);
//     starsDiv.innerHTML += starString + '<br>'
// }

// const die6 = document.querySelector('.die-6');
// const die20 = document.querySelector('.die-20');

// die6.addEventListener('click', () => {
//     showTotal(6, 6);
// });
// die20.addEventListener('click', () => {
//     showTotal(20, 8);
// });

// function showTotal(numberDie, size) {
//     const total = throwDice(numberDie, size);
//     console.log(total);
// }

// function throwDice(numberDie, size) {
//     let total = 0;
//     for (let i = 0; i < numberDie; i++) {
//         const die = Math.round(Math.random() * (size - 1) + 1);
//         total += die;
//     }
//     return total;
// }

// const submitBtn = document.querySelector('.submit-btn');
// const input = document.querySelector('.name-input');

// submitBtn.addEventListener('click', checkForm)

// function checkForm() {
//     if (!input.checkValidity()) {
//         input.reportValidity();
//     } else {
//         const name = input.value;
//         console.log(name);
//     }
// }

const numberArray = [3, 4, 6, 8, 10, 12];

// let i = 0;

// while (i < numberArray.length) {
//     const number = numberArray[i];
//     console.log(number);
//     i++;
// }

for(let i = 0; i < numberArray.length; i++){
    if(i % 2 === 0){
    const number = numberArray[i];
    console.log(number);
    }
}