// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
  if(arr[i] < min) min = arr[i];
  if(arr[i] > max) max = arr[i];
  sum += arr[i];
  }
  let avg = sum / arr.length;
  return {min: min, max: max, avg: +(avg.toFixed(2))};
  }

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
  sum += arr[i];
  }
  return sum;
  }

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
  let resultOfFunc = func(arrOfArr[i]);
  if(resultOfFunc > max) max = resultOfFunc;
  }
  return max;
  }
  

// Задание 3

function worker2(arr) {
  let arrParams = getArrayParams(arr);
  return arrParams.max - arrParams.min;
  }
