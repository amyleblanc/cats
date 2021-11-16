const fs = require('fs');

const whenReadyCallback = () => {

}

const breedDetailsFromFile = function(breed, whenReadyCallback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) whenReadyCallback(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};

breedDetailsFromFile('Balinese', printOutCatBreed);