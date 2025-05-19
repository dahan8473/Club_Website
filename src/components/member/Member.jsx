import React, { useState } from "react";
import "./member.css";

import logo from "../../assets/members/logo.png";

// Operations
import david from "../../assets/members/david liu.jpg";
import dev from "../../assets/members/dev joshi.jpg";
import sachi from "../../assets/members/sachi sisodia.jpg";

// Project Managers
import sarahChiang from "../../assets/members/Sarah_Chiang.jpg";
import trinity from "../../assets/members/trinity ung.png";
import ethan from "../../assets/members/ethan liu.jpg";
import jack from "../../assets/members/Jack_Hogan.jpg";
import justin from "../../assets/members/justin oh.jpg";
import luca from "../../assets/members/luca duarte.jpeg";
import robin from "../../assets/members/robin lee.jpg";
import james from "../../assets/members/james lee.jpg";
import christopher from "../../assets/members/christopher lam.jpg";
import anthony from "../../assets/members/anthony lam.jpg";
import thomas from "../../assets/members/thomasllamzon.jpg";
import david2 from "../../assets/members/David_Liu2.jpg";
import parneet from "../../assets/members/parneet_baidwan.png";
import stephanie from "../../assets/members/Stephanie_Li.jpeg";
import shivali from "../../assets/members/Shivali_Sharma.jpeg";
import noah from "../../assets/members/noah_kostesku.jpg";

const pmRoster = {
  "2024-2025": {
    "Fall Term": [
      { name: "Sarah Chiang", role: "Project Manager", project: "GO Hockey", img: sarahChiang },
      { name: "Trinity Ung", role: "Project Manager", project: "GO Hockey", img: trinity },
      { name: "Ethan Liu", role: "Project Manager", project: "JAM", img: ethan },
      { name: "Jack Hogan", role: "Project Manager", project: "JAM", img: jack },
      { name: "Justin Oh", role: "Project Manager", project: "United Way", img: justin },
      { name: "Luca Duarte", role: "Project Manager", project: "United Way", img: luca },
      { name: "Robin Lee", role: "Project Manager", project: "TREA", img: robin },
      { name: "Anthony Lam", role: "Project Manager", project: "BGC", img: anthony },
      { name: "James Lee", role: "Project Manager", project: "YOU", img: james },
      { name: "Christopher Lam", role: "Project Manager", project: "YOU", img: christopher },
    ],
    "Winter Term": [
      { name: "Sarah Chiang", role: "Project Manager", project: "FINANCE4HER", img: sarahChiang },
      { name: "Trinity Ung", role: "Project Manager", project: "FINANCE4HER", img: trinity },
      { name: "Anthony Lam", role: "Project Manager", project: "Empower Health", img: anthony },
      { name: "Shivali Sharma", role: "Project Manager", project: "Empower Health", img: shivali },
      { name: "Justin Oh", role: "Project Manager", project: "Western Sales Club", img: justin },
      { name: "Thomas Llamzon", role: "Project Manager", project: "Western Sales Club", img: thomas },
      { name: "David Liu", role: "Project Manager", project: "Fund Homecare Analytics Platform", img: david2 },
      { name: "Parneet Baidwan", role: "Project Manager", project: "Fund Homecare Analytics Platform", img: parneet },
      { name: "Noah Kosteku", role: "Project Manager", project: "Fund Homecare Website Redesign", img: noah },
      { name: "Stephanie Li", role: "Project Manager", project: "Fund Homecare Website Redesign", img: stephanie },
      { name: "Luca Duarte", role: "Project Manager", project: "Fund Homecare Web-Scraper", img: luca },
      { name: "Robin Lee", role: "Project Manager", project: "Fund Homecare Web-Scraper", img: robin },
    ],
  },
  "2025-2026": {
    "Fall Term": [],
    "Winter Term": [],
  },
};

const opsRoster = [
  { name: "David Liu", role: "President, VP Outreach", project: "Operations", img: david },
  { name: "Dev Joshi", role: "VP Finance", project: "Operations", img: dev },
  { name: "Sachi Sisodia", role: "VP Community", project: "Operations", img: sachi },
  { name: "Brooke Lai", role: "VP Marketing", project: "Operations", img: logo },
  { name: "Jasmine Vuong", role: "VP Marketing", project: "Operations", img: logo },
];

const Member = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedTerm, setSelectedTerm] = useState("Winter Term");

  const selectedMembers = pmRoster[selectedYear][selectedTerm];

  const groupedMembers = selectedMembers.reduce((acc, member) => {
    const projectKey = member.project;
    if (!acc[projectKey]) acc[projectKey] = [];
    acc[projectKey].push(member);
    return acc;
  }, {});

  return (
    <section className="member section" id="member">
      
      <h2 className="section__title">Our Teams</h2>
      <p className="section__description">
        Our project managers lead development teams and are responsible for 
        overseeing the development of our projects, ensuring we meet our clients' needs.
      </p>

      <div className="year-selector">
        {Object.keys(pmRoster).map((year) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? "active" : ""}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="term-selector">
        {Object.keys(pmRoster[selectedYear]).map((term) => (
          <button
            key={term}
            className={`term-button ${selectedTerm === term ? "active" : ""}`}
            onClick={() => setSelectedTerm(term)}
          >
            {term}
          </button>
        ))}
      </div>

      {/* Project Managers Section */}
      <div className="member__container">
        {selectedMembers.length === 0 ? (
          <h3 className="tba-text">TBA</h3>
        ) : (
          Object.entries(groupedMembers).map(([project, members]) => (
            <div key={project} className="project-group">
              <h3 className="project-title">{project}</h3>
              <div className="member-row">
                {members.map((member, index) => (
                  <div className="member__content" key={index}>
                    <img src={member.img} alt={member.name} className="member__image" />
                    <div className="member__text">
                      <h3 className="member__title">{member.name}</h3>
                      <h4 className="member__subtitle">{member.role}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Operations Section */}
      <h2 className="section__title ops-title">Our Operations Team</h2>
      <p className="section__description">
        Our operations team is responsible for the internal operations of TSI. 
        They ensure that our organization runs smoothly and efficiently, allowing 
        us to focus on our mission of providing tech solutions for organizations 
        committed to social good.
      </p>

      <div className="member__container">
        <div className="project-group">
          <div className="member-row">
            {opsRoster.map((member, index) => (
              <div className="member__content" key={index}>
                <img src={member.img} alt={member.name} className="member__image" />
                <div className="member__text">
                  <h3 className="member__title">{member.name}</h3>
                  <h4 className="member__subtitle">{member.role}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
