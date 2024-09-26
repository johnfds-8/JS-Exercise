//! Find all students that have scored greater than or equl to 90 marks in science.

// const marks = [
//   { id: "S9910", science: 99 },
//   { id: "S8810", science: 92 },
//   { id: "S7710", science: 89 },
// ];

// const studentsAbove90 = [];

// for (let i = 0;i < marks.length;i++){
//   if(marks[i].science >= 90){
//     studentsAbove90.push(marks[i]);
//   }
// }

// console.log(studentsAbove90);

//! Find the maximum marks strored in science;

// const marks = [
//   { id: "S9910", science: 99 },
//   { id: "S8810", science: 92 },
//   { id: "S7710", science: 89 },
// ];

// let maxMarks = 0;

// for (let i = 0; i < marks.length; i++) {
//   if (marks[i].science > maxMarks) {
//     maxMarks = marks[i].science;
//   }
// }
// console.log("Maximum marks:",maxMarks);

//! Remove 2 elements starting at index 1 and adds 6,7

//* splice() Methode

// let arr1 = [1, 2, 3, 4, 5];
// let removed = arr1.splice(1, 2, 6, 7);

// console.log(arr1);
// console.log(removed);

//* toSpliced() Methode
// let arr2 = [1, 2, 3, 4, 5];
// let newArr = arr2.toSpliced(1,2,6,7);

// console.log(arr2);
// console.log(newArr);

//* FindLast()

//! find the last array

// const numbers = [4, 5, 6, 9, 7, 8, 1, 6, 9, 5, 7, 0];
// let lastNumber = numbers.findLast((x) => x > 5);

// console.log(lastNumber);

//*findLastIndex()

// const numbers = [4, 5, 6, 9, 7, 8, 1, 6, 9, 5, 7, 0];
// let lastNumber = numbers.findLastIndex((x) => x > 7)
// console.log(lastNumber);

//* toReversed()
//! its reverse the arrys without modifying the original one

// const numbers = [4, 5, 6, 9, 7, 8, 1, 6, 9, 5, 7, 0];
// let reverse = numbers.toReversed();

// console.log(numbers);
// console.log(reverse);

//* toSorted()
//! its sorted the arrys without modifying the original one

//  const numbers = [4, 5, 6, 9, 7, 8, 1, 6, 9, 5, 7, 0];

//  let sorted = numbers.toSorted();

//  console.log(numbers);
//  console.log(sorted);

//*toSpliced

//  const numbers = [4, 5, 6, 9, 7, 8, 1, 6, 9, 5, 7, 0];

//  let splice = numbers.toSpliced(0,10);

//  console.log(numbers);
//  console.log(splice);

//* with();
// const numbers = [4, 5, 6, 9, 7, 8, 1, 6, 9, 5, 7, 0];

// let ex = numbers.with(2,"ABC")

// console.log(numbers);
// console.log(ex);

//
// //! LOOPS
// //* for loops => repeat some code a LIMTED amount of times

// for (let i = 2; i <= 10 ; i+=1) {
//   console.log(i);
  
// }

//! REDUCE method
const numbers = [ 1,2,3,4,5]; 

const totallNum = numbers.reduce((acc , it) =>{
  return acc + it;
})

console.log(totallNum);
