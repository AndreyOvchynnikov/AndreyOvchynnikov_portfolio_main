import emoji from '../../images/working-emoji.c5325f52b5be329995a5.png';
import mainImage from '../../images/about-img.62b47e7f183d4b4e9feb.webp';
import textSVG from '../../images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg';
import s from './About.module.css';
import Container from 'components/Container';

const About = () => {
    return (
        <section id="about" className={s.section}>
            <Container>
                <div className={s.content}>
                    <div className={s.image}>
                        <img src={emoji} alt="emoji" className={s.emoji} />
                        <img src={mainImage} alt="mee" className={s.mainImage} />
                        <span>
                            <img src={textSVG} alt="text" />
                        </span>
                    </div>
                    <div className={s.text}>
                        <h3>About me</h3>
                        <h4>A Front-end Developer based in Kyiv, Ukraine 📍
                        </h4>
                        <p> As a Junior Front-End Developer, I possess an impressive arsenal of skills in
                        HTML, CSS,
                        JavaScript,
                        React, Redux, and
                        SCSS. I excel in designing responsive websites.
                        My expertise lies in
                        crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing
                        cutting-edge development
                        tools and techniques. I am also a team player who thrives in collaborating with cross-functional
                        teams.
                        </p>
                    </div>
                </div>
            </Container>  
        </section>
    )
}

export default About;