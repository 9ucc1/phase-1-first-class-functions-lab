// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}
const returnLastTwoDrivers = function(array2){
    return array2.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyMe){
    return function multiplier(fare){
       return multiplyMe * fare
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, func){
    if (func === returnFirstTwoDrivers)
        return returnFirstTwoDrivers(array)
    else (func === returnLastTwoDrivers)
        return returnLastTwoDrivers(array)
}
