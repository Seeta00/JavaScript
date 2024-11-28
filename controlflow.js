//control flow --> if, if-else, switch
//swith
month = 3;
/*switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid Input");
        break;
}  */

//berak keyword will stop the loop once the required value is found
//continue keyword will still continue for once even after the value is found
//break and continue is only used in for loop not in switch case

/*for(let i=1; i<=month; i++){
    if (i == 2){
    console.log("2 Month detected");
    //continue;   -->  done by default
    //break;
    }   
    console.log(`Month: ${i}`);
} */

/*truethy values:
     "0", 'false', " ", [], {}, function(){} */

/* falsy values:
     false, 0, -0, BigInt 0n, "", null, undefined, NaN  */

//to find if an object is empty:
const obj = {};

/*if(Object.keys(obj).length === 0){
    console.log("Object is empty");
    
}  */

//Nullish Coalescing operator(??):
//it considers a non null value from the given inputs
/*console.log(5 ?? 10);
console.log(null ?? 10);
console.log(undefined ?? 10);
console.log(null ?? 10 ?? 20);*/

//Ternary operator(?):  
//Syntax: condition ? true : false

//month == 3 ? console.log("True") : console.log("False")

//arrays:
let arr = ["Spiderman", "Thor", "Iron-man"]
/*for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
    
}  */

//while loop
/* let idx = 0;   //initialising
while(idx <= 10){    //condition
    console.log(`Value: ${idx}`);
    idx += 2           //incrimenting
} */

//do while loop

let score = 11;  //the code is implimented atleast once even if the condition is not met
/* do{
    console.log(`Score: ${score}`);
    score++ 
}while(score<=6) */

