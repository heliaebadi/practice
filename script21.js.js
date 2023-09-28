function addnumber(){
let h=[];
for(let i = 10; i <= 99; i++){
    let one = i % 10;
    let ten = Math.floor(i/10);
    if(one % 2 !== 0 && ten  % 2 !==0){
        h.push(i);

    }
}
console.log(h);
}
addnumber();