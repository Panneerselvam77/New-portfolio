import React from "react";
import "./Skill.css";
import UiDesign from "../../assets/image/ui-design.png";
import WebDesigin from "../../assets/image/website-design.png";

export default function Skills() {
  return (
    <div>
      <section id="skills" className="skills-container">
        <span className="skill-title">What I do</span> <br />
        <div className="skill-bars">
          {/* Front End */}
          <div className="skill-bar">
            <img src={WebDesigin} alt="webdesign" className="skill-bar-img" />
            <div className="skill-bar-text">
              <h2>Front End</h2>
              <p>
                As a front-end developer proficient in HTML, CSS, JavaScript,
                and React.js, I specialize in crafting engaging and interactive
                user interfaces. Leveraging the power of HTML5 for semantic
                markup, CSS3 for styling, and JavaScript for dynamic behavior, I
                create visually stunning and highly functional web experiences.
                With a deep understanding of modern web standards and best
                practices, I ensure cross-browser compatibility and
                accessibility while prioritizing responsive design principles.
                By harnessing the capabilities of React.js, I build scalable and
                maintainable UI components, enabling efficient development
                workflows and seamless user interactions. My commitment to
                delivering pixel-perfect designs and intuitive user experiences
                drives me to continually explore new technologies and refine my
                skills in front-end development.
              </p>
            </div>
          </div>

          <div className="skill-bar">
            <img src={UiDesign} alt="uidesign" className="skill-bar-img" />
            <div className="skill-bar-text">
              <h2>Back End</h2>
              <p>
                As a back-end developer proficient in Node.js, Express.js, and
                MongoDB, I specialize in building robust and scalable
                server-side applications. Leveraging the asynchronous nature of
                Node.js, I develop efficient and high-performance APIs that
                handle complex data processing tasks with ease. With Express.js,
                I create flexible and modular server architectures, enabling
                rapid development and seamless integration of middleware for
                authentication, routing, and error handling. MongoDB serves as
                the cornerstone of my data management strategy, allowing for
                flexible schema designs and seamless scalability in handling
                large volumes of data. My expertise in back-end development
                enables me to architect reliable and secure systems that meet
                the demands of modern web applications while adhering to best
                practices in performance optimization, data integrity, and
                security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
