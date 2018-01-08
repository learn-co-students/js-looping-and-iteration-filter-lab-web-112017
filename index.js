// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return (driver.toUpperCase() === name.toUpperCase()); });
}

function fuzzyMatch(drivers, beginning) {
  return drivers.filter(function (driver) {
    return driver.startsWith(beginning);
    }
  )
}

function matchName(drivers, driver_name) {
  return drivers.filter(function (driver) {
    return driver.name === driver_name;
    }
  )
}
