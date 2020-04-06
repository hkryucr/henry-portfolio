import React from 'react';
import './main_contents_project.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

class MainContentsProject extends React.Component{
  render(){
    const input = this.props.input;
    if(input === 4) return null;

    return (
      <div className="main-contents-project">
        <div className="main-contents-project-container">
          <div className="project-title">
            <span>{input.title}</span>
            <a target="_blank" href={input.liveLink}>
              <span>Live Link</span>
            </a>
            <a target="_blank" href={input.gitLink}>
              <span>github</span>
            </a>
          </div>
          <div className="project-stacks">{input.stacks}</div>
          <div className="project-info">{input.info}</div>
          <div className="project-info-features">
            {input.infoFeatures.map((feature, idx) => (
              <div className="project-info-feature" key={idx}>
                <FontAwesomeIcon icon={faSeedling} size="xs" color="gray" />
                {feature}
              </div>
            ))}
          </div>
          <div className="project-info-img">
            <div className="project-info-img-screenshot">Project Overview</div>
            <img src={input.imgUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContentsProject;
