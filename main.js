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

