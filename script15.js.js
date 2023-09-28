const people =[
    {name: "helia", age:17, gender:"woman", Score: 20,diplom:3},
      {name: "qzale", age:21, gender:"woman", Score: 20,diplom:0},
  {name: "viana", age:20, gender:"woman", Score: 20,diplom:2},
    {name: "maha", age:17, gender:"woman", Score: 20,diplom:0},
      {name: "baran", age:20, gender:"woman", Score: 20,diplom:1},
];
let manstringcode20=0;
let ageunder17=0;
let percentstringcode20=0;

for(let i =0; i < people.length; i++){
  const person = people[i];

  if (person.gender === "man" &&person.stringcode === 20) {
    manstringcode20++;

  }
  if ( person.age<17) {
    ageunder17++;
  }
}
percentstringcode20= (manstringcode20 / people.length)*100;

console.log(manstringcode20);
console.log(ageunder17);
console.log(percentstringcode20);
