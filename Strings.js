//if string is used then we can use different properties based on r requirements 

const name = new String("Siri Adusumalli")
/* console.log(name[2]);
console.log(name.__proto__);
console.log(name.substring(0, 6)); */
//console.log(name.substring(-8, 4));   //negative values are ignored and the count starts from zero
const newName = name.slice(-8, 4)
//console.log(newName);

const name1 = "    Siri    "
//console.log(name1.trim());    //extra spaces in the input are eliminated

const url = "https://www.iare.ac.in/sites/default/files/BT23/ACSD02.pdf"
// console.log(url.replace("i", "-"));
// console.log(url.includes("sites"));


const str = "The best is worth waiting"
//console.log(str.split(' '))
const words = str.split(" ")
//console.log(words[3]);
const chars = str.split('')
//console.log(chars[10]);


