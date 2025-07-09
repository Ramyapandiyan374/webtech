console.log("I am external javascript");

// how many ways we can declare variables??
// 1.let
// let myname
// myname=""
// let myname="Ramya";
let myname    //variable decleration

myname="virat"  //variable initialization
// redeclaration is not possible in let
let myage=22   //varaible decleration and initaialization
console.log(myname)
// 2.Var
// redeclaration is possible in let
var phno=9876543211
console.log(phno);
var city
city="chennai"
console.log(city);
// 3.Const
const adharno=8978656787889   //initailization and decleration done in the same line and separate line is not possble
console.log(adharno);



// datatypes
// we have two types
// 1.primitive
    // 1. number
    let eid=221
    let salary=1000000.50

    // type
//typeof oprerator is used to know the datatype of the varaibles
console.log(eid);
console.log(typeof eid);

// 2.String
  let empname="ramya"
  let empname2='Dora'
  let emp3=`Maha` 
  console.log(typeof empname);
  console.log(typeof empname2);
  console.log(typeof emp3);

// 3.boolean
let ismarried=false
let cathasfur=true
console.log(typeof ismarried);
console.log(typeof cathasfur);
console.log(cathasfur);

// 4.undefined ---->any varaible declared but not initaialized is called undefined
let empPhno
console.log(empPhno);
console.log(typeof empPhno);    //type of undefined is also undefined

// 5.null------>initialization but value is not given currently and initialization with null and type of null is object
let empsal=null
console.log(empsal);
 console.log(typeof empsal);    

// 6.bigint //give suffix n-->2n
let count=2n
console.log(count);
console.log(typeof count);



// Nom-primitive datatype
// 1.Array------>We can give both homogenous and hetrogenous and give square bracket and no size for it

let arr=[10,'san',true,undefined,[10,20]]
console.log(arr);

// 2.Function  ---->it is block of codes and give function keyword followed by function name

function display() {
  console.log("I am display function....");
  
}
display()


// 3.Object   ----->anything which is having existence in realworld  


let student={
  sname:"ramya",   //it should be key and value pairs and key cannot be duplicate  ---->this is one property and give comma
  age:22,                                                                          //---->this is another property
  location:"chennai"
}
console.log(student);
/*better comments*/
