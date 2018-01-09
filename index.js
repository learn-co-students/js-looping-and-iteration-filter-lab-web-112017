
// function filter (collection, cb) {
//   const newCollection = [];
//
//   for (const user of collection) {
//     if (cb(user)) {
//       newCollection.push(user);
//     }
//   }
//
//   return newCollection;
// }



function findMatching (drivers, nameToMatch) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === nameToMatch.toLowerCase();
  });
}



function fuzzyMatch (drivers, chars) {
  return drivers.filter(function(driverName){
    return driverName.slice(0, chars.length) === chars
  })
}


function matchName (drivers, nameToMatch) {
  return drivers.filter(function (driverObj) {
    return driverObj.name.toLowerCase() === nameToMatch.toLowerCase();
  });
}
