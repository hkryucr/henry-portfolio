import React from "react";
import "./main_contents_project.css";
import Flickity from "flickity";
import './last_project.css';

class LastProject extends React.Component {
  // componentDidMount() {
  //   const elem = document.querySelector(".caroussel-gallery");
  //   new Flickity(elem, {
  //     wrapAround: "true",
  //     autoPlay: 2000,
  //     contain: true,
  //     setGallerySize: false
  //   });
  // }

  render() {
    return (
        <div className="main-contents-project">
            <div className="main-contents-project-container">
            <div className="project-title">
                <span>Previous Work Collection</span>
            </div>
            <div className="project-stacks">
                Before getting into the software engineering field, I worked as
                GIS (Geospatial Information System) specialist / Urban Planner. I love maps and designing!
            </div>
            <div className="project-info">
                Here are some samples of urban design and GIS projects.
            </div>
            <div className="caroussel-gallery">
                {/* {[25, 26, 27, 28, 30, 31, 20, 21, 22, 23, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 
                ].map((num, idx) => (
                    <div className="caroussel-gallery-container" key={idx}>
                        <img className= "caroussel-gallery-img" src={`./GIS_${num}.jpg`}  />
                    </div>
                ))} */}
            </div>
        </div>
    </div>
    )
  }
}

export default LastProject;
