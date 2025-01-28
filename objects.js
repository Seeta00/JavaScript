//object literals 

    /*const mySym = Symbol("It is a symbol")

    const details = { // object elements(keys) are by default considered as string
                        //and they can store any data type value
        "name" : "Siri",
        [mySym] : "mykey",  //symbols must always be written in []
        last_name: "Adusumalli",
        email : "abc.gmail.com"
    }

    console.log(details.email)
    console.log(details["email"])
    //can access ojects in either ways ^-^
    console.log(details["name"])//can't access name element through the first method as it is written in "".

    console.log(details[mySym])

    details.email = "xyz@gmail.com"
    //Object.freeze(details);  //locks the object details
    details.name = "Seeta"
    console.log(details)

    details.greet = function(){
        console.log("Function added in the object");
    }
    console.log(details.greet());

    details.greeting = function(){
        console.log(`Hello ${this.name}`);
    }
    console.log(details.greeting());
    console.log(details);*/

//-----------------------------------------------------

//concatination of objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const newObj = Object.assign({}, obj1, obj2, obj3)
/*in 'assign', two parameters 'target' and 'source' are given whr the source elements 
are added to target. So '{}' is option but is better to be added as a target in 
which all the other source elements are added, else obj1 will be modified*/
console.log(newObj);

//alternate syntax for the same result as above 
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

//objects can be stored in array
const users = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "def"
    },
    {
        id: 3,
        name: "ghi"
    }
];
//users[1].name

const arr11 = {
        name : "Siri",
        last_name: "Adusumalli",
        email : "abc.gmail.com"
}
console.log(Object.keys(arr11));
console.log(Object.values(arr11));
console.log(Object.entries(arr11));
console.log(arr11.hasOwnProperty('name'));  //checks if it contains that property in the object

//---------------------------------------------------------------

//de-structure

const arr = {
    name : "Siri",
    last_name: "Adusumalli",
    email : "abc.gmail.com"
}
const {last_name:lname} = arr
console.log(lname);
/*instead of always mentioning 'arr' to reffer the elements of the obj. we can instead 
follow the above syntax  i.e(const {fieldName : any varName} = obj name)*/


