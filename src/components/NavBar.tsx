import React, { useState } from 'react'
import { NavBarType } from '../types/navBarTypes'
import { IoMoonOutline } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

function NavBar(props: NavBarType) {

  return (
    <nav className='flex justify-between items-center mx-auto p-10'>
        <div>
            { !props.mode && <IoMoonOutline onClick={props.changeTheme} size={30} /> }
            { props.mode && <WiDaySunny onClick={props.changeTheme} size={30} className='text-gray-100' /> }
        </div>

        <div className='' >
            <ul className='flex items-center gap-10' >
                <li className={props.mode ? 'text-gray-100' : 'text-slate-950'} >whoami</li>
                <li className={props.mode ? 'text-gray-100' : 'text-slate-950'} >projects</li> 
                <li className={props.mode ? 'text-gray-100' : 'text-slate-950'} >contact me</li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <FaXTwitter className={props.mode ? 'text-gray-100' : 'text-slate-950'} size={30} />
            <CiLinkedin className={props.mode ? 'text-gray-100' : 'text-slate-950'} size={30} />
            <CiInstagram className={props.mode ? 'text-gray-100' : 'text-slate-950'} size={30} />     
        </div>
        
    </nav>
  )
}

export default NavBar
