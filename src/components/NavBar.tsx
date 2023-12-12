import React, { useState } from 'react';
import { ThemeType } from '../types/navBarTypes';
import { IoMoonOutline } from 'react-icons/io5';
import { WiDaySunny } from 'react-icons/wi';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const NavLinks = (props: ThemeType) => {


    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/ybouali/', '_blank');
    }

    const openInstagram = () => {
        window.open('https://www.instagram.com/yassine_bouali_ya', '_blank');
    }
    
    const openTwitter = () => {
        window.open('https://twitter.com/YassineBouali6', '_blank');
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <ul className="flex justify-between items-center gap-10 flex-col md:flex-row ">
                    <li
                        className={
                            props.mode
                                ? 'text-gray-100 hover:line-through duration-700'
                                : 'text-slate-950 hover:line-through duration-700'
                        }
                    >
                        <Link to="/"> Whoami </Link>
                    </li>
                    <li
                        className={
                            props.mode
                                ? 'text-gray-100 hover:line-through duration-700'
                                : 'text-slate-950 hover:line-through duration-700'
                        }
                    >
                        <Link to="/projects"> Projects </Link>
                    </li>
                    <li
                        className={
                            props.mode
                                ? 'text-gray-100 hover:line-through duration-700'
                                : 'text-slate-950 hover:line-through duration-700'
                        }
                    >
                        <Link to="/contactme"> Contact Me </Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-4 mt-9 md:-mt-0">
                
                <CiLinkedin
                    onClick={openLinkedin}
                    className={
                        props.mode
                            ? 'text-gray-100 hover:rotate-12 duration-700'
                            : 'text-slate-950 hover:rotate-12 duration-700'
                    }
                    size={30}
                />
                <CiInstagram
                    onClick={openInstagram}
                    className={
                        props.mode
                            ? 'text-gray-100 hover:rotate-12 duration-700'
                            : 'text-slate-950 hover:rotate-12 duration-700'
                    }
                    size={30}
                />
                <FaXTwitter
                    onClick={openTwitter}
                    className={
                        props.mode
                            ? 'text-gray-100 hover:rotate-12 duration-700'
                            : 'text-slate-950 hover:rotate-12 duration-700'
                    }
                    size={30}
                />

            </div>
        </>
    );
};

function NavBar(props: ThemeType) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center sticky top-0 mx-auto p-10 flex-wrap z-[20]">
            <div>
                {!props.mode && (
                    <IoMoonOutline
                        onClick={props.changeTheme}
                        size={30}
                        className="animate-bounce"
                    />
                )}
                {props.mode && (
                    <WiDaySunny
                        onClick={props.changeTheme}
                        size={30}
                        className="text-gray-100 animate-bounce"
                    />
                )}
            </div>

            <div className="hidden md:flex justify-between items-center w-3/5">
                <NavLinks mode={props.mode} changeTheme={props.changeTheme} />
            </div>

            {isOpen ? (
                <RxHamburgerMenu
                    onClick={handleClick}
                    size={30}
                    className={
                        props.mode
                            ? 'md:hidden text-gray-100'
                            : 'md:hidden text-slate-950'
                    }
                />
            ) : (
                <AiOutlineClose
                    onClick={handleClick}
                    size={30}
                    className={
                        props.mode
                            ? 'md:hidden text-gray-100'
                            : 'md:hidden text-slate-950'
                    }
                />
            )}

            {!isOpen && (
                <div className="flex basis-full flex-col items-center ">
                    <NavLinks
                        mode={props.mode}
                        changeTheme={props.changeTheme}
                    />
                </div>
            )}
        </nav>
    );
}

export default NavBar;
