import React from 'react';
import trumpImg from './media/Trump-2.png';
import Quote from './quote'
// import '/trump.css';
// import TrumpOne from './media/Trump-1.png';
// import TrumpTwo from './media/Trump-2.png';
// import TrumpThree from './media/Trump-3.png';
// import TrumpFour from './media/Trump-4.png';

export default function Trump() {
// CODE FOR RANDOM IMAGES GENERATOR STILL IN PROGRESS
//     const images = [
//         TrumpOne, TrumpTwo, TrumpThree, TrumpFour
//     ];

//     const RandomImage = Math.random(images);

//     return (
//         <img src={ require({ RandomImage }) } alt="Trump smiling" />
//     )
// }
    return (

        <div className="img-container">
            <Quote />
            <img className="trump-img" src={trumpImg} alt="Trump confidently pointing"/>
        </div>
    )
}