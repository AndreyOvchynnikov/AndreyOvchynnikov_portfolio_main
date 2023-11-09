import { IconBrandGithub } from "@tabler/icons-react";
import Container from 'components/Container';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                    <div className={s.content}>
                        <h3>Copyright &copy; {new Date().getFullYear()}. All rights are reserved</h3>
                        <ul className={s.socials}>
                            {/* <li>
                                <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andrey-ovchynnikov-881026299">
                                     <IconBrandLinkedin width={30} height={30} />
                                </a>
                            </li> */}
                            <li>
                                <a aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/AndreyOvchynnikov">
                                   <IconBrandGithub width={30} height={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
            </Container>
        </footer>
    )
}

export default Footer;