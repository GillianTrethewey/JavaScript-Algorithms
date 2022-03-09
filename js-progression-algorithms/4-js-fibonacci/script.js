let fibArray = new Array();
fibArray[0] = 0;
fibArray[1] = 1;
let num = 0;

function fibonacci(num) {
    for (i = 2; i < num; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray; 
}

function getNum(){
    let num = Number(document.querySelector("#user-input").value);
    let answer = fibonacci(num);
    displayFibonacci(answer,num);
}

function displayFibonacci(answer,num){
    document.querySelector(".num-entries").innerHTML=num;
    document.querySelector(".fib").innerHTML=answer;
/*   let strAnswer = '';
    for (j = 0; j < num; j++) {
        strAnswer = strAnswer + answer[j] + " ";
    }
    document.querySelector(".fib").innerHTML=strAnswer;
}
       strAnswer = strAnswer + answer[j] + "<br/>";
*/
}