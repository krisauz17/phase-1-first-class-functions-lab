// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// function returnFirstTwoDrivers(drivers){
//         return drivers.slice(0,2);
// }

// function returnLastTwoDrivers(drivers){
//     return drivers.slice(2,4);
// }
const returnFirstTwoDrivers = drivers => {return drivers.slice(0, 2)};

const returnLastTwoDrivers = drivers => {return drivers.slice(2, 4)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier= (fareMultiplier)=>{
    return function(fareQuintupler){
        return (fareMultiplier * fareQuintupler);
    }
} 
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers,driver) => {return driver(drivers)};