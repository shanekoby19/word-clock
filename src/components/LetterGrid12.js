export default (now) => {
    // const lettersGrid12 = [

    //     '', 'I', 'T', '-', "I", 'S', '-', '-', '-', 'A', 'T', 'E', 'N', '',
    //     '', 'F', 'I', 'V', 'E', '-', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', '', 
    //     '', 'T', 'W', 'E', 'N', 'T', 'Y', 'H', 'A', 'L', 'F', '-', '-', '',
    //     '', 'M', 'I', 'N', 'U', 'T', 'E', 'S', '-', 'P', 'A', 'S', 'T', '',
    //     '', 'T', 'O', '-', 'O', 'N', 'E', 'T', 'W', 'O', '-', '-', '-', '',
    //     '', 'T', 'H', 'R', 'E', 'E', 'F', 'O', 'U', 'R', '-', '-', '-', '',
    //     '', 'F', 'I', 'V', 'E', 'S', 'I', 'X', 'S', 'E', 'V', 'E', 'N', '',
    //     '', 'E', 'I', 'G', 'H', 'T', 'N', 'I', 'N', 'E', 'T', 'E', 'N', '',
    //     '', 'E', 'L', 'E', 'V', 'E', 'N', 'T', 'W', 'E', 'L', 'V', 'E', '',
    //     '', '-', '-', '-', 'O', "'", 'C', 'L', 'O', 'C', 'K', '-', '-', '',

    // ];

    let activeIndexes = [1, 2, 4, 5, 130, 131, 132, 133, 134, 135, 136];
    const minute = now.getMinutes(); // Get the current minute.

    // PAST OR TO
    if(minute >= 5 && minute <= 60) {
        if(minute < 40) {
            activeIndexes.push(51, 52, 53, 54);
        }
        else {
            activeIndexes.push(57, 58);
            now.setHours(now.getHours() + 1);
        } 
    }

    const hour =  now.getHours() % 12; // Get the current hour from military to standard.

    // 5 PAST OR 5 TO
    if(minute >= 5 && minute < 10 || (minute >= 55 && minute < 60)) {
        activeIndexes.push(15, 16, 17, 18);
        activeIndexes.push(43, 44, 45, 46, 47, 48, 49); // MINUTES
    }
    // 10 PAST OR TEN TO
    else if(minute >= 10 && minute < 15 || (minute >= 50 && minute < 55)) {
        activeIndexes.push(10, 11, 12);
        activeIndexes.push(43, 44, 45, 46, 47, 48, 49); // MINUTES
    }
    // A QUARTER PAST OR A QUARTER TO
    else if((minute >= 15 && minute < 20) || (minute >= 45 && minute < 50)) {
        activeIndexes.push(9, 20, 21, 22, 23, 24, 25, 26);
    }
    // TWENTY PAST OR TWENTY TO
    else if((minute >= 20 && minute < 30) || (minute >= 40 && minute < 45)) {
        activeIndexes.push(29, 30, 31, 32, 33, 34);
        activeIndexes.push(43, 44, 45, 46, 47, 48, 49); // MINUTES
    }
    // HALF PAST
    else if(minute >= 30 && minute < 40) {
        activeIndexes.push(35, 36, 37, 38);
    }

    switch(hour) {
        case 1:
            // ONE O'CLOCK
            activeIndexes.push(60, 61, 62);
            break;
        case 2:
            // TWO O'CLOCK
            activeIndexes.push(63, 64, 65);
            break;
        case 3:
            // THREE O'CLOCK
            activeIndexes.push(71, 72, 73, 74, 75);
            break;
        case 4:
            // FOUR O'CLOCK
            activeIndexes.push(76, 77, 78, 79);
            break;
        case 5:
            // FIVE O'CLOCK
            activeIndexes.push(85, 86, 87, 88);
            break;
        case 6:
            // SIX O'CLOCK
            activeIndexes.push(89, 90, 91);
            break;
        case 7:
            // SEVEN O'CLOCK
            activeIndexes.push(92, 93, 94, 95, 96);
            break;
        case 8:
            // EIGHT O'CLOCK
            activeIndexes.push(99, 100, 101, 102, 103);
            break;
        case 9:
            // NINE O'CLOCK
            activeIndexes.push(104, 105, 106, 107);
            break;
        case 10:
            // TEN O'CLOCK
            activeIndexes.push(108, 109, 110);
            break;
        case 11:
            // ELEVEN O'CLOCK
            activeIndexes.push(113, 114, 115, 116, 117, 118);
            break;
        case 0:
            // NOON-MIDNIGHT O'CLOCK
            activeIndexes.push(119, 120, 121, 122, 123, 124);
            break;
    }

    return activeIndexes;
}
