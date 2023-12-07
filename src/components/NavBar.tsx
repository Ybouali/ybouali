import React, { useState } from 'react'
import { NavBarType } from '../types/navBarTypes'
import { IoMoonSharp } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";

function NavBar(props: NavBarType) {

    const [changeIcon, setChangeIcon] = useState(true)


    const handleChangeIcon = () => { 
        props.changeTheme();
        setChangeIcon(!changeIcon)
    }

  return (
    <>
    
        <div>
            { changeIcon && <IoMoonSharp onClick={handleChangeIcon} /> }
            { !changeIcon && <WiDaySunny onClick={handleChangeIcon} /> }
        </div>
        <div>
            <ul>
                <li>Whoami</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </div>
        <div>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    </>
  )
}

export default NavBar
