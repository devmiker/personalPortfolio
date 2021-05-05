import './footer.css';
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <a href="mailto:devmiker@gmail.com" className="footer-link">&#60;devmiker@gmail.com /&#62;</a>
            <ul className="social-list">
                <li className="social-list-item">
                    <a href="https://www.linkedin.com/in/mike-l-rodriguez/" className="social-list-link">
                        <SiLinkedin size='1.5em' alt='LinkedIn Icon' />
                    </a>
                </li>
                <li className="social-list-item">
                    <a href="https://github.com/devmiker" className="social-list-link">
                        <SiGithub size='1.5em' alt='Github Icon'/>
                    </a>
                </li>
                <li className="social-list-item">
                    <a href="https://www.instagram.com/mikey4209/" className="social-list-link">
                        <SiInstagram size='1.5em' alt='Instagram Icon' />
                    </a>
                </li>
            </ul>
            <div className="copy-right">
                <p>&#60;&copy;Mike Rodriguez /&#62;</p>
            </div>
        </div>
    )
}

export default Footer;