//let nums = [67,52,39];
//let calcSquare =(num)=>{
 //   console.log(num*num);
//};

//nums.forEach(calcSquare);
function fucnscope(){
    if(true){
        var age=56;
        console.log("The age 1 is",age);
    
    }
    console.log("The age 2 is",age);
}
fucnscope()