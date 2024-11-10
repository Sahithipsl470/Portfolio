import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import dataScienceImage from "../../assets/images/data_science_image.jpg";
import fullStackImage from "../../assets/images/full_stack_image.jpg";
import microservicesImg from "../../assets/images/micro_services_image.jpg";

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "DataScienceImg":
      return (
        <img
          src={dataScienceImage}
          alt="Data Science"
          className="skill-image-side"
        />
      );
    case "FullStackImg":
      return (
        <img
          src={fullStackImage}
          alt="Full Stack"
          className="skill-image-side"
        />
      );
    case "MicroservicesCloudImg":
      return (
        <img
          src={microservicesImg}
          alt="Micro Services"
          className="skill-image-side"
        />
      );
    default:
      return null;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
