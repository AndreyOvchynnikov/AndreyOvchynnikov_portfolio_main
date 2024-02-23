import { IconMail, IconMapSearch } from "@tabler/icons-react";
import { useInView } from 'react-intersection-observer';
import Container from 'components/Container';
import s from './Contact.module.css';

const Contact = () => {

    const { ref: contactTitle, inView: contactTitleIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '100px 0px',
    });

    return (
        <section id="contact" className={s.section}>
            <Container>
                <div className={s.content}>
                    <div className={s.title} ref={contactTitle}>
                        <p className={contactTitleIsVisible? s.contactTextAnim : s.contactText}>contact</p>
                        <h3 className={contactTitleIsVisible? s.contactTitleAnim : s.contactTitle}>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <ul className={s.icons}>
                        <li className={s.iconBox}>
                            <span>
                                <IconMapSearch width={30} height={30} />
                            </span>
                            <div className={s.info}>
                                <h3>Location</h3>
                                <a href="https://maps.app.goo.gl/PDGRw8oEE7rWZejNA">Kyiv, Ukraine</a>
                            </div>
                        </li>
                        <li className={s.iconBox}>
                            <span>
                                <IconMail width={30} height={30} />
                            </span>
                            <div className={s.info}>
                                <h3>Mail</h3>
                                <a href="mailto:andrey272015@meta.ua">andrey272015@meta.ua</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
};

export default Contact
