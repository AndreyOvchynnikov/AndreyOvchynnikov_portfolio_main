import s from './MobileMenu.module.css';

const MobileMenu = ({isOpen, onClick}) => {
    return (
        <div className={isOpen? s.mobileOpen : s.mobileClose}>
            <button className={s.button} onClick={onClick}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
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