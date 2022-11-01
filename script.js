// 1 display number in text box

function displayNum(num){
    console.log(num);
    result.value+=num;
}

// 2 clear text box

function clearBox(){
    result.value="";
}

// 3 evaluate expression

function evaluateExpression(){
    // exp=result.value;
    // output=eval(exp);
    // result.value=output;

    result.value=eval(result.value);
}


// 4 remove last item from text box

function removelast(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}