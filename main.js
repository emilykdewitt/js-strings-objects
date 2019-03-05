console.log('Hello! Your JavaScript file is working!')

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const iAmThirsty = (age) => {
    if (age < 21) {
        return 'drink some water <br>';
    }
    else if (age >= 65) {
        return 'take a nap <br>';
    }
    else {
        return 'have a beer! <br>';
    }
}

printToDom('whatToDrink', `${iAmThirsty(55)} ${iAmThirsty(11)} ${iAmThirsty(87)}`);

console.log(1 === '1'); //false - values are equal but the types are not
console.log(1 == '1'); //true - values are equal

console.log(1 !== '2'); //true

console.log('turducken'.length); //how many characters in a string
const quote = 'winter is coming';

console.log(quote.indexOf('is')); //returns 7
console.log(quote.indexOf('bunny')); //returns -1 (does not exist)

