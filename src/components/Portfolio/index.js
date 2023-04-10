import React from 'react';

import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import Video from '../../assets/images/img3.mp4';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading"> my <span>portfolio - API's valid thru 10/22</span> </h1>
        <div className="box-container">
          <div className="box">
            <a href="https://awiebe2021.github.io/run-buddy/">
            <img src={img1} alt="screenshot of Run-Buddy" />
            </a>
          </div>

          <div className="box">
            <a href="https://awiebe2021.github.io/project_1/">
            <img src={img2} alt="screenshot of Camp Buddy" />
            </a>
          </div>

          <div className="box">

            <video controls src={Video} type="video/mp4" width="260" height="200" />

          </div>

          <div className="box">
            <a href="https://quiet-waters-13147.herokuapp.com/">
            <img src={img4} alt="screenshot of Otter Journal" />
            </a>
          </div>

          <div className="box">
            <a href="https://AWiebe2021.github.io/Weather-Dashboard/">
            <img src={img5} alt="screenshot of Weather Dashboard" />
            </a>
          </div>

          <div className="box">
            <a href="https://s-hound.herokuapp.com/">
            <img src={img6} alt="screenshot of Project 2" />
            </a>
          </div>
        </div>
    </section>
  );
}

export default Portfolio;
