//to use the features in 'date' an instance should be created
//date type is 'object'
// the months and days count starts from 0
const date = new Date()

//console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
//console.log(`Date is ${date.getDay() + 1}`);  //to make it readable 
//console.log(date.getMonth());  
// console.log(typeof date);


//let createDate = new Date(2024, 2, 23)  //the formate of mentioning the date should be y,m,d  
//let createDate = new Date(2024, 2, 23, 6, 6) //hr,mins can be defined
//let createDate = new Date("2024-03-23")  //in the quotes the month count begins from 1 and the formate should be yyyy-mm-dd 
//let createDate = new Date("03-23-2024")  //formate can also be mm-dd-yyyy
//console.log(createDate.toLocaleString());


let timeStamp = Date.now()
//console.log(timeStamp);   //gives time in milliseconds
//console.log(createDate.getTime());  //time at that date
//console.log(Math.floor(Date.now()/1000));


/* console.log(date.toLocaleString('fr-France', {
    weekday: "long",
    month: "short"
})); */
