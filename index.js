// Code your solution in this file

function findMatching(drivers, string){
  const list = drivers.filter(word => word.toLowerCase() === string.toLowerCase());
  return list;
};

function fuzzyMatch(drivers, string){
  const words = drivers.filter(word => word.slice(0, string.length) === string);
  return words;

};

function matchName(drivers, string){
  const words = drivers.filter(word => word.name === string);
  return words;

};
