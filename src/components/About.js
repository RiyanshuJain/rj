import React, { Component } from "react";
import { Icon } from "@iconify/react";
import pythonIcon from "@iconify/icons-logos/python";
import cppIcon from "@iconify/icons-logos/c-plusplus";
import mysqlIcon from "@iconify/icons-logos/mysql";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto", fontFamily: 'sans-serif', fontSize: 12, fontWeight: 500 , letterSpacing: 1.5}}>
                  <img
                    height="275px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  {/* <Icon
                    icon={cppIcon}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={pythonIcon}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={mysqlIcon}
                    style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                  /> */}
                  <br/>
                  "Undercommit and Overdeliver"
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                  {/* <span style={{fontFamily: "Raleway", fontSize: 20}}>"Undercommit and Overdeliver"</span> */}
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                    
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      letterSpacing: 0.5
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
