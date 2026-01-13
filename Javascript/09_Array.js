const myArr =[1,2,3,4,5]

//console.log(myArr[0]);

//myArr.push(6)
//console.log(myArr);

//myArr.unshift(5)
myArr.shift()

//console.log(myArr.includes)
//console.log(myArr)

const newArr= myArr.join(8)
//console.log(myArr);
//console.log(newArr)

const myn1 = myArr.slice(1,3)
console.log("myn1");
console.log("B",myArr);

const myn2 = myArr.splice(1,3)

//console.log("C",myArr);
//console.log(myn2);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));