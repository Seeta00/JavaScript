//for in loop --> works for both arrays and objects
/* the only diff is that in arrays the idx value is set as nums but 
in an obj, the user can define the keys */
//loop for obj
let obj = {
    js: "JavaScript",
    swift: "Swift by Apple",
    rb: "Ruby"
}

/* for (const i in obj) {
    //console.log(i)   // idx value is set by the user
    console.log(`${i} shortcut is for ${obj[i]}`);   
} */

//loop for array
let arr = ["Js", "Rb", "Swift", "Ruby"]
/* for(const i in arr){
    //console.log(i);   //the vakue stroed in 'i' is by default numbers statring from 0
    console.log(arr[i]);
} */


//  forEach (using above array - (arr))
/* arr.forEach(function (list){    //list is the var name being assigned to arr keys
    console.log(list);
}) */

//using arrow function
/* arr.forEach((list) => {
    console.log(list);
}) */

//by declaring the function
 /* function printList (list){
    console.log(list);
 }

 arr.forEach(printList);  //"()" are not used for the function name coz we are reffering 
                    */   // to the function not executing it. It is just a call back function 

/* arr.forEach(function (x, y,arr){
    console.log(x, y, arr);     //x - keys, y - index & arr
    
}) */

//using forEach in multiple objects

let myObj = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "Java"
    },
    {
        langName: "Python",
        langFile: "py"
    }
]

myObj.forEach(function (list){
    console.log(list.langFile);     //to access specific element in the object
    
})