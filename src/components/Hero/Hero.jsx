import { useState } from 'react';
import {
    IconBrandGithub,
    // IconBrandLinkedin
} from "@tabler/icons-react";
import { useInView } from 'react-intersection-observer';
import Container from 'components/Container';
import catPicture from '../../images/cat_5341419448013279760_y-removebg-preview.png';
import myPhoto from '../../images/photo_resume.png'
import hand from '../../images/waving.1bae5fcfb51082b5c2b4.png';
import s from './Hero.module.css';

const Hero = () => {
    const [picture, setPicture] = useState(catPicture);
    const [isMyPhoto, setisMyPhoto] = useState(false);
    const [text, setText] = useState('The one who actually writes the code. ');


    const handleClick = () => {
        if (isMyPhoto) {
            setPicture(catPicture)
            setText('The one who actually writes the code. ')
            setisMyPhoto(!isMyPhoto)
        } else {
            setPicture(myPhoto)
            setText('And this is my Human😜')
            setisMyPhoto(!isMyPhoto)
        }

    };

    const { ref: skillsList, inView: skillsListIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '100px 0px',
    });


    return (
        <section id="home" className={s.hero}>
            <Container>
                <div className={s.content}>
                    <div className={s.main}>
                        <div className={s.textPart}>                       
                            <h1>Front-End Developer</h1>
                            <img src={hand} alt="waving hand" />
                            <p> Hi, I'm Andrey Ovchynnikov.
                                A passionate Front-end Developer based in Kyiv, Ukraine. 📍
                            </p>
                            <span>
                                {/* <a aria-label="linkedin" rel="noreferrer" target="_blank"
                                    href="https://www.linkedin.com/in/andrey-ovchynnikov-881026299">
                                    <IconBrandLinkedin width={32} height={32} />
                                </a> */}
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/AndreyOvchynnikov">
                                    <IconBrandGithub width={32} height={32} />
                                </a>
                            </span>
                        </div>
                        <div className={s.imgPartContainer}>
                            <div onClick={handleClick} className={s.imgPart} style={{ backgroundImage: `url(${picture})` }}>
                            </div>
                            <p className={s.imgText}>{text}</p>
                            <p className={s.imgText} style={isMyPhoto? {color: "transparent"} : {color: "#2d2e32"}}>CLICK ME!!!</p>
                        </div>
                        
                    </div>
                    <div className={s.skills}>
                        <p>Tech Stack</p>
                        <div className={s.logos}>
                            <ul ref={skillsList}>
                                <li className={skillsListIsVisible? s.skillsFirstItemAnim : s.skillsFisrstItem}>
                                    <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" />
                                </li>
                                <li className={skillsListIsVisible? s.skillsSecondItemAnim : s.skillsSecondItem}>
                                    <img src="https://skillicons.dev/icons?i=js,react" alt="skill-icon" />
                                </li>
                                <li className={skillsListIsVisible? s.skillsThirdItemAnim : s.skillsThirdItem}>
                                    <img src="https://skillicons.dev/icons?i=redux,scss" alt="skill-icon" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero;