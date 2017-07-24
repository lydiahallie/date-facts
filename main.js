const moment = require('moment');
const chalk = require('chalk');

//It is Tuesday, july 18th of 2017, 3:07:48pm
//it is the 199th day of the year
//it is 54468 seconds into day
//it is during daylight savings time
//it is not a leap year

const currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
const dayOfYear = moment().format("DDDo")
const secondsIntoDay = parseInt((moment() -  moment().startOf('day')) / 1000)
const thisYear = moment().format("YYYY")

console.log(`It is ${chalk.hex('6CA0B5') (currentDate)}.`);
console.log(`It is the ${chalk.hex('A976AF')(dayOfYear)} day of the year.`);
console.log(`It is ${chalk.hex('77B4A9')(secondsIntoDay)} seconds into the day.`);
if (moment().isDST()){
   console.log(`It ${chalk.hex('7BA560')('is')} during Daylight Savings Time.`);
}else{
   console.log(`It is ${chalk.hex('AC4242')('not')} during Daylight Savings Time.`);
 }
if (!moment([thisYear]).isLeapYear()){
   console.log(`It is ${chalk.hex('AC4242')('not')} a leap year.`)
}else{
   console.log(`It ${chalk.hex('7BA560')('is')} a leap year.`)
 }
