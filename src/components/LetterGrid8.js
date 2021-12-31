export default (now) => {
    // const lettersGrid8 = [
    //     'I', 'T', '-', "I", 'S', 'T', 'E', 'N',
    //     'F', 'I', 'V', 'E', '-', '-', '-', 'A',
    //     'Q', 'U', 'A', 'R', 'T', 'E', 'R', '-',
    //     '-', 'T', 'W', 'E', 'N', 'T', 'Y', '-',
    //     '-', '-', 'H', 'A', 'L', 'F', '-', '-',
    //     'M', 'I', 'N', 'U', 'T', 'E', 'S', '-',
    //     'P', 'A', 'S', 'T', '-', '-', 'T', 'O',
    //     'O', 'N', 'E', 'T', 'H', 'R', 'E', 'E',
    //     'T', 'W', '0', '-', 'F', 'O', 'U', 'R',
    //     'F', 'I', 'V', 'E', '-', 'S', 'I', 'X',
    //     'S', 'E', 'V', 'E', 'N', '-', '-', '-',
    //     'E', 'I', 'G', 'T', 'H', 'T', 'E', 'N',
    //     '-', '-', 'N', 'I', 'N', 'E', '-', '-',
    //     '-', 'E', 'L', 'E', 'V', 'E', 'N', '-',
    //     '-', 'T', 'W', 'E', 'L', 'V', 'E', '-',
    //     'O', "'", 'C', 'L', 'O', 'C', 'K', '-',
    // ]

    let activeIndexes = [0, 1, 3, 4, 120, 121, 122, 123, 124, 125, 126]; // IT IS O'CLOCK
    const minute = now.getMinutes(); // Get the current minute.

    // PAST OR TO
    if(minute >= 5 && minute <= 60) {
        if(minute < 40) {
            activeIndexes.push(48, 49, 50, 51);
        }
        else {
            activeIndexes.push(54, 55);
            now.setHours(now.getHours() + 1);
        } 
    }

    const hour =  now.getHours() % 12; // Get the current hour from military to standard.

    // 5 PAST OR 5 TO
    if(minute >= 5 && minute < 10 || (minute >= 55 && minute < 60)) {
        activeIndexes.push(8, 9, 10, 11);
        activeIndexes.push(40, 41, 42, 43, 44, 45, 46); // MINUTES
    }
    // 10 PAST OR TEN TO
    else if(minute >= 10 && minute < 15 || (minute >= 50 && minute < 55)) {
        activeIndexes.push(5, 6, 7);
        activeIndexes.push(40, 41, 42, 43, 44, 45, 46); // MINUTES
    }
    // A QUARTER PAST OR A QUARTER TO
    else if((minute >= 15 && minute < 20) || (minute >= 45 && minute < 50)) {
        activeIndexes.push(15, 16, 17, 18, 19, 20, 21, 22);
    }
    // TWENTY PAST OR TWENTY TO
    else if((minute >= 20 && minute < 30) || (minute >= 40 && minute < 45)) {
        activeIndexes.push(25, 26, 27, 28, 29, 30);
        activeIndexes.push(40, 41, 42, 43, 44, 45, 46); // MINUTES
    }
    // HALF PAST
    else if(minute >= 30 && minute < 40) {
        activeIndexes.push(34, 35, 36, 37);
    }

    switch(hour) {
        case 1:
            // ONE O'CLOCK
            activeIndexes.push(56, 57, 58);
            break;
        case 2:
            // TWO O'CLOCK
            activeIndexes.push(64, 65, 66);
            break;
        case 3:
            // THREE O'CLOCK
            activeIndexes.push(59, 60, 61, 62, 63);
            break;
        case 4:
            // FOUR O'CLOCK
            activeIndexes.push(68, 69, 70, 71);
            break;
        case 5:
            // FIVE O'CLOCK
            activeIndexes.push(72, 73, 74, 75);
            break;
        case 6:
            // SIX O'CLOCK
            activeIndexes.push(77, 78, 79);
            break;
        case 7:
            // SEVEN O'CLOCK
            activeIndexes.push(80, 81, 82, 83, 84);
            break;
        case 8:
            // EIGHT O'CLOCK
            activeIndexes.push(88, 89, 90, 91, 92);
            break;
        case 9:
            // NINE O'CLOCK
            activeIndexes.push(98, 99, 100, 101);
            break;
        case 10:
            // TEN O'CLOCK
            activeIndexes.push(93, 94, 95);
            break;
        case 11:
            // ELEVEN O'CLOCK
            activeIndexes.push(105, 106, 107, 108, 109, 110);
            break;
        case 0:
            // NOON-MIDNIGHT O'CLOCK
            activeIndexes.push(113, 114, 115, 116, 117, 118);
            break;
    }

    return activeIndexes;
}