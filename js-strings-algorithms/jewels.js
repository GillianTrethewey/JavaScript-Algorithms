//jewels = "abc", stones = "ac", return 2
//jewels = "Af", stones = "AaaddfFf", return 3
//jewels = "AYOPD", stones = "ayopd", return 0
//return the number of stones that are also jewels

const jewels = "abc";
const stones = "ac";
let dups = [];
function duplicates(jewels, stones) {
  for (let i in jewels) {
      for (let j in stones) {
          if (jewels.charAt(i) === stones.charAt(j)) {
              console.log(jewels.charAt(i), stones.charAt(j));
              char = jewels.charAt(i);
              dups.push(char);
          }
      }
  }
  console.log(dups, dups.length);
}

duplicates(jewels,stones);