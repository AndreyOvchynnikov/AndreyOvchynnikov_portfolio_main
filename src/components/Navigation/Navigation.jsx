import s from './Navigation.module.css';
 
const Navigation = () => {
    return (
        <nav className={s.nav}>
            <h3 className={s.logo}>Andrey.dev</h3>
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
            </ul>
        </nav>
    )
}

export default Navigation;