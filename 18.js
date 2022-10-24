console.log('Hello')

//------------------------------------------------------------------
//18
//Switch case
let day = '';
let a = 0;
switch (a) {    
    case 0:
    case 1:
        day = 'Monday';
        break;
        case 2:
        day = 'Tuesday';
        break;
        case 3:
        day = 'Wednesday';
        break;
        case 4:
        day = 'Thursday';
        break;
        case 5:
        day = 'Friday';
        break;
        case 6:
        day = 'Saturday';
        break;
        case 7:
        day = 'Sunday';
        break;
    default:        
        break;        
}
 console.log('check day: ', day, new Date().getDay())