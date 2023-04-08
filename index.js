// Code your solution here
// function findMatching (driversArray, name) {
//     const newDriversArray = []
//     for (const driver of driversArray){
//         if(driver.toUpperCase() === name.toUpperCase()) {
//             newDriversArray.push(driver)
//         }
//     }
//     return newDriversArray;
// }

function findMatching(driversArray, name) {
    return driversArray.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(driversArray, beginningName) {
    return driversArray.filter(driver => driver.toUpperCase().substring(0, beginningName.length) === beginningName.toUpperCase())
}

function matchName(driversObject, targetName) {
    return driversObject.filter(driver => driver.name.toUpperCase() === targetName.toUpperCase())
}