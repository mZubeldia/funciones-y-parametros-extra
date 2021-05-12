'use strict';

function writeThis (word, randomNumber) {
  for (let i = 0; i < randomNumber; i++) {
  console.log(`${word}`);
  }
  
}

function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

const randomNumber = getRandomNumber (10);
console.log(randomNumber);

writeThis ("patata", randomNumber); 
writeThis ("aguacate", randomNumber); 
writeThis ("pizza", randomNumber);