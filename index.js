// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.slice(0,string.length).toLowerCase() === string.toLowerCase()
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
