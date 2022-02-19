// Задание 1
function getArrayParams(arr) {
  var arr = [1, 0, -1, -5, 2, -3, 4, 99, -18];
    function sum(arr) {
      var arrLen = arr.length,
          result = 0;
      for (var i = 0; i < arrLen; i++) {
        result += arr[i];
      }
      return result;
    }
    function avg(arr) {
      var arrLen = arr.length,
          result = 0;
      for (var i = 0; i < arrLen; i++) {
        result += arr[i];
      }
      var division = result / arrLen;
      return division;
    }
    var fSum = sum(arr),
        fAvg = avg(arr);
  
    console.log(fSum, fAvg);

    var arr = [1, 0, -1, -5, 2, -3, 4, 99, -18],
      fMax,
      fMin;
  function getMax(arr) {
    var arrLen = arr.length,
        maxEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (maxEl < arr[i]) {
        maxEl = arr[i];
      }
    }
    return maxEl;
  }
  function getMin(arr) {
    var arrLen = arr.length,
        minEl = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (minEl > arr[i]) {
        minEl = arr[i];
      }
    }
    return minEl;
  }
  fMax = getMax(arr);
  fMin = getMin(arr);
  console.log(fMax, fMin); 
  }


// Задание 2
function worker(arr) {
  let sum;
    var arr =[[1, 2, 3, 4], [10, 20, -10, -20]]
    function sum(arr) {
      var arrLen = arr.length,
          result = 0;
      for (var i = 0; i < arrLen; i++) {
        result += arr[i];
      }
      return result;
    }
    return sum;
  }
  
  function makeWork(arrOfArr, func) {
    let max;
  
    // Ваш кода
    // for ...
    
    return max;
  }
  

// Задание 3
function worker2(arr) {
  console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

console.log(worker([10, 10, 11])); // 31
console.log(worker([20, 10])); // 30
arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker); // 31

console.log(worker([0, 0, 0])); // 0
console.log(worker([-1, -100])); // -101
arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker); // 0

//worker2
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2); // 98
  }

