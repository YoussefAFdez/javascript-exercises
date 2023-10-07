const removeFromArray = function(list, ...values) {
  return list.filter((listItem) => !values.includes(listItem));
};

// Do not edit below this line
module.exports = removeFromArray;
