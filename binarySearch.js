'use strict';
function binarySearch(searchVal, arr) {
  var sorted = arr.sort(function (a, b) {
    if (a <= b) {
      return -1;
    }
    else if (b < a) {
      return 1;
    }
    else
      return 0;
  });
  var midpoint = sorted[Math.floor((sorted.length - 1) / 2)];
  if (searchVal == midpoint) {
    console.log('found it!');
    return midpoint;
  }
  else if (sorted.length <= 1) {
    console.log('not in the list');
    return false;
  }
  if (searchVal < midpoint) {
    var firstHalf = sorted.slice(0, midpoint);
    console.log('looking in the first half');
    return binarySearch(searchVal, firstHalf);
  }
  if (searchVal > midpoint) {
    var secondHalf = sorted.slice((Math.floor(sorted.length / 2)), sorted.length);
    console.log('looking in the second half');
    return binarySearch(searchVal, secondHalf);
  }
  else
    return false;
}
console.log('hello');
console.log(binarySearch(4, [1, 5, 3, 45, 7, 4, 3, 3, 5, 7, 8, 7, 9, 8, 34, 5, 4, 6, 4, 23, 3, 5, 8, 6, 4, 12, 45, 7, 8, 42]));
