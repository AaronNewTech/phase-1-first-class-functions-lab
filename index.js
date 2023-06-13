// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers) {    

    const firstTwoArray = drivers.slice(0, 2)
    return firstTwoArray
     
}

const returnLastTwoDrivers = function(drivers) {   

    const lastTwoArray = drivers.slice(2, 4)
    return lastTwoArray
    
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]



const createFareMultiplier = function(fare) {
    
    return (function () {
        fare = fare * fare
        return fare
    })
}

const fareDoubler = function(createFareMultiplier) {
  
    let fare = createFareMultiplier * 2
    return fare
}

const fareTripler = function(createFareMultiplier) {
    
    let fare = createFareMultiplier * 3
    return fare
}

const selectDifferentDrivers = function (drivers, myFunction) {
    
    if (myFunction === returnFirstTwoDrivers) {
        
        return returnFirstTwoDrivers(drivers)
      }
    
    else {
        return returnLastTwoDrivers(drivers)
    }
    
}