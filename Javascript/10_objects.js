const mySym = Symbol("key1")

const JsUser ={
    name:"Rit",
    "full name" : "Rit Roy",
    mySym: "mykey1",
    age:18,
    location:"Jaipur",
    email:"rit@google.com",
    isLoggedIn : false ,
    lastLoginDays:["Monday","Saturday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser.mySym)
//console.log(typeof JsUser.mySym)

JsUser.email = "rit@apple.com"
Object.freeze(JsUser)
JsUser.email = "rit@chatgpt.com" 
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

//console.log(JsUser.greeting );

//const tinderUser = new Object()  Singleton
const tinderUser = {}
 tinderUser.id = "123"
 tinderUser.name = "Samay"
 tinderUser.isLoggedIn = false

 //console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Riya",
            lastname: "Monadal"
        }
    }
 }

 console.log(regularUser.fullname.userfullname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3:"a",4:"b"}

 //const obj3 ={obj1,obj2}
 //const obj3 = Object.assign({},obj1,obj2)
 const obj3 = {...obj1,...obj2}
 //console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));