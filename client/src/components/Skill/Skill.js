import React from 'react';
import './Skill.scss';

export default ({ icon, title, body, num}) => {

  return (
    <div className={`skill skill-${num}`}>
      <div className={`icon ${icon}`}></div>
      <div className="skill-content">
        <h3>
          <strong>{title}</strong> 
        </h3>  
        <p>{body}
        </p>
      </div>
    </div>
  );
  
};