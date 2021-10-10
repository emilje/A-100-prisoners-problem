'use strict';

/*

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);



let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
}

g();
f();
h();
f();
console.dir(f);

//

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    }, wait * 1000)


    console.log(`Will start boarding in ${wait} seconds.`)
}

const perGroup = 1000;
boardPassengers(180, 3);



(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";

    document.querySelector("body").addEventListener("click", function () {
        header.style.color = "blue";
    })
})();



let counter = 0;
let light = true;
let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;
let a5 = 0;
let a6 = 0;
let a7 = 0;
let a8 = 0;
let a9 = 0;

let people = [a1, a2, a3, a4, a5, a6, a7, a8, a9, counter];


function getRandomInt(max) {
    return Math.floor(Math.random() * people.length);
}



while (counter <= 18) {
    console.log("It looped")
    let i = getRandomInt(people.length);


    if (i < 9) {

        if (!light && people[i] < 2) {
            light = true;
            people[i] = people[i] + 1;

        }

    }

    else {
        if (light) {
            light = false;
            counter++;
        }

    };
}


console.log(people);

*/

let counter = 0;
let light = Math.random() < 0.5;
let days = 0;
let userInput;

const prisoners = Math.floor(Math.random() * 95) + 5;
let people = new Array(prisoners);
let zeroPrisoners = new Array();
console.log(zeroPrisoners);
let lightWord;

if (light) {
    lightWord = "on"
} else lightWord = "off"



// let userInput = Number(prompt(`The lights are ${lightWord} and the numbers of prisoners is ${prisoners}`,));

const clickHandler = function () {
    alert("You clicked a button");
}










const correctCountFunc = function (numPrisoners) {
    if (!light) {
        return ((numPrisoners - 1) * 2 - 1);
    }
    else return ((numPrisoners - 1) * 2);

}


const correctCount = correctCountFunc(prisoners);



function getRandomInt(max) {
    return Math.floor(Math.random() * people.length);
}

for (let i = 0; i < people.length; i++) {

    people[i] = 0;

}


const bigFunction = function () {

    userInput = Number(prompt(`The lights are ${lightWord} and the numbers of prisoners is ${prisoners}`,));

    if (typeof (userInput) === "number" && userInput > 0) {

        if (userInput <= correctCount) {


            while (counter < userInput) {
                let i = getRandomInt(people.length);
                console.log(i);
                days++;


                if (i < people.length - 1) {

                    if (!light && people[i] < 2) {
                        light = true;
                        console.log(`Prisoner number ${i + 1} turned the lights on`)
                        people[i] = people[i] + 1;

                    }

                }

                else {
                    if (light) {
                        light = false;
                        counter++;
                        console.log(`The counter turned off the lights ${counter} times .`);

                    } else console.log("Counter came but did nothing");

                };
            }
        }
        else
            alert("No, the prisoners will never get out like this...");



    } else if (userInput < 0) {
        alert("Use a positive number");
    } else alert("Use a number.");



    if (userInput == correctCount) {
        alert(`You are free! It only took ${days} days.`)
    }


    if (userInput < correctCount && userInput > 0) {

        for (let i = 0; i < people.length - 1; i++) {
            if (people[i] == 0) {
                zeroPrisoners.push(i + 1);
            }

        }
        alert(`This did not work. Prisoners number ${zeroPrisoners} have not even entered the room!`);

    }
};

const btn = document.querySelector('.buy');
btn.addEventListener('click', bigFunction);







