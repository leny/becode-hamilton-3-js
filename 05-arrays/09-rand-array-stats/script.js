/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const generateRandomNumbers = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min);
    };

    const getRandomNumbers = () => {

        const randomNumbers = [];

        for (let i = 1; i <= 10; i++) {
    
            randomNumbers.push(generateRandomNumbers(1, 100));
        }

        return randomNumbers;
    };

    const displayRandomNumbers = (randomNumbers) => {
        
        for (let i = 1; i <= 10; i++) {
            
            const $element = document.getElementById('n-'+i);

            $element.innerHTML = randomNumbers[i-1];
        }
    };

    const displayLowestNumber = (randomNumbers) => {

        const lowestNumber = Math.min(...randomNumbers);

        const $element = document.getElementById('min');

        $element.innerHTML = lowestNumber;
    };

    const displayHigherNumber = (randomNumbers) => {

        const higherNumber = Math.max(...randomNumbers);

        const $element = document.getElementById('max');

        $element.innerHTML = higherNumber;
    };

    const displaySumNumbers = (randomNumbers) => {

        const initialVal = 0;

        const sumNumbers = randomNumbers.reduce((accu, val) => val + accu , initialVal);

        const $element = document.getElementById('sum');

        $element.innerHTML = sumNumbers;
    };

    const displayAverageNumbers = (randomNumbers) => {

        const initialVal = 0;

        const sumNumbers = randomNumbers.reduce((accu, val) => val + accu , initialVal);

        const averageNumbers = sumNumbers / 10;

        const $element = document.getElementById('average');

        $element.innerHTML = averageNumbers;
    };

    const displayAllNumbers = () => {

        const randomNumbers = getRandomNumbers();

        displayRandomNumbers(randomNumbers);
    
        displayLowestNumber(randomNumbers);

        displayHigherNumber(randomNumbers);

        displaySumNumbers(randomNumbers);

        displayAverageNumbers(randomNumbers);
    };
 
    $btnRun = document.getElementById('run');

    $btnRun.addEventListener(
        'click',
        () => displayAllNumbers()
    );

})();