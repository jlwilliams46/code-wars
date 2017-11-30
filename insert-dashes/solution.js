function insertDash(num) {
    
    let original = '';
    let modded = '';
 
     // convert num to string
     num = num.toString();
 
     for (let i = 0; i < num.length; i++) {
         // "?" conditional then, ":" conditional else
         // parse string to return integer
         parseInt(num[i]) % 2 == 0 ? result = 'even' : result = 'odd';
         // if result is odd and the original is odd
         if (result === 'odd' && original === 'odd') {
             modded = (`${modded}-${num[i]}`); // concatenation
             original = 'odd';
         } else {
             modded = (`${modded}${num[i]}`); // concatenation
             original = result;
         }
     }
     return modded;
 }