// Code your solution in this file
function findMatching(collection, string) {
  //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

  let newArray = collection.filter(function (name) {return name.toLowerCase() === string.toLowerCase()});
  return newArray;
}

function fuzzyMatch(collection, string) {
  let stringLength = string.length;
  let newArray = collection.filter(function (name) {return name.slice(0, stringLength).toLowerCase() === string.toLowerCase()});
  return newArray;
}

function matchName(collection, string) {
  let newArray = collection.filter(function (nameAddress) {return nameAddress.name.toLowerCase() === string.toLowerCase()});
  return newArray;
}
