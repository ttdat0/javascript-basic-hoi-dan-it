console.log('first')
//------------------------------------------------------------------
//16 while/do while
// K có bước khởi tạo giá trị
// Dkiện thoả mãn mới chạy While


let arr=['Mec', 'Audi' ,'Ran','Hundai','Honda','Toyota']

let i = 0;
let flag = false;
while (!flag) {

    console.log('Top: ', i);
    i++;
    if (i === 7) flag = true;
}


//Lặp do - while, chạy 1 lần,


// do {
//     console.log('Top: ', i + 1, arr[i]);
//     i++;
// } while (i < 0);