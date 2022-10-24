console.log('Hello')


let arr=['Mec', 'Audi' ,'Ran','Hundai','Honda','Toyota']

let i = 0;
//arr.length, length = độ dài.
//i+1 = i, i in ra số
//

// while (i < arr.length) {
//     if (arr[i].length === 3) {
//       console.log('TOP :', i + 1, arr[i]);
//     }
//     else if (arr[i].length === 5) {
//         console.log('TOP :', i + 1, arr[i]);      
//     }
//     else{
//         console.log('TOP :', i + 1, arr[i]); 
//     }
//     i++;
// }


//break, đúng điều kiện => out, ngưng chạy dòng while
while (i < arr.length) {
    i++;
    if (arr[i] === 'Audi') {
        console.log('TOP: ',arr[i])
        break;
    }
    console.log('TOP: ',i)
}