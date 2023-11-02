import { useState } from 'react';
import { IconMenu2 } from "@tabler/icons-react";
import MobileMenu from '../MobileMenu';
import s from './Header.module.css';
 
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={s.header}>
            <h3 className={s.logo}>Andrey.dev</h3>
                <nav>
                    <ul className={s.list}>
                        <li>
                            <a className={s.link} href="#home">Home</a>
                        </li>
                        <li>
                            <a className={s.link} href="#about">About</a>
                        </li>
                        <li>
                            <a className={s.link} href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className={s.link} href="#contact">Contact</a>
                        </li>
                        <li>
                            <button type="button" className={s.mobileMenubtn} onClick={handleClick}>
                                <IconMenu2 width={30} height={30} />
                            </button>
                        </li>
                    </ul>
            </nav>
            <MobileMenu isOpen={isOpen} onClick={handleClick} />
        </header>

    )
}

export default Header;