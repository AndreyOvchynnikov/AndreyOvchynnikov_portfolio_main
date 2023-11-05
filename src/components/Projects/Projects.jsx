import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import carRental from '../../images/car-rental-full.c58b37da333d73238fdd.webp';
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
                        
                    </ul>
                </div>
            </Container> 
        </section>
    )
}

export default Projects