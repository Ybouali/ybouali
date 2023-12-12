import React from 'react'
import Lottie from 'lottie-react'
import SayHiLogo from '../assets/SayHiLogo.json'


function SayHi() {

    const animationData = {
        animationData: SayHiLogo,
    }


  return (
    <Lottie {...animationData} className='animate-bounce h-32 w-32' />
  )
}

export default SayHi
