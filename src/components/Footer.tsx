import React from 'react'
import { ThemeType } from '../types/navBarTypes'

function Footer(props: ThemeType) {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className='flex items-center justify-center mx-auto' >
      <p className={props.mode ? 'font-semibold text-xl text-gray-100 duration-700' : 'font-semibold text-xl text-slate-950 duration-700'}>
        © {currentYear} Yassine Bouali | All Rights Reserved | Made In Morrocco
      </p>
    </div>
  )
}

export default Footer
