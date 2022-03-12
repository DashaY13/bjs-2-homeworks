function compareArrays(arr1, arr2) {
  const isEqual = (arr1.length === arr2.length) && (arr1.every((value, index) => value === arr2[index]));
  return isEqual;
}

function advancedFilter(arr) {
  const result = arr.filter(x => x > 0).filter(x => x % 3 === 0).map(x => x * 10);
  return result;
}