let a = 10;
let b = 5;
let c = 2;
let d = 3;
function value(a,b,c,d){
    if (a>c+d){
        return a *c;
    }else{
        return b*d;
    }
}
console.log(value(a,b,c,d));