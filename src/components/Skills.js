import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills_lang = this.props.sharedSkills.icons_lang.map(function (skills_lang, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills_lang.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills_lang.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      
      var skills_webd = this.props.sharedSkills.icons_webd.map(function (skills_webd, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills_webd.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills_webd.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });

      var skills_ml = this.props.sharedSkills.icons_ml.map(function (skills_ml, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills_ml.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills_ml.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });

      var skills_other = this.props.sharedSkills.icons_other.map(function (skills_other, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills_other.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills_other.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <h3>
              <span className="text-white">{"Languages & Database"}</span>
            </h3>
            <ul className="list-inline mx-auto skill-icon">{skills_lang}</ul>
            <br/>
            <h3>
              <span className="text-white">{"Web Development      "}</span>
              <span className="h6" style={{color: '#ffffff'}}> {"(Familiar with)"} </span>
            </h3>
            <ul className="list-inline mx-auto skill-icon">{skills_webd}</ul>
            <br />
            <h3>
              <span className="text-white">{"Machine Learning"}</span>
            </h3>
            <ul className="list-inline mx-auto skill-icon">{skills_ml}</ul>
            <br />
            <h3>
              <span className="text-white">{"Other Tools & Technologies    "}</span>
              <span className="h6" style={{color: '#ffffff'}}> {"(Familiar with)"} </span>
            </h3>
            <ul className="list-inline mx-auto skill-icon">{skills_other}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
