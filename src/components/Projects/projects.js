import Photo1 from "../../assets/images/ticTacToe.png";
import Photo2 from "../../assets/images/pincheCafe.png";
import Photo3 from "../../assets/images/todoListAppPhoto.PNG";
import Photo4 from "../../assets/images/pexels-vlad-bagacian-3987066.jpg";

import "./projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">(More coming soon...)</p>

      <div className="portfolio">
        <a
          href="https://master.dpr5uhurcolxt.amplifyapp.com/"
          className="portfolio-item"
        >
          <img src={Photo1} alt="Tic Tac Toe Game" className="portfolio-img" />
        </a>
        <a href="https://www.pinchecafe.co/" className="portfolio-item">
          <img src={Photo2} alt="Cafe Website" className="portfolio-img" />
        </a>
        <a
          href="https://devmiker.github.io/todoApp/"
          className="portfolio-item"
        >
          <img src={Photo3} alt="random" className="portfolio-img" />
        </a>
        <a href="#projects" className="portfolio-item">
          <div class="container">
            <img src={Photo4} alt="random" className="portfolio-img" />
            <div class="centered">Coming Soon</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
