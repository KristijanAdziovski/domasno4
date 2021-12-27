let arr = [2,6,9,10,229];

function rezultat (arr){
   let result;
   result = arr.reduce((sum,current) =>sum+current);
   return result;
}
 let niza1 =rezultat(arr);
console.log(`The result is : ${niza1}`);


