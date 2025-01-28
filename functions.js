/*
function add2Nums(num1, num2){
    console.log(num1 + num2);
}
add2Nums(3,3)       //6
add2Nums("3", 6)    //36
add2Nums(3, null)   //3
*/

function add2Nums(num1 /* = default values can be passed here*/, num2){
    return num1 + num2;
}
const add = add2Nums(3,9);
/* 
console.log("Result: " + add);
//any code after return statement will not work
/*we can't return a value using "console.log" and only returned values can be stored 
in a variable else it will show undefined. Just returning a value will not print it
*/

/*
console.log("adding nums: " + add2Nums());
*/
/*if no value is passed in the function then 'undefined' will be shown 
for String and 'NaN' for integers*/


/*function calcCartItems(...num){
    return num;
}
console.log(calcCartItems(100, 200, 300, 400));  //[100, 200, 300, 400]
//'...' in this context it is known as rest, with this we can include 'n' no.of values in the parameters

function calcCartItem(val1, val2, ...num){
    return num;
}
console.log(calcCartItem(100, 200, 300, 400));  //[300, 400]  
*/

//using function to reefer a object
/*
const user = {
    name: "Siri",
    id: 38
}

function handleObj(anotherUser){
    console.log(`${anotherUser.name} is logged in with id: ${anotherUser.id}`);
}
handleObj(user)
handleObj({
    name: "Seeta",
    id: 36
})  
 */


//printing an element from the array
/*
const myArr = [100, 200, 300, 400, 500, 600]
function numIndex(arr){
    return arr[2];
}
console.log(numIndex(myArr));
*/
 

//nested functions
function one(){
    const user = "Siri";

      function two(){
        const website = "abc.com"
        console.log(user)  /*"Siri" will be shown as 'one()' acts as a global var. for
         two() so it can access any field in the one()*/ 
      }

      //console.log(website); 
      /* it will show error as 'one()' can't access 'two()' as the 
      function is applicable only in that scope*/
      //two() //'Siri' will be shown as 'user' is defined in console.log and not the 'website'
}
console.log(one()); //'Undefined' becoz user is not returned

/* NOTE: If a function is declared, then we can access it even before the function syntax
but can't access a function declared in a var. before declaring the function
hence it will show an error --> This is called hoisting*/