/*
DESCRIPTION:
You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length
*/

//My solution

function ascendDescend(l, min, max) {
  let str= ""
  for (let i=min;i<=max;i++){
  str+=i
  }
  for (let i=max-1;i>min;i--){
  str+=i
  }
   str=str.repeat(l)
  return str.substring(0,l)
}
