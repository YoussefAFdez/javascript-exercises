const sumAll = function(num1, num2) {
  let result = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) result = "ERROR";
  else if (num1 < 0 || num2 < 0) result = "ERROR";
  else {
    //Sort numbers
    if (num1 > num2) [num1, num2] = [num2, num1];
    
    for (let i = num1; i <= num2; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
