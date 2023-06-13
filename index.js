// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers) {    

    const firstTwoArray = drivers.slice(0, 2)
    return firstTwoArray
     
}

const returnLastTwoDrivers = function(drivers) {   

    const lastTwoArray = drivers.slice(2, 4)
    console.log(lastTwoArray)
    return lastTwoArray
    
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

console.log(selectingDrivers)

const createFareMultiplier = function(fare) {
    
    return (function () {
        fare = fare * fare
        return fare
    })
}

const fareDoubler = function(createFareMultiplier) {
    // console.log(createFareMultiplier * 2)
    let fare = createFareMultiplier * 2
    console.log(fare)
    return fare
}

const fareTripler = function(createFareMultiplier) {
    // console.log(createFareMultiplier * 2)
    let fare = createFareMultiplier * 3
    console.log(fare)
    return fare
}

const selectDifferentDrivers = function (drivers, myFunction) {
    console.log(returnFirstTwoDrivers)
    console.log('test')
    
    if (myFunction === returnFirstTwoDrivers) {
        
        return returnFirstTwoDrivers(drivers)
      }
    
    else {
        return returnLastTwoDrivers(drivers)
    }
    
    
}