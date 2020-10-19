// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length - 2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiply) {
    return function(fare) {
        return multiply * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers)
}