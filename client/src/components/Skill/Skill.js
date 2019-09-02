import React from 'react';
import './Skill.scss';

export default ({ icon, title, body, num}) => {

  return (
    <div class={`skill skill-${num}`}>
      <div class={`icon ${icon}`}></div>
      <div class="skill-content">
        <h3>
          <strong>{title}</strong> 
        </h3>  
        <p>{body}
        </p>
      </div>
    </div>
  );
  
};