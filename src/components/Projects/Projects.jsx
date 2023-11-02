import carRental from '../../images/car-rental-full.c58b37da333d73238fdd.webp';
import cryptoCoin from '../../images/cryptocoin-full.c5fef9ca2f47e52897f8.png';
import gymate from '../../images/gymate-home.52d00d03c15713c601c4.webp';
import ecommerse from '../../images/ecom.f10b3cdd799be85c19da.webp';
import Container from 'components/Container';
import s from './Projects.module.css';

const Projects = () => {
    return (
        <section id="projects" className={s.section}>
            <Container>
                <div className={s.content}>
                    <p>portfolio</p>
                    <h3>Each project is a unique piece of development 🧩</h3>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a target="_blank" href="#home" rel="noreferrer" className={s.projectLink}>
                                <img src={carRental} alt="website" className={s.project1} />
                            </a>
                            <div className={s.text}>
                                <h3>Car Rental <span className={s.date}>(2023)</span> 🚗</h3>
                                <p> A car rental website is an online platform that allows users
                                    to rent cars for personal or business use. The website provides
                                    an interface for searching, comparing, and reserving cars.
                                </p>
                                <ul className={s.stack}>
                                    <li>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>SCSS</p>
                                    </li>
                                </ul>
                                <ul className={s.links}>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Code
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                            <path d="M11 13l9 -9"></path>
                                            <path d="M15 4h5v5"></path>
                                        </svg>
                                        </a>
                                    </li>                                       
                                </ul>
                            </div>
                        </li>
                        <li className={s.reverseItem}>
                            <a target="_blank" href="#home" rel="noreferrer" className={s.projectLink}>
                                <img src={cryptoCoin} alt="website" className={s.project2}/>
                            </a>
                            <div className={s.text}>
                                <h3>Crypto Coin<span className={s.date}>(2023)</span>💰</h3>
                                <p> Crypto Coin is a crypto app that allows users to search
                                    for information about various cryptocurrencies
                                    in real-time.
                                </p>
                                <ul className={s.stack}>
                                    <li>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>SCSS</p>
                                    </li>
                                </ul>
                                <ul className={s.links}>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Code
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                            <path d="M11 13l9 -9"></path>
                                            <path d="M15 4h5v5"></path>
                                        </svg>
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </li>
                        <li className={s.item}>
                            <a target="_blank" href="#home" rel="noreferrer" className={s.projectLink}>
                                <img src={gymate} alt="website" className={s.project3}/>
                            </a>
                            <div className={s.text}>
                                <h3>Gymate <span className={s.date}>(2023)</span> 🏋️</h3>
                                <p> A gym website is a comprehensive resource for fitness information,
                                    class schedules, membership options, and tools to help users
                                    achieve their fitness goals.
                                </p>
                                <ul className={s.stack}>
                                    <li>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>Tailwind CSS</p>
                                    </li>
                                </ul>
                                <ul className={s.links}>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Code
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                            <path d="M11 13l9 -9"></path>
                                            <path d="M15 4h5v5"></path>
                                        </svg>
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </li>
                        <li className={s.reverseItem}>
                            <a target="_blank" href="#home" rel="noreferrer" className={s.projectLink}>
                                <img src={ecommerse} alt="website" className={s.project4}/>
                            </a>
                            <div className={s.text}>
                                <h3>Ecommerce <span className={s.date}>(2023)</span> 🛒</h3>
                                <p> With a focus on simplicity and clean design,
                                    this store prioritize user experience,
                                    making it easy for customers to find and purchase
                                    the products they need.
                                </p>
                                <ul className={s.stack}>
                                    <li>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>Vanilla CSS</p>
                                    </li>
                                </ul>
                                <ul className={s.links}>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Code
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                            <path d="M11 13l9 -9"></path>
                                            <path d="M15 4h5v5"></path>
                                        </svg>
                                        </a>
                                    </li> 
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container> 
        </section>
    )
}

export default Projects