import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("<h1>Welcome to Our Website ... </h1>")
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(3500)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                }}
            />
        </>
    );
};

export default TypeWriter;