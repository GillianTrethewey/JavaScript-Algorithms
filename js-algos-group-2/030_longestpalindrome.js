s = "babad"
//Output: "bab"
//Note: "aba" is also a valid answer.

function longestpalindrome(s){
  let arr = s.split("");
  let endArr = [];
  
  for(let i = 0; i < arr.length; i++){
    let temp = "";
    temp = arr[i];
    for(let j = i + 1; j < arr.length; j++){
      temp += arr[j];
      if(temp.length > 2 && temp === temp.split("").reverse().join("")){
        endArr.push(temp);
      }
    }
  }
  
  let count = 0;
  let p = "";
  for(let i = 0; i < endArr.length; i++){
    if(count >= endArr[i].length){
      p = endArr[i-1]; 
    }
    else{
      count = endArr[i].length;
    }
  }
  console.log(endArr);
  console.log(p);
  return p;
}
longestpalindrome(s);
