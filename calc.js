//to display content of each key

function displayContent(content){
    calcScreen.value +=content
}
function allClear(){
    calcScreen.value =""
}

function evaluateExpr(){
    calcScreen.value=eval(calcScreen.value)
}

function removeLast(){
    calcScreen.value= calcScreen.value.slice(0,-1)
}