import Container from 'components/Container';
import photo from '../../images/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg';
import hand from '../../images/waving.1bae5fcfb51082b5c2b4.png';
import s from './Hero.module.css';

const Hero = () => {
    return (
        <section id="home" className={s.hero}>
            <Container>
                <div className={s.content}>
                    <div className={s.main}>
                        <div className={s.textPart}>
                            <h1>Front-End React Developer</h1>
                            <img src={hand} alt="waving hand" />
                            <p> Hi, I'm Andrey Ovchynnikov.
                                A passionate Front-end React Developer based in Kyiv, Ukraine. 📍
                            </p>
                            <span>
                                <a aria-label="linkedin" rel="noreferrer" target="_blank" href="#home">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                        <path d="M8 11l0 5"></path>
                                        <path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/AndreyOvchynnikov">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <div className={s.imgPart} style={{backgroundImage: `url(${photo})`}}></div>
                    </div>
                    <div className={s.skills}>
                        <p>Tech Stack</p>
                        <div className={s.logos}>
                            <ul>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"/>
                                </li>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=js,react" alt="skill-icon"/>
                                </li>
                                <li>
                                    <img src="https://skillicons.dev/icons?i=redux,scss" alt="skill-icon"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>                
        </section>
    )
}

export default Hero;