import Photo1 from '../images/ticTacToe.png';
import Photo2 from '../images/pincheCafe.png';
import Photo3 from '../images/pexels-pixabay-60504.jpg';
import Photo4 from '../images/pexels-vlad-bagacian-3987066.jpg';
import Photo5 from '../images/pexels-paras-katwal-4218883.jpg';
import Photo6 from '../images/pexels-picjumbocom.jpg';
import Photo7 from '../images/pexels-antonio-batinic.jpg';
import Photo8 from '../images/pexels-christina-morillo-1181311_edited.jpg';

import './projects.css';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h2 className="projects-title">Projects</h2>
            <p className="projects-subtitle">(More coming soon...)</p>

            <div className="portfolio">
                <a href="https://master.dpr5uhurcolxt.amplifyapp.com/" className="portfolio-item">
                    <img src={Photo1} alt="Tic Tac Toe Game"
                        className="portfolio-img" />
                </a>
                <a href="https://www.pinchecafe.co/" className="portfolio-item">
                    <img src={Photo2} alt="Cafe Website"
                        className="portfolio-img" />
                </a>
                <a href="#projects" className="portfolio-item">
                    <img src={Photo3} alt="random" className="portfolio-img" />
                </a>
                <a href="#projects" className="portfolio-item">
                    <img src={Photo4} alt="random"
                        className="portfolio-img" />
                </a>
                <a href="#projects" className="portfolio-item">
                    <img src={Photo5} alt="random"
                        className="portfolio-img" />
                </a>
                <a href="#projects" className="portfolio-item">
                    <img src={Photo6} alt="random" className="portfolio-img" />
                </a>
                <a href="#projects" className="portfolio-item">
                    <img src={Photo7} alt="random" className="portfolio-img" />
                </a>
                <a href="#projects" className="portfolio-item">
                    <img src={Photo8} alt="random" className="portfolio-img" />
                </a>
            </div>
        </div>
    )
}

export default Projects;