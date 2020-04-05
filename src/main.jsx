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
          "A single page app designed to help a group decide on a venue for their next gathering. Each user can vote on each venue offered to the group (based on location and filters).",
        infoFeatures: [
          "Improved user experience by implementing a fully responsive, device-agnostic design using media query and flexbox ",
          "Removed unnecessary scrolling for users by creating a custom modal framework using flux architecture.",
          "Integrated Mapbox API with custom search functionality to dynamically present business locations based on the current coordinate associated with a neighborhood in San Francisco.",
          "Achieved secure user authentication by Implementing local strategy with Passport.js, using BCrypt for password hashing.",
          "Incorporated React-Redux container to architect highly scalable and uni-directional front-end state management.",
        ],
        imgUrl: "chicken_tinder.gif",
      };
      const input2 = {
        title: "Yocal",
        gitLink: "https://github.com/hkryucr/fsp-yocal",
        liveLink: "http://fsp-yocal.herokuapp.com/#/",
        stacks:
          "(Ruby on Rails, PostgreSQL, React/Redux, JavaScript, CSS, HTML)",
        info:
          "Yocal is a single-page web clone application inspired by Yelp to help you find restaurants near you. Yocal is built using Ruby on Rails with a PostgreSQL on the back-end, and React.js, Redux on the front-end.",
        infoFeatures: [
          "Incorporated real data from Yelp Fusion API into the project’s database to ease off the data seeding process.",
          "Integrated Google Maps API with geolocation-based searching to display the location of businesses on a map.",
          "Enabled users to search by a business or category name by implementing auto-complete search bars with native JavaScript.",
          "Built out numerous React Components including forms, carousels, business list items, and business reviews.",
          "Utilized AWS S3 and Active Storage for security and scalability and built a user interface that users can upload photos.",
          "Optimized database usage by eliminating N+1 queries, writing SQL queries and reducing server load through the utilization of Active Record associations.",
          "Built full user authentication for signup/login using BCrypt",
        ],
        imgUrl: "chicken_tinder.gif",
      };
      const input3 = {
        title: "3D Path Finder",
        gitLink: "https://github.com/hkryucr/3d-path-finder",
        liveLink: "https://hkryucr.github.io/3d-path-finder/",
        stacks: "(JavaScript, CSS, HTML)",
        info:
          "A single page app designed to help a group decide on a venue for their next gathering. Each user can vote on each venue offered to the group (based on location and filters).",
        infoFeatures: [
          "Utilized pure CSS and HTML to build three-dimensional board and tiles for improved visualization.",
          "Built a tree data structure to find the shortest path from the start node to the end node by implementing different types of algorithms.",
        ],
        imgUrl: "chicken_tinder.gif",
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
