function findMatching(drivers, string) {

  let arr = drivers.filter(function (driver) {
    return driver.match(new RegExp(string, 'i'));
    });

  return arr;
}
// returns all drivers that match the passed in name ‣
// returns matching drivers if case does not match but letters do ‣
// returns an empty array if there is no match ‣
function fuzzyMatch(drivers, string) {

  let arr = drivers.filter(function (driver) {
      if (driver.substring(0, 2) === string.substring(0, 2)) {
        return driver.match(new RegExp(string, 'i'));
      }
    });

  return arr;
}
// returns a driver if beginning provided letters match ‣
// does not return drivers if only middle or ending letters match ‣
// does not return drivers if only middle or ending letters match ‣
function matchName(drivers, string) {

  let arr = drivers.filter(function (driver) { return driver.name ===string; });
  
  return arr;
}
// accesses the data structure to check if name matches
