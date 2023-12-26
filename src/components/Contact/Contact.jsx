import { IconMail, IconMapSearch } from "@tabler/icons-react";
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
                                <IconMapSearch width={30} height={30}/>
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
}

export default Contact
