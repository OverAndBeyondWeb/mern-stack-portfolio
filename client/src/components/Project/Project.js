import React from 'react';

export default ({ title, description, imgUrl, link}) => (
  <li className="project">
    
      <div className="project-content">
        <a href={link} target="_blank">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
      <a className="project-link" href={link} target="_blank">
        <div className="image-link panel-1">
          <button>
            visit site!
          </button>
        </div>
        <div className="project-image" style={{backgroundImage: `url(${imgUrl})`, backgroundSize:'100% 100%'}}>
        </div>
      </a>
    
  </li>
)