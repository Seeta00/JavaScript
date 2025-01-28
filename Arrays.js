let arr = [1, 2, 3, 4, 5, 6]

//console.log(arr[2]);
// arr.push(7)    //adds num to the array
// arr.push(8)
//arr.pop()   // deletes the last element in the array
//arr.unshift(0)    //adds num in the starting of the array
//arr.shift()    //deletes a value from starting of the array and no input is given
//console.log(arr);  
// console.log(arr.includes(6));
// console.log(arr.indexOf(9));


const newArr = arr.join()   //joins all the arrays into strings 
// console.log(newArr);
// console.log(typeof(newArr));
// console.log(typeof arr);


 //slice and splice
 console.log("A ", arr);
 const arr1 = arr.slice(1, 3)
 console.log(arr1);

 console.log("B ", arr);
 const arr2 = arr.splice(1, 3)
 console.log(arr2);
 console.log(arr);  //a part of the array is removed and includes the end index too
 
 const myArr = [1,2,[3,4,[5,6,7]],8,9]
 const newMyarr = myArr.flat(Infinity)  //to concate the inner arrays as one.
                               //As parameter, we can define the depth of concatination
 console.log(newMyarr);


 console.log(Array.isArray(myArr)); //checks if the given field is an array or 
                                    //not and returns a boolean
 console.log(Array.from("Siri"));//converts any given input to array(for single elements only)
 console.log(Array.of("Siri", "Seeta", "abc")); //same as above but takes multiple elements


