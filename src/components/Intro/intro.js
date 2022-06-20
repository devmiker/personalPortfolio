import ProfilePhoto from "../../assets/images/profilePhoto.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <h1 className="intro-title">
        Hi, I'm <strong>Mike Rodriguez</strong>
      </h1>
      <p className="intro-subtitle">&#60;Front End Developer /&#62;</p>
      <img className="intro-img" src={ProfilePhoto} alt="Mike"></img>
    </div>
  );
};

export default Intro;
