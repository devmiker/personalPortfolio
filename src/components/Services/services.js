import './services.css';
import { FaJs, FaReact } from 'react-icons/fa';
import { SiCsharp, SiPhp, SiMicrosoftsqlserver } from "react-icons/si";

const Services = () => {
    return (
        <div className='my-services' id='my-services'>
            <h2 className="services-title">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3 className="services-subtitle">&#60;Design /&#62;</h3>
                    <p>On the Front End it is my duty to design &amp; build the interface, navigation
                    &amp; aesthetic of your website. Working with a team of professionals as we strive to
                    perfect a design that will leave you gratified. Designing responsive websites while focusing on the
                    visual &amp; functionaility.</p>
                </div>
                <div className="service">
                    <h3 className="services-subtitle">&#60;Development /&#62;</h3>
                    <p>As a Web Developer it is my purpose to continuously develop to improve &amp; enhance the your website's design.
                    Communication is crucial to ensure the client's website if reaching it's full potential.</p>
                </div>
            </div>
            <a href="#projects" className="projects-btn">Projects</a>
            <div className='my-tools'>
                <h2 className="tools-title">Programming Tools</h2>
                <div className="tools">
                    <span className="tool"><FaJs size='6em' alt='Javascript Icon'/></span>
                    <span className="tool"><FaReact size='6em' alt='React.js Icon' /></span>
                    <span className="tool"><SiCsharp size='6em' alt='Csharp Icon' /></span>
                    <span className="tool"><SiMicrosoftsqlserver size='6em' alt='Microsoft SQL Serve Icon' /></span>
                    <span className="tool"><SiPhp size='6em' alt='PHP Icon' /></span>
                </div>
            </div>
        </div>
    )
}

export default Services;