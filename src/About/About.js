import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
    <div className="about">
        <div className="about-title">About Me</div>

        <div className="about-text">
            HEY THERE, I'M UMMER. A 25 YEAR OLD FULL-STACK WEB DEVELOPER WHO IS HUNGRY TO GROW IN THIS INDUSTRY.
         </div>

        <div className="about-skills">
            TECHNICAL SKILLS 
            HTML | CSS | JAVASCRIPT | NODE | EXPRESS | REACT | PYTHON | BOOTSTRAP | JQUERY | API'S 
            | GIT | GITHUB | POSTMAN | VSCODE | VIRTUAL MACHINES | MONGODB | MONGOOSE | FLASK | GRAPHQL 
            | FLEXBOX | CSS GRID | SQL 
        </div>

    </div>
    );
  }
}

export default About;