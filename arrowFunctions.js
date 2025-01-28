/* 'this' inside the node environment gives values but out the node environment
 will give an empty object  */

 function f1(){
    let user = "Seeta"
    console.log(this.user);
    return user
 }
 console.log(f1());


 //in arrow function 'this' can't be used but can be used in regular functions
 //Arrow function syntax:
 /*
 const add = (num1, num2) => {
    return num1 + num2;
 }
*/  //      (OR)

//const add = (num1, num2) => (num1 + num2)
console.log(add(3,3));
//'return' keyword is only used in scope('{}') and not required for paranthesis. 


(function chai(){
    console.log("Radhe Krishna");
}) ();
// '() ();' this syntax can be used to prevent global pollution and over writes. 
//it isreffered to as IIFE - Immediately Invoked Function Expression