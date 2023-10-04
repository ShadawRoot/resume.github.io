/* eslint-disable */

import React from 'react';
import {TypeAnimation} from 'react-type-animation';

const TextAnimation = () => {
    return (

        <TypeAnimation
            sequence={[
                "I'm a Full Stack Infra Enginner.",
                2000,
                "That's not all.",
                1000,
                'I can Work in Linux, Windows, Vmware systems.',
                3000,
                'Of course Network,and Security are my favorite domain too.',
                3000,

                () => {
                    console.log('Done typing!');
                }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            omitDeletionAnimation={false}
            className={"before:content-['React/Resume-Website/']"}

            //   style={{ fontSize: '15px' }}
        />



    );
};


export default TextAnimation;
