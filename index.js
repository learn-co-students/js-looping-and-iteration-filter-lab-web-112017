// Code your solution in this file
// drivers = ['hi', 'low', 'hi']
// string = 'hi'

function findMatching (drivers, string) {
  final = [];
  for (const name of drivers) {
    if (name.toLowerCase() === string.toLowerCase()) {
      final.push(name);
    }
  }
  return final;
}

function fuzzyMatch (drivers, string) {
  final = []
  for (const name of drivers) {
    if (name[0].toLowerCase() === string[0].toLowerCase()) {
      final.push(name)
    }
  }
  return final;
}

function matchName (drivers, string) {
  final = [];
  for (const person of drivers) {
    if (person.name === string) {
      final.push(person);
    }
  }
  return final;
}
