import { useState } from 'react';
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
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 6l16 0"></path>
                                    <path d="M4 12l16 0"></path>
                                    <path d="M4 18l16 0"></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
            </nav>
            <MobileMenu isOpen={isOpen} onClick={handleClick} />
        </header>

    )
}

export default Header;