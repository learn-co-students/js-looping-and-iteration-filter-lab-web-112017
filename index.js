// Code your solution in this file

function findMatching (drivers, string) {
  return drivers.filter(function(value) {
    return value.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch (drivers, string) {
  let numberOfLetters = string.length;
  return drivers.filter(function(value) {
    return value.slice(0, numberOfLetters) === string;
  });
}


function matchName(drivers, string) {
  return drivers.filter(function(value) {
    return value.name.toLowerCase() === string.toLowerCase();
  });
}
