import React, { useState, useEffect } from 'react';
import getLetterGrid12 from './LetterGrid12';
import getLetterGrid8 from './LetterGrid8';
import Letter from './Letter';

export default () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setNewTime(intervalID);
        }, (60 - now.getSeconds()) * 1000);
    }, [now])

    const setNewTime = (intervalId) => {
        clearInterval(intervalId);
        setNow(new Date());
    }

    const lettersGrid12 = [

        '', 'I', 'T', '-', "I", 'S', '-', '-', '-', 'A', 'T', 'E', 'N', '',
        '', 'F', 'I', 'V', 'E', '-', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', '', 
        '', 'T', 'W', 'E', 'N', 'T', 'Y', 'H', 'A', 'L', 'F', '-', '-', '',
        '', 'M', 'I', 'N', 'U', 'T', 'E', 'S', '-', 'P', 'A', 'S', 'T', '',
        '', 'T', 'O', '-', 'O', 'N', 'E', 'T', 'W', 'O', '-', '-', '-', '',
        '', 'T', 'H', 'R', 'E', 'E', 'F', 'O', 'U', 'R', '-', '-', '-', '',
        '', 'F', 'I', 'V', 'E', 'S', 'I', 'X', 'S', 'E', 'V', 'E', 'N', '',
        '', 'E', 'I', 'G', 'H', 'T', 'N', 'I', 'N', 'E', 'T', 'E', 'N', '',
        '', 'E', 'L', 'E', 'V', 'E', 'N', 'T', 'W', 'E', 'L', 'V', 'E', '',
        '', '-', '-', '-', 'O', "'", 'C', 'L', 'O', 'C', 'K', '-', '-', '',

    ];

    const lettersGrid8 = [

        'I', 'T', '-', "I", 'S', 'T', 'E', 'N',
        'F', 'I', 'V', 'E', '-', '-', '-', 'A',
        'Q', 'U', 'A', 'R', 'T', 'E', 'R', '-',
        '-', 'T', 'W', 'E', 'N', 'T', 'Y', '-',
        '-', '-', 'H', 'A', 'L', 'F', '-', '-',
        'M', 'I', 'N', 'U', 'T', 'E', 'S', '-',
        'P', 'A', 'S', 'T', '-', '-', 'T', 'O',
        'O', 'N', 'E', 'T', 'H', 'R', 'E', 'E',
        'T', 'W', 'O', '-', 'F', 'O', 'U', 'R',
        'F', 'I', 'V', 'E', '-', 'S', 'I', 'X',
        'S', 'E', 'V', 'E', 'N', '-', '-', '-',
        'E', 'I', 'G', 'T', 'H', 'T', 'E', 'N',
        '-', '-', 'N', 'I', 'N', 'E', '-', '-',
        '-', 'E', 'L', 'E', 'V', 'E', 'N', '-',
        '-', 'T', 'W', 'E', 'L', 'V', 'E', '-',
        'O', "'", 'C', 'L', 'O', 'C', 'K', '-',
        
    ]

    const letters = window.innerWidth >= 1200 ? lettersGrid12 : lettersGrid8;

    let activeIndexes = window.innerWidth >= 1200 ? getLetterGrid12(now) : getLetterGrid8(now);

    return (
        letters.map((letter, index) => {
            const classDescriptor = activeIndexes.includes(index) ? "letter letter--active" : "letter";

            return (
                <Letter 
                    classDescriptor={classDescriptor} 
                    letter={letter}
                    key={index}
                ></Letter>
            )
        })
    );
}