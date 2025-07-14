console.log("function in javasript");


// How to create function

function display(){
console.log("I am display function");

}
display();

function add(){
    let a=10
    let b=20
    console.log(`the addition of ${a} and ${b} is ${a+b}`);
    
}
add()


//function with parameter to get diffrent output no need to write let or var
function add(a,b){
    
    console.log(`the addition of ${a} and ${b} is ${a+b}`);
    
}
add(10,20)
add(100,200)


// function with return
function mutiply(a,b){
    return a*b
}
let multi=mutiply(10,3)
console.log(multi);


// 1.named function
function num(a,b){
    console.log("Before swapping");
   console.log(`num1 value is:${a}`);
   console.log(`num2 value is:${b}`);
    
   let temp=a;
   a=b;
   b=temp;
   console.log("After swapping");
   console.log(`num1 value is:${a}`);
   console.log(`num2 value is:${b}`);

   }
num(10,5)
// 2.Annonymous function
//any function does not any name is called as annonymous function


// 3.function with expression
let hello=function(){
    console.log("hello");
    
}
hello()
let oddeven=function(a){
    if(a%2==0)
        console.log(`${a} is even number`);
      else
      console.log(`${a} is odd number`);
    
    
}
oddeven(10)

// 4.Arrow function ------no need to function keyword give an arrow
let sub= (a,b)=>
{
    return a-b
}
let res2=sub(50,10)

console.log(res2);
let  sup=(a,b)=>
{
    let fact=1;
  for(let i=1;i<=b;i++){
    fact=a*fact;
    
  }
  return fact;
}
let res1=sup(2,5)
console.log(res1);
let calculate=(q,p)=>q*p
let calculate1=(2,40)
console.log(calculate1);




// 5.Nested function --------one function inside another function
let outer = ()=>{
   console.log("I am outer function");
   let inner =()=>{
    console.log("I am inner function");
    
    
   }
   inner()
   
}
outer()


// 6.Lexical scopping
// in nested  function  ,inner function can acccesss all the properties of the outer function but the outer function cant access the inner function.it is called lexical scopping.
let parent=()=>{
    let a=10
    let child=()=>{
        let b=20
        console.log(`the value of a is ${a}`);
        console.log(`the value of b is ${b}`);

        
    }
    //in the outer we cant access the b value
   child()
    
    
}
parent()

// 7.HigherOrderFuction  
//any function that takes another function as oarameter is called higher order function.
//the function is sent to the higher order function as parameter is called callback function.
let hi=()=>{
    console.log("I am hi function");
    
}
let hello1=(b)=>{
    console.log("I am hello function");
    b()
    

}
hello1(hi)      //----> it is a callback statement
hello1(()=>{
    console.log("I am hi 1function");
    
});

//7.IIFE    ----Immediate invoke function expression
//it is one time usable method
(
    function(){
        console.log("Hello how are you");
        
    }
)();
(
function(a,b){
    console.log(a+b);
    
})(10,20)


    

