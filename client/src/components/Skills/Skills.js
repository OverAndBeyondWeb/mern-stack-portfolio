import React, { Component } from 'react';
import './Skills.scss';

import Skill from '../Skill/Skill';

class Skills extends Component {
  
  state = {
    skills: [
      
      {
        icon: 'speedometer',
        title: 'Speedy Development',
        body: 'I won\'t waste your time. My work ethic won\'t allow me to miss deadlines. I am committed to using my own time to work through issues that could otherwise throw a project off schedule.',
        num: 1
      },
      {
        icon: 'communication',
        title: 'Clear Communication',
        body: 'I cater my delivery to the specific audience that needs to receive information at the time. Whether technical or non-technical, I convey key information and give the right details, leaving everyone with a confident feeling that we are all on the same page.',
        num: 2
      },
      {
        icon: 'develop',
        title: 'Full Stack Development',
        body: 'With 5+ years on the front end and 2+ years studying backend development, I understand web development as a whole. I understand how code is handled in different browsers, ajax requests, asynchronous code, server to database communication, API development, and much more.',
        num: 3
      },
      {
        icon: 'learn',
        title: 'Life Learner',
        body: 'The ability to read and understand documentation has allowed me to use many frameworks and libraries. I have used React.js, Vue.js, and Angular for javascript development, and I have used Bootstrap, Semantic UI, and Materialize for CSS, just to name a few.',
        num: 4
      }
    ]
  }

  render() {
    return (
      <div class="skills">
        <div class="skills-container wrap">
          {this.state.skills.map(skill => <Skill 
                                            icon={skill.icon}
                                            title={skill.title}
                                            body={skill.body}
                                            num={skill.num}
                                            key={skill.num}
                                            />)}
        </div>
      </div>
    );
  }
}

export default Skills;