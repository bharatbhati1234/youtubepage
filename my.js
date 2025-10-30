

// function likha hai fir valueButton call kiya hai or e parameter likha hai 
// jo bhi button hum press karege vo screen pe show hoga valueButton(e) se 
function valueButton(e){
    calculatorform.screen.value += e.value;
}


//    ya pe clear function ko call kiya hai esse vo bhi screen mai number likha hoga vo clear ker dega esliya  null likha hai 
function Clear(){
    calculatorform.screen.value = null;
}

// ya pe calculate function ko call kiya hai eval method liya hai esse +,-,* ya sab hoga 
function Calculate(){
    calculatorform.screen.value = eval(calculatorform.screen.value)
}
