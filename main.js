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

const catName = () => {
    return 'killer';
}

const bucketOfCats = {
    cat1: 'fluffy',
    cat2: '5',
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep',
    }
}

//dot notation
console.log(bucketOfCats.cat4.water);

//bracket notation
console.log(bucketOfCats['cat2']);

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);
console.log(hitchhikers_guide.random_facts.formats[1]);

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
    vacation_days: 20,
  }

let eom = "employee_of_the_month";
employee.eom = false;

console.log(`Our company's lawyer is ${employee.name}`);
console.log(`Jeff was hired on ${employee['hire_date']}`);
console.log(`Jeff has ${employee.vacation_days} vacation days.`);

const isEmployeeOfMonth = (answer) => {
    if (answer === true) {
        return `gets a gold star for being Employee of the Month!`
    } else {
        return `is okay, I guess.`
    }
}

console.log(`Jeff ${isEmployeeOfMonth(employee.eom)}`);