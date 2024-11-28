/* forEach can't be used when we just want to return or conditionally check the function
for such purpose we use filter operation. In this operation we can return the function */

const myNum = [1, 2,3 ,4 , 5, 6, 7, 8, 9]

/* const newNum = myNum.filter((num) => num>5)
console.log(newNum); */

//if the same is performed using scope
const newNum = myNum.filter((num) => {
    return num > 5;     //return keyword must be used when scope('{}') is used
})
//console.log(newNum);

//using forEach:
numNew = [];
myNum.forEach((num) => {
    if(num>5){
       numNew.push(num)
        
    }
});
//console.log(numNew);


 //same output using map
 const  newNum1 = myNum.map((num) => {return num+2})
 //console.log(newNum1);
 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter((bk) => {return bk.genre == 'Science'})
  //console.log(userbook);

//chaining of methods
const newNum2 = myNum
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num>51)
//console.log(newNum2);


// Reduce operation
const arr = [1, 2, 3]
const total = arr.reduce(function(acc, curval){
    return acc + curval;
}, 0)   //0 is initiating from whr the number starts
//console.log(total);

const cart = [
    {
        course: "JS",
        cost: 999
    },
    {
        course: "Python",
        cost: 699
    },
    {
        course: "Java",
        cost: 399
    }
]

const val = cart.reduce(function(acc, num){ return acc + num.cost},0)
console.log(val);
