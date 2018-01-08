// Code your solution in this file
function findMatching(array, name) {
  let matchingArray = array.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
  return matchingArray
}

function fuzzyMatch(array, letters) {
  let fuzzyArray = array.filter(function (driver) { return driver.slice(0, letters.length) === letters });
  return fuzzyArray
}

function matchName(array, name) {
  let objArray = array.filter(function (driver) { return driver['name'] === name });
  return objArray
}
