// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyvalue){
    return function(value){
        return multiplyvalue * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, differentDrivers){
    return differentDrivers(arrayOfDrivers)
}