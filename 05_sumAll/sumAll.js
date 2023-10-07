const sumAll = function(num1, num2) {
  let result = 0;

  //Test for values being numbers
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    //Test for numbers being postivive
    if (num1 > 0 && num2 > 0) {
      //We sort the numbers
      let auxArray = [num1, num2].sort();
      num1 = auxArray[0];
      num2 = auxArray[1];

      for (let i = num1; i <= num2; i++) {
        result += i;
      }

    } else {
      result = 'ERROR';
    }
  } else {
    result = 'ERROR';
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
