import React from 'react'
import Lottie from 'lottie-react'
import SayHiLogo from '../assets/SayHiLogo.json'


function SayHi() {

    const animationData = {
        animationData: SayHiLogo,
    }


  return (
    <Lottie {...animationData} className='h-28 w-28' />
  )
}

export default SayHi
