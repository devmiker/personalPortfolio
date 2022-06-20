import React from "react";
import ProfilePhoto2 from "../../assets/images/profilePhoto2.jpg";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <h1 className="aboutme-title">Who I am</h1>
      <p className="aboutme-subtitle">&#60;Raleigh, North Carolina /&#62;</p>

      <div class="aboutme-body">
        <p>
          I am a Front-End Web Developer aspiring to be a Full-Stack Web
          Developer. There are a few other titles I hold; IT professional,
          veteran, leader, student, son, brother, husband, &amp; the title that
          I am most proud of is father. I was born on the west-coast &amp;
          reside on the east-coast. I have been around the world once or twice
          &amp; wish I could travel the world while making a living. I love the
          outdoors so much I wanted to become a Wildland Fire-Fighter or
          lumberjack(still do), but life has a way of steering us towards our
          destiny. My hobbies include: camping, hiking, mountain biking,
          snowboarding, exercising, etc. I am looking forward to one day share
          those hobbies with my son. Learning is also a hobby of mine &amp;
          becoming the best version of myself is a constant goal. I hope to push
          the boundaries of the industry &amp; be a hero to my son.
        </p>
      </div>

      <img
        src={ProfilePhoto2}
        alt="Mike standing in front of structure"
        class="aboutme-img"
      />
    </div>
  );
};

export default AboutMe;
