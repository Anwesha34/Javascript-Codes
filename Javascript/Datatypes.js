"use strict"; // treat ll JS code as newer version

//console.log(3+3); console.log("Annu")

let name = "Anu" 
let age = 18 
let isLoggedIn = false 

//console.table([name,age,isLoggedIn])
//console.log(typeof "Anu")
//console.log(typeof null)


const id  = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//  *******Datatypes : Primitives(String , symbol, boolean , null,undefined,Bigint , number) and Non primitives(Arrays , objects , Functions,)***** //

let heros = ["SPIDERMAN", "BHIM"];

let myObj = {
    name : "anu",
    age : 18 ,

}

const myfunction  = function(){
    console.log("Hello world");

}

console.log(typeof heros);

// Link : https://262.ecma-international.org/5.1/#sec-11.4.3