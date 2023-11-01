import Container from 'components/Container';
import s from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={s.section}>
            <Container>
                <div className={s.content}>
                    <div className={s.title}>
                        <p>contact</p>
                        <h3>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <ul className={s.icons}>
                        <li className={s.iconBox}>
                            <span>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                                    <path d="M9 4v13"></path><path d="M15 7v5"></path>
                                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M20.2 20.2l1.8 1.8"></path>
                                </svg>
                            </span>
                            <div className={s.info}>
                                <h3>Location</h3>
                                <p>Kyiv, Ukraine</p>
                            </div>
                        </li>
                        <li className={s.iconBox}>
                            <span>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                    <path d="M3 7l9 6l9 -6"></path>
                                </svg>
                            </span>
                            <div className={s.info}>
                                <h3>Mail</h3>
                                <a href="mailto:andrey272015@gmail.com">andrey272015@gmail.com</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
                
            
        </section>
    )
}

export default Contact
