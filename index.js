const runTimes = [10.59, 10.67, 10.52, 10.48];

// Add latest time to end of array
runTimes.push(10.56);
console.log(runTimes);

// Add another time to end of array and log how many trials runner has under new workout program
// const runTimes = [ 10.59, 10.67, 10.52, 10.48, 10.56 ]; // current times
const totalTrials = runTimes.push(10.68); // add another run time of 10.68
console.log(totalTrials); // prints 6
