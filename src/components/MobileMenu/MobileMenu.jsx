import { IconX } from "@tabler/icons-react";
import s from './MobileMenu.module.css';

const MobileMenu = ({isOpen, onClick}) => {
    return (
        <div className={isOpen? s.mobileOpen : s.mobileClose}>
            <button className={s.button} onClick={onClick}>
                <IconX width={30} height={30}/>
            </button>
                <ul className={s.list}>
                    <li>
                        <a className={s.link} onClick={onClick} href="#home">Home</a>
                    </li>
                    <li>
                        <a className={s.link} onClick={onClick} href="#about">About</a>
                    </li>
                    <li>
                        <a className={s.link} onClick={onClick} href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className={s.link} onClick={onClick} href="#contact">Contact</a>
                    </li>
                </ul>
        </div>
    )
}

export default MobileMenu;