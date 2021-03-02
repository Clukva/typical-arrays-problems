
exports.min = function min (array) {
   if(Array.isArray(array) && array.length){
   return Math.min(...array)
  }
  return 0;
  
}
console.log(exports.min)

exports.max = function max (array) {
  if(Array.isArray(array) && array.length){
    return Math.max(...array)
   }
  return 0;
   
}

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length){
  let sum = array.reduce((a,b) => a+b);
  let result = sum / array.length;
  return result ;
  }
  return 0;
}
