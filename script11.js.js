function divisor(a) {
    const divisor = [];
    let sum = 0 ;

    for (let i = 1 ; i <= a ; i++ ){
        if(a % i === 0 && i %  4 === 0){
divisor.push(i);
sum +=i;

        }
    }
    console.log(divisor);
    console.log(divisor.length);
    console.log(sum);
}
console.log(divisor(40));