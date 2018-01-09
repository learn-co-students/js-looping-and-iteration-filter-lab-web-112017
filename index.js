// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
  return array.filter(function (item) {
    return item.toLowerCase() === name.toLowerCase()
  } )
}

function fuzzyMatch(array, part) {
  let part_length = part.length
  return array.filter(function (item) {
    return item.slice(0, part_length) === part
  })
}

function matchName(array, arg) {
  return array.filter(function (item) {
  return item.name === arg  
  })
}
