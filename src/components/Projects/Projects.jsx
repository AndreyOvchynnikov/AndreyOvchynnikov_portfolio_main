import { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import carRental from '../../images/car-rental-full.c58b37da333d73238fdd.webp';
import ecommerse from '../../images/ecom.f10b3cdd799be85c19da.webp';
import Container from 'components/Container';
import s from './Projects.module.css';

const Projects = () => {

    const firstProject = useRef();
    const firstProjectImg = useRef();
    const [heightFirstProject, setHeightFirstProject] = useState("");

    const secondProject = useRef();
    const secondProjectImg = useRef();
    const [heightSecondProject, setHeightSecondProject] = useState("");

    useEffect(() => {
        setHeightFirstProject(firstProject.current.getBoundingClientRect().height);
    }, [heightFirstProject]);


    useEffect(() => {
        setHeightSecondProject(secondProject.current.getBoundingClientRect().height);
    }, [heightSecondProject]);

    
    const handleMouseOver = (project, projectHeightState) => {
        project.current.style.transform = `translateY(calc(-100% + ${projectHeightState}px))`;
    };

    const handleMouseOut = (project) => {
        project.current.style.transform = "";
    };

    const { ref: sectionTitle, inView: sectionTitleIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    return (
        <section id="projects" className={s.section}>
            <Container>
                <div className={s.content} ref={sectionTitle}>
                    <p className={sectionTitleIsVisible? s.sectionTextAnim : s.sectionText}>portfolio</p>
                    <h3 className={sectionTitleIsVisible? s.sectionTitleAnim : s.sectionTitle}>Each project is a unique piece of development 🧩</h3>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a href="https://andreyovchynnikov.github.io/carrental/"
                                ref={firstProject}
                                rel="noreferrer"
                                className={s.projectLink}
                            >
                                <img src={carRental} alt="website"
                                    className={s.project1}
                                    ref={firstProjectImg}
                                    onMouseOver={() => handleMouseOver(firstProjectImg, heightFirstProject)}
                                    onMouseOut={() => handleMouseOut(firstProjectImg)}
                                />
                            </a>
                            <div className={s.text}>
                                <h3>Car Rental <span className={s.date}>(December 2023)</span> 🚗</h3>
                                <p> An online platform where users can rent cars
                                    for personal or business use.
                                    The website provides functionality
                                    for searching, comparing, and reserving cars.
                                </p>
                                <ul className={s.stack}>
                                    <li>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>Module CSS</p>
                                    </li>
                                </ul>
                                <ul className={s.links}>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://github.com/AndreyOvchynnikov/carrental"
                                            rel="noreferrer"
                                        >
                                            Code
                                            <IconBrandGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            href="https://andreyovchynnikov.github.io/carrental/"
                                            rel="noreferrer"
                                        >
                                            Live Demo
                                            <IconExternalLink />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={s.reverseItem}>
                            <a href="https://andreyovchynnikov.github.io/ecommerce/"
                                rel="noreferrer"
                                className={s.projectLink}
                                ref={secondProject}
                            >
                                <img src={ecommerse} alt="website"
                                    className={s.project2}
                                    ref={secondProjectImg}
                                    onMouseOver={() => handleMouseOver(secondProjectImg, heightSecondProject)}
                                    onMouseOut={() => handleMouseOut(secondProjectImg)}
                                />
                            </a>
                            <div className={s.text}>
                                <h3>Ecommerce <span className={s.date}>(November 2023)</span> 🛒</h3>
                                <p> A web store with a simple and clean design.
                                    I've made user experience a priority so
                                    customers could easily find and purchase
                                    the products they need.
                                </p>
                                <ul className={s.stack}>
                                    <li>
                                        <p>React</p>
                                    </li>
                                    <li>
                                        <p>SASS</p>
                                    </li>
                                </ul>
                                <ul className={s.links}>
                                    <li>
                                        <a href="https://github.com/AndreyOvchynnikov/ecommerce" target="_blank" rel="noreferrer">Code
                                            <IconBrandGithub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://andreyovchynnikov.github.io/ecommerce/" target="_blank" rel="noreferrer">Live Demo
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
};

export default Projects