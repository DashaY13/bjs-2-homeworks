function compareArrays(arr1, arr2) {
  let arr1 = [1, 2, 3, 6, 5];
  let arr2 = [1, 2, 3, 6, 5]; 
  const isEqual = (arr1.length === arr2.length) && (arr1.every((value, index) => value === arr2[index]));
  console.log(isEqual);
}
  

const arr = [-1, -16, -2, 1, 13, 99]
.map(function advancedFilter(arr) {
  if (arr % 3 === 0) {
    return arr * 10;
  }
})
.filter(i => i > 0);

console.log(arr)
