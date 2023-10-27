// task20
// function sadeMurkkeb(number) {
//   let power = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return "murekkeb";
//     }
//   }
//   if (power) {
//     return "sade";
//   }
// }
// console.log(sadeMurkkeb(13));

// task21;
// const arr = [1, 2, 3, 2, 6, 6, 6, 26]
// function sadeNum(arr) {
//   let check = true;
//   const arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     check = true;
//     for (let j = 2; j < arr[i]; j++) {
//       if (arr[i] % j === 0) {
//         check = false;
//       }
//     }
//     if (check) {
//       arr1.push(arr[i])
//     }
//   }
//   return arr1;
// }
// console.log(sadeNum(arr));

// task22
// function polidrome(number) {
//     number = number.toString()
//     for (let i = 0; i < number.length / 2; i++) {
//         if (number[i] !== number[number.length - 1 - i]) {
//             return "Not polidrome"
//         }
//     }
//     return 'Polidrome'
// }
// console.log(polidrome(1214521));

// task24
// function perfectNum(number) {
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (number % i === 0) {
//       sum += i;
//     }
//   }
//   if (number===sum) {
//     return "mukemmel"
//   }
//   return "not mukemmel"
// }
// console.log(perfectNum(6));

// task25
// function powerNum(number,power) {
//     let pownumber=number**power
//     return pownumber
// }
// console.log(powerNum(2,3));
//2-ci usul
// function powerNum(number,power) {
//     let num=1
//     for (let i = 0; i < power; i++) {
//         num=num*number
//     }
//     return num
// }
// console.log(powerNum(5,2));


