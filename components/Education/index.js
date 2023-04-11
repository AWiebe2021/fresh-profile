import React from 'react';


function Education() {
  return (
    <section className="education" id="education">

    <h1 className="heading"> my <span>education</span> </h1>
    
    <div className="box-container">
    
      <div className="box">
          <i className="fas fa-certificate"></i>
          <span>1980</span>
          <h3>Basic langauge</h3>
          <p>This course is designed to introduce you to computers and computer programming languages. You will learn the history of computers, how to operate the TRS-80, and how to write simple programs in BASIC and LOGO </p>
      </div>
    
      <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>1985</span>
          <h3>Computer Science - No Degree Attained</h3>
          <p>The University of Idaho’s Department of Computer Science programs examine the field not solely in a vacuum of theories. Instead, thier programs explore the ways computing and algorithmic thinking influence and intersect with other scientific and technical disciplines.</p>
      </div>
    
      <div className="box">
          <i className="fas fa-fighter-jet"></i>
          <span>1986</span>
          <h3>United States Air Force - Honorably Discharged</h3>
          <p>Overview: Military intelligence involves the processing and converting of raw data from various sources into useable intelligence information. All Source Intelligence Analysts receive, analyze, report and disseminate this information that is critical to the success of any mission. They also provide intelligence training to aircrews and conduct debriefings of military personnel involved in combat operations. </p>
      </div>
    
      <div className="box">
          <i className="fas fa-graduation-cap"></i>
          <span>1991</span>
          <h3>Computer Aided Design and Drafting - AAS</h3>
          <p>This program exposes students to a variety of fundamental skills utilized in entry-level computer-aided drafting (CAD) and design positions. Students use CAD technologies and conventional drafting methods to produce various designs, working drawings, charts, forms and records. Students will be exposed to both classroom theory and laboratory projects.</p>
      </div>
    
      <div className="box">
          <i className="fas fa-certificate"></i>
          <span>1993</span>
          <h3>AutoCad Developement System - Certificate</h3>
          <p>ADS is an  application programming interface  that allows binary executable programs written in C or C++, compiled with industry-standard compilers, to communicate at run-time with the AutoCAD drawing editor.</p>
      </div>
    
      <div className="box">
          <i className="fas fa-certificate"></i>
          <span>2021</span>
          <h3>UofA Full Stack Development Bootcamp</h3>
          <p>This is a rigorous and fast-paced boot camp that focuses on the practical technical skills needed to build robust web applications. Throughout the course, you will gain proficiency in numerous marketable technologies, including
              JavaScript, Node, SQL, MongoDB, React, and more.</p>
      </div>
    
    </div>
    
    </section>
  );
}

export default Education;