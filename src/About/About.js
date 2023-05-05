import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
    <div className="about">
        <div className="about-title">ABOUT</div>

        <div className="about-text">
            HEY THERE, I'M UMMER.<br></br>
             A 25 YEAR OLD FULL-STACK WEB DEVELOPER WHO IS HUNGRY TO GROW IN THIS INDUSTRY.
         </div>

        <div className="about-skills">
            TECHNICAL SKILLS <br></br>
            HTML | CSS | JAVASCRIPT | NODE | EXPRESS | REACT | PYTHON | BOOTSTRAP | JQUERY | API'S 
            | GIT | GITHUB | POSTMAN | VSCODE | VIRTUAL MACHINES | MONGODB | MONGOOSE | FLASK | GRAPHQL 
            | FLEXBOX | CSS GRID | SQL 
        </div>

        <img className="about-pic" src="../../imgs/headshot.jpg"></img>

    </div>
    );
  }
}

export default About;