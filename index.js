// Code your solution in this file


function findMatching(collection, name){
  newCollection = [];
  for (const driver of collection) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      console.log(`${driver} was added to collection.`);
      newCollection.push(driver);
    }
  }
  return newCollection;
}

function fuzzyMatch(collection, name) {
  newCollection = [];
  for (const driver of collection) {
    if (name.toLowerCase().slice(0,2) === driver.toLowerCase().slice(0,2) ) {
      console.log(`${driver} was added to collection.`);
      newCollection.push(driver);
    }
  }
  return newCollection;
}

function matchName(collection, name) {
  newCollection = [];
  for (const driver of collection) {
    if (name.toLowerCase() === driver.name.toLowerCase()) {
      console.log('HERE: ' + driver.name)
      newCollection.push(driver);
    }
  }
  return newCollection;
}
