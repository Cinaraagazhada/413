// // onst students = [
// //     { name: "Leyla", points: 500 },
// //     { name: "Akif", points: 500 },
// //     { name: "Fikret", points: 3000 },
// //     { name: "Rashad", points: 500 },
// //     { name: "Turkan", points: 1900 },
// //     { name: "Sabir", points: 1000 },
// //     { name: "Idris", points: 340 },
// //     { name: "Nijat", points: 940 },
// //     { name: "Ismet", points: 1780 },
// //   ];
  
// //   her telebenin pointini 30 bal artirin
// const student1={
//     Name: "Leyla",
//     Points:500,
// };
// const student2={
//     Name: "Akif",
//     Points:500,
// };
// const student3={
//     Name: "Fikret",
//     Points:3000,
// };
// const student4={
//     Name: "Rashad",
//     Points:600,
// };
// const student5={
//     Name: "Turkaan",
//     Points:1000,
// };
// const student6={
//     Name: "Sabir",
//     Points:1000,
// };
// const student7={
//     Name: "Idris",
//     Points:300,
// };
// const student8={
//     Name: "Nijat",
//     Points:940,
// };
// const student9={
//     Name: "Ismet",
//     Points:1700,
// };
// const students=[student1,student2,student3,student4,student5,student6,student7,student8,student9];
// students.map((student)=>{
//     return student.Points+=30
// })
// console.log(students);

// // let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// // - isharesini / ile deyishin
// // output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];

// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// let bday=bdays.map((value)=>value.replace("-","/"))
// console.log(bday);




// let data = [
//     {name: 'daniel', age: 45},
//     {name: 'john', age: 34},
//     {name: 'robert', age: null},
//     {name: 'jen', age: undefined},
//     {name: null, age: undefined}
// ];
// ////element -in deyeri null ve undefined olmayanlari qaytar
// let newData=data.filter((value)=>value.name!==null&&value.age!==undefined&&value.age!==null)
// console.log(newData);


// // Verilmish stringdeki ededleri cemleyin --> reduce 
// const b = "5,4,3,2,1"
// const b2=b.split(",").map((value)=>parseInt(value));
// console.log(b2);
// function sum (sum1,sum2){
//     return sum1+sum2
// }
// console.log(b2.reduce(sum,0));



 let numbers = [1.5, 2.56, 5.1, 12.33];
//// butun regemlerini yuvarlaqlashdirin
let newnum=numbers.map((value)=>Math.round(value))
console.log(newnum);