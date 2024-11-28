// for of loop  --> only works for arrays and strings not for objects
//loop for string
let greeting = "Hello World"
/* for(const greet of greeting){
    if(greet != " "){
    console.log(`Each char: ${greet}`)
    break;
}
} */

//loop for array
/* let arr = ["India", "Australia", "France"]
for (const i of arr) {
    console.log(i);
    
} */



//maps  --> not iteratable by forin loop
//values are unique in maps and also follow the given order
const find = new Map();
find.set("IN", "India")
find.set("AUS", "Australia")
find.set("FR", "France")
find.set("IN", "India")
//console.log(find)

/* for(let i of find){
    console.log(i);
} */

    /* for(let i in find){
    console.log(i);
} */    //no output

//for seperate key and value:

/* for (const [i,j] of find) {     //i=key & j=value
    console.log(i, ":-", j);
} */


