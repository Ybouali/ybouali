import React from 'react';
import SayHi from '../components/SayHi';
import { TypeAnimation } from 'react-type-animation'
import { ThemeType } from '../types/navBarTypes';
import AnimatedText from '../components/AnimatedText';

function Whoiam(props: ThemeType) {

    return (
        <div className='flex items-center justify-center min-h-screen mx-5 -mt-36 md:mx-20 flex-col' >
            <div className='flex items-center justify-between gap-6 p-3' >
                <div className='flex items-center justify-between font-bold text-3xl' >
                    <h1 className={props.mode ? 'fornt-bold text-5xl text-gray-100' : 'fornt-bold text-5xl text-slate-950' }>
                        <TypeAnimation
                            sequence={[
                                'مرحبًا',
                                1000, 
                                'ⴰⵣⵓⵍ',
                                1000,
                                'YO',
                                1000,
                                'SALUT',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                </div>
                <div className='flex items-center' >
                    <SayHi />
                </div>
            </div>
            <div className='flex items-center justify-between md:w-1/2 p-1 m-6'> 
                <p className={props.mode ? 'animate-pulse font-semibold text-gray-100' : 'animate-pulse font-semibold text-slate-950'}>
                    A self-taught web developer, crafting digital wonders basis with code. Building dreams one pixel at a time, all while chasing the elusive bug that dared to challenge my brilliance.
                </p>
            </div>
            <div className='flex items-center justify-between mx-auto md:w-1/2 flex-col gap-y-3' >
                <h1 className={props.mode ? 'font-bold text-xl text-gray-100' : 'font-bold text-xl text-slate-950'}>
                    In other words
                </h1>
                <AnimatedText text="Put me on the chaos. I'll found the solution 😣 ." mode={props.mode} />
            </div>
        </div>
    );
}

export default Whoiam;
