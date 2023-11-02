import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
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
                            <a href="#home" rel="noreferrer" className={s.projectLink}>
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
                                            <IconBrandGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <IconExternalLink />
                                        </a>
                                    </li>                                       
                                </ul>
                            </div>
                        </li>
                        <li className={s.reverseItem}>
                            <a href="#home" rel="noreferrer" className={s.projectLink}>
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
                                            <IconBrandGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <IconExternalLink />
                                        </a>
                                    </li>                                       
                                </ul>
                            </div>
                        </li>
                        <li className={s.item}>
                            <a href="#home" rel="noreferrer" className={s.projectLink}>
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
                                            <IconBrandGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <IconExternalLink />
                                        </a>
                                    </li>                                       
                                </ul>
                            </div>
                        </li>
                        <li className={s.reverseItem}>
                            <a href="#home" rel="noreferrer" className={s.projectLink}>
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
                                            <IconBrandGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#home" rel="noreferrer">Live Demo
                                        <IconExternalLink />
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