import { useInView } from 'react-intersection-observer';
import emoji from '../../images/working-emoji.c5325f52b5be329995a5.png';
import mainImage from '../../images/about-img.62b47e7f183d4b4e9feb.webp';
import textSVG from '../../images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg';
import s from './About.module.css';
import Container from 'components/Container';

const About = () => {


    const { ref: image, inView: imageIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const { ref: text, inView: textIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '100px 0px',
    });





    return (
        <section id="about" className={s.section}>
            <Container>
                <div className={s.content}>
                    <div className={imageIsVisible ? s.imageAnimated : s.image} ref={image} >
                        <img src={emoji} alt="emoji" className={s.emoji} />
                        <img src={mainImage} alt="mee" className={s.mainImage} />
                        <span>
                            <img src={textSVG} alt="text" />
                        </span>
                    </div>
                    <div className={s.textContainer}>
                        <div className={textIsVisible ? s.textAnimated : s.text} ref={text} >
                            <h3>About me</h3>
                            <h4>A Front-end Developer based in Kyiv, Ukraine 📍
                            </h4>
                            <p> As a junior front-end developer,
                                I possess an impressive knowledge of HTML, CSS, JavaScript, React, Redux, and SCSS.
                                My expertise lies in designing responsive websites with
                                an intuitive UI using cutting-edge development tools and
                                techniques. I always ensure that my code is clean and optimized.
                                I am a team player and easily collaborate with
                                colleagues from other departments.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
    )
};

export default About;