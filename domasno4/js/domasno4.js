let broj = [3, 5, 6, 8, 11];

function maksimum(najgolem){ 
      let counter =0;
      let max = -Infinity;

      while(counter < najgolem.length){
          if(najgolem[counter] > max){
              max = najgolem[counter];
          }
          counter++;
      }
      return max;
}

let maksimalen = maksimum(broj);
console.log(maksimalen);

function minimalen(najmal){ 
    let counter =0;
    let min = Infinity;

    while(counter < najmal.length){
        if(najmal[counter] < min){
            min = najmal[counter];
        }
        counter++;
    }
    return min;
}
let najmalo = minimalen(broj);
console.log(najmalo);


function rezultat (broj){
    let result;
    result = broj.reduce((sum,current) =>sum+current);
    return result;
 }
  let niza =rezultat(broj);
 console.log(niza);