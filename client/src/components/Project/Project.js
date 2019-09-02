import React from 'react';

export default ({ title, description, imgUrl, link}) => (
  <li>
    
      <div class="project-content">
        <a target="_blank">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
      <a class="project-link" target="_blank">
        <div class="image-link panel-1">
          <button>
            visit site!
          </button>
        </div>
        <div class="project-image">
        </div>
      </a>
    
  </li>
)