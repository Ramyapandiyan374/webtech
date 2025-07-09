// how to declare string
let str1="first string"
let str2='second string'
let str3=`Third string`
  

console.log(str1);
console.log(str2);
console.log(str3);

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);


// how to know length of the string and this is the (propety)

console.log(str1.length);

// Methods
// 1.toUpperCase()     --->this method is used to convert any string into uppercase and return new string and it will not modify original string


let myname="Ramya"
let upper=myname.toUpperCase()   //return type string
console.log(upper);
console.log(myname);              //it will not modify the original string

// 2.toLowerCase()     --->this method is used to convert any string into lowercase and return new string and it will not modify original string



let address="CHENNAI"
console.log(address.toLowerCase());    //directly print or create a container and store it 

let lower=address.toLowerCase()
console.log(lower);
console.log(address);



// 3.index()   ------>it is used to give index number of the given  first character from the string 
            //------->  if the character is not present it will give -1

console.log(address.indexOf("H"));  //1
console.log(address.indexOf("h"));  //-1


// 4.lastindex()

console.log(address.lastIndexOf("N"));   //It will give last occrence index number of the given character of the string

// 4.CharAt()    ------>it will characters based on the index numbers

console.log(address.charAt(3));


//5.includes()      ----->It is used to know  whether string is present or not
                    //  ----->if it is present it will give true or not meant false

let msg="hello how are you"
console.log(msg.includes("hello"));
console.log(msg.includes("hello "));    //space is there so true
console.log(msg.includes("hello  "));   //no double space so there is false



