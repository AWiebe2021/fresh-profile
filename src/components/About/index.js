import React from 'react';
import resume from '../../assets/images/Resume-Aaron-Wiebe.pdf';

function About() {
  return (
    <section  className="about" id="about">
      <h1 className="heading"> <span>about</span> me </h1>
      <div className="row">
        <div className="info">
          <h3> <span> Name : </span> Aaron Wiebe </h3>
          <h3> <span> Age : </span> 57 </h3>
          <h3> <span> Post : </span> Full Stack Developer / IT Business Analyst </h3>
          <h3> <span> Technologies : </span> C++, AutoCAD, LISP, Borland Delphi,
           Agile development, HTML, CSS, Git, APIs, JSON, AJAX, JavaScript, JQuery, MERN</h3>
           <a href={resume} download="Resume-Aaron-Wiebe.pdf"> <button className="btn">  Download Resume </button></a>
        </div>
        <div className="counter">
          <div className="box">
            <span>40+</span>
            <h3>years of computer tech experience</h3>
          </div>
          <div className="box">
            <span>29+</span>
            <h3>years employeed in the tech industry</h3>
          </div>
          <div className="box">
              <span>70+</span>
              <h3>endorsements on LinkedIn</h3>
          </div>
          <div className="box">
              <span>4+</span>
              <h3>years served in military</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;