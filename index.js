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

function fuzzyMatch(collection, name, callback) {
  newCollection = [];
  for (callback(collection, name) ) {
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
