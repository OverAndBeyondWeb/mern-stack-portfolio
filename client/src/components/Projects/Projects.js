import React, { Component } from 'react';
import './Projects.scss';

import Project from '../Project/Project';

class Projects extends Component {

  state = {
    projects: [{
        "description" : "A site that makes use of the HTML5 audio element to build a music player, complete with playlist, controls, progress bar, and information window. The music player is built with an object-oriented javascript and Handlebars.js html templating.",
        "imgUrl" : "overandbeyond_thumb.jpg",
        "link" : "http://www.overandbeyondproductions.com",
        "title" : "Over and Beyond Productions"
      },
      {
        "description" : "A sample site with an image slider that is built with JQuery.\n        The images link back to the original source at <a href=\"http://www.flickr.com\" target=\"_blank\">flickr.com.</a>",
        "imgUrl" : "thumbnail2.jpg",
        "link" : "http://overandbeyondweb.xyz/marquee.html",
        "title" : "JQuery Image Slider"
      },
      {
        "description" : "This site features a calculator built with JQuery. The buttons are pure CSS, and the body is an image created in <a href=\"https://www.adobe.com/Photoshop \" target=\"_blank\">Adobe Photoshop.</a>",
        "imgUrl" : "thumbnail3.jpg",
        "link" : "http://overandbeyondweb.xyz/calculator.html",
        "title" : "JQuery Calculator"
      },
      {
        "description" : "A website for those who seek web design services from a professional web developer.",
        "imgUrl" : "thumbnail4.jpg",
        "link" : "http://overandbeyondweb.xyz/index.html",
        "title" : "Over and Beyond Web Design"
      },
      {
        "description" : "A full stack Node.js/React.js app that allows users to upload HTML documents extract a score based on the quality of HTML elements in the document. The scores are saved in a MySQL database.",
        "imgUrl" : "htmlscorer_thumb.jpg",
        "link" : "https://whispering-bastion-40244.herokuapp.com",
        "title" : "HTML Scorer"
      },
      {
        "description" : "Alessistant is a site with secure sign up and login, for brewers of all sizes to keep track of inventory, recipes, and brewing sessions. It has a REST API built with Node.js/Express.js, and it uses MongoDB for a database to perform all CRUD actions. The front end is built completely with React.js.",
        "imgUrl" : "alessistant.jpg",
        "link" : "https://alessistant.herokuapp.com/",
        "title" : "Alessistant"
      },
      {
        "description" : "Bootcamp Overflow is a site for individuals who have been through the web development bootcamp and want to connect with others to share stories and experiences.\nIt uses Node.js/Express.js as a back end, and Mysql is the database used to perform all CRUD actions. The front end was built using Handlebars.js and Bulma CSS framework.",
        "imgUrl" : "bootcamp-overflow.jpg",
        "link" : "https://bootcamp-overflow.herokuapp.com/",
        "title" : "Bootcamp Overflow"
      }
    ]
  }

  render() {
    return (
      <div id="projects" className="projects">
        <div className="projects-container wrap">
          <h1>Projects</h1>
          <ul>
            {this.state.projects.map(project => {
              return <Project 
                            title={project.title}
                            description={project.description}
                            imgUrl={require(`../../images/${project.imgUrl}`)}
                            link={project.link}
                            key={project.title}
                          />
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;