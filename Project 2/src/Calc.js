import './Calc.css'
function add(x,y){
    let sum = x+y;
    return sum;
}
function difference(x,y){
    let difference = x-y;
    return difference;
}
function product(x,y){
    let product = x*y;
    return product;
}
function division(x,y){
    let division = x/y;
    return division;
}
export {add,difference,product,division};