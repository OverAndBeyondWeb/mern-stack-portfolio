import React from 'react';

export default ({ title, description, imgUrl, link}) => (
  <li className="project">
    
      <div className="project-content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p dangerouslySetInnerHTML={{__html: description}}></p>
      </div>
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
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