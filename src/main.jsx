import React from 'react';
import './main.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import MainContentsProject from './main_contents_project';
import LastProject from "./last_project";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          tabNumber: 0
        };
    }

    getInput (number){
      const input1 = {
        title: "Chicken Tinder",
        gitLink: "https://github.com/hkryucr/mern-ct",
        liveLink: "https://lit-atoll-81167.herokuapp.com/",
        stacks: "(Node.js, Express.js, MongDB, React/Flux, JavaScript, CSS)",
        info:
          "A web app inspired by Tinder to help groups make decisions on restaurants or bars.",
        infoFeatures: [
          "Improved user experience by implementing a fully responsive, device-agnostic design using media query and flexbox.",
          "Removed unnecessary scrolling for users by creating a custom modal framework using flux architecture.",
          "Integrated Mapbox API with custom search functionality to dynamically present business locations based on the shown neighborhood on the map.",
          "Implemented secure user authentication by utilizing local strategy with Passport.js and BCrypt for password hashing.",
          "Architected highly scalable and uni-directional front-end state management by incorporating React-Redux container."
        ],
        imgUrl: "https://portfolio-henry.s3-us-west-1.amazonaws.com/CT_Overview.gif",
      };
      const input2 = {
        title: "Yocal",
        gitLink: "https://github.com/hkryucr/fsp-yocal",
        liveLink: "http://fsp-yocal.herokuapp.com/#/",
        stacks:
          "(Ruby on Rails, PostgreSQL, React/Redux, JavaScript, CSS, HTML)",
        info:
          "A clone app showcasing the major features and functions on Yelp.",
        infoFeatures: [
          "Merged real data from Yelp Fusion API with the project’s database to make the data seeding process more efficient.",
          "Integrated geolocation-based searching with Google Maps API to display the location of businesses on a map.",
          "Maximized user experience by front-loading search keywords within auto-complete search bars with native JavaScript.",
          "Constructed numerous React components including forms, carousels, and reviews to imitate Yelp’s interface.",
          "Created function where users can upload photos by utilizing AWS S3 and Active Storage for scalability.",
          "Optimized database usage by eliminating N+1 queries within Active Record associations.",
          "Built full user authentication for signup/login using BCrypt",
        ],
        imgUrl: "https://portfolio-henry.s3-us-west-1.amazonaws.com/Yocal_Overall_App.gif",
      };
      const input3 = {
        title: "3D Path Finder",
        gitLink: "https://github.com/hkryucr/3d-path-finder",
        liveLink: "https://hkryucr.github.io/3d-path-finder/",
        stacks: "(JavaScript, CSS, HTML)",
        info: "A single page app that visualizes path finding algorithms.",
        infoFeatures: [
          "Applied pure CSS and HTML to build a three-dimensional board and tiles for improved visualization.",
          "Built a tree data structure to find the shortest path from the start node to the end node by implementing different types of algorithms.",
        ],
        imgUrl: "https://portfolio-henry.s3-us-west-1.amazonaws.com/Path_Finder.gif",
      };

      if(number === 0){
        return input1;
      } else if (number === 1){
        return input2;
      } else if (number === 2){
        return input3;
      } else {
        return 4;
      }
    }

    handleClick(number){
      return (e)=>{
        e.preventDefault();
        this.setState({tabNumber: number});
      }
    }

    render() {
      const input = this.getInput(this.state.tabNumber);
      return (
        <div className="main">
          <div className="main-container">
            <div className="main-title">Latest Projects</div>
            <div className="main-contents">
              <div className="main-contents-tabs">
                <div
                  className={`main-contents-tab ${
                    this.state.tabNumber !== 0 ? "white" : null
                  }`}
                  onClick={this.handleClick(0)}
                >
                  <div className="main-contents-tab-header">
                    <span> Chicken Tinder</span>
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      color="#b0b0b0"
                    />
                  </div>
                  <div className="main-contents-tab-content">
                    <span>
                      A social matching app built on MERN(MongoDB, Express.js,
                      React, Node.js)
                    </span>
                  </div>
                </div>
                <div
                  className={`main-contents-tab ${
                    this.state.tabNumber !== 1 ? "white" : null
                  }`}
                  onClick={this.handleClick(1)}
                >
                  <div className="main-contents-tab-header">
                    <span> Yocal</span>
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      color="#b0b0b0"
                    />
                  </div>
                  <div className="main-contents-tab-content">
                    <span>
                      A clone app of Yelp built on Ruby on Rails, PostgreSQL
                      database, React.js and Redux
                    </span>
                  </div>
                </div>
                <div
                  className={`main-contents-tab ${
                    this.state.tabNumber !== 2 ? "white" : null
                  }`}
                  onClick={this.handleClick(2)}
                >
                  <div className="main-contents-tab-header">
                    <span> 3D Path Finder</span>
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      color="#b0b0b0"
                    />
                  </div>
                  <div className="main-contents-tab-content">
                    <span>
                      An interactive algorithm visualization built with
                      JavaScript, CSS, and HTML
                    </span>
                  </div>
                </div>
                <div
                  className={`main-contents-tab ${
                    this.state.tabNumber !== 3 ? "white" : null
                  }`}
                  onClick={this.handleClick(3)}
                >
                  <div className="main-contents-tab-header">
                    <span> Collection</span>
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      color="#b0b0b0"
                    />
                  </div>
                  <div className="main-contents-tab-content">
                    <span>
                      The collection of Urban Design / GIS(Geosptatial
                      Information System) projects
                    </span>
                  </div>
                </div>
              </div>

              <MainContentsProject input={input} />
              {input === 4 ? <LastProject input={input} /> : null}
            </div>
          </div>
        </div>
      );
    }
}

export default Main;
