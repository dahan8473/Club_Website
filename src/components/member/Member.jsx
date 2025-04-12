import React, { useState } from "react";
import "./member.css";

import david from "../../assets/members/david liu.jpg";
import sarah from "../../assets/members/sarah chiang.jpg";
import trinity from "../../assets/members/trinity ung.png";
import ethan from "../../assets/members/ethan liu.jpg";
import jack from "../../assets/members/Jack_Hogan.jpg";
import justin from "../../assets/members/justin oh.jpg";
import luca from "../../assets/members/luca duarte.jpeg";
import robin from "../../assets/members/robin lee.jpg";
import james from "../../assets/members/james lee.jpg";
import christopher from "../../assets/members/christopher lam.jpg";
import anthony from "../../assets/members/anthony lam.jpg";
import dev from "../../assets/members/dev joshi.jpg";
import sachi from "../../assets/members/sachi sisodia.jpg";
import logo from "../../assets/members/logo.png";
import thomas from  "../../assets/members/thomasllamzon.jpg";
import adeline from "../../assets/members/adelineluesang.jpg"
import david2 from "../../assets/members/David_Liu2.jpg";
import parneet from "../../assets/members/parneet_baidwan.png";
import hadi from "../../assets/members/Hadi_Youssef.png";
import johnathan from "../../assets/members/johnathan_lam.jpeg";
import vinesh from "../../assets/members/Vinesh_Ranganathan.jpg";
import zalak from "../../assets/members/Zalak_Hansoti.jpg";
import danielTan from "../../assets/members/daniel_tan.png";
import lisha from "../../assets/members/Lisha_Makwana.jpg";
import seabar from "../../assets/members/Seabar_Omarzadeh.jpg";
import ivory from "../../assets/members/Ivory_Huo.jpeg";
import mariappan from "../../assets/members/Mariappan_Vineeth.jpg";
import jade from "../../assets/members/Jade_liu.jpg";
import stephanie from "../../assets/members/Stephanie_Li.jpeg";
import lucian from "../../assets/members/Lucian__Lavric.png";
import emily from "../../assets/members/Emily_Berlinghoff.jpg";
import clayton from "../../assets/members/Clayton_McCormack.png";
import andres from "../../assets/members/andres_pedreros.jpg";
import zekai from "../../assets/members/Zekai_Zhao.jpg";
import adit from "../../assets/members/Adit_Bhimani.png";
import shivali from "../../assets/members/Shivali_Sharma.jpeg";
import ethan2 from "../../assets/members/Ethan_Bhalla.jpg";
import michelle from "../../assets/members/Michelle_Li.jpg";
import vishwa from "../../assets/members/vishwa.kapadia.jpg";
import issar from "../../assets/members/Issar_Manknojyia.png";
import noah from "../../assets/members/noah_kostesku.jpg";


const membersData = {
  "2024-2025": {
    "Fall Term": [
      
      { name: "Sarah Chiang", role: "Project Manager", project: "GO Hockey", img: sarah },
      { name: "Trinity Ung", role: "Project Manager", project: "GO Hockey", img: trinity },
      { name: "Daniel Antal", role: "Developer", project: "GO Hockey", img: logo },
      { name: "Ivory Huo", role: "Developer", project: "GO Hockey", img: ivory },
      { name: "Noah Kostesku", role: "Developer", project: "GO Hockey", img: noah },

      { name: "Ethan Liu", role: "Project Manager", project: "JAM", img: ethan },
      { name: "Jack Hogan", role: "Project Manager", project: "JAM", img: jack },
      { name: "Alan Sanjit", role: "Developer", project: "JAM", img: logo },
      { name: "Michelle Li", role: "Developer", project: "JAM", img: michelle },
      { name: "Omar Hossain", role: "Developer", project: "JAM", img: logo },
      { name: "Seabar Omarzadeh", role: "Developer", project: "JAM", img: seabar },

      { name: "Justin Oh", role: "Project Manager", project: "United Way", img: justin },
      { name: "Luca Duarte", role: "Project Manager", project: "United Way", img: luca },
      { name: "Andy Hwang", role: "Developer", project: "United Way", img: logo },
      { name: "Adeline Lue Sang", role: "Developer", project: "United Way", img: logo },
      { name: "Cadence McGillicuddy", role: "Developer", project: "United Way", img: logo },
      { name: "Jack Fedash", role: "Developer", project: "United Way", img: logo },
      { name: "Kenneth Li", role: "Developer", project: "United Way", img: logo },


      { name: "Robin Lee", role: "Project Manager", project: "TREA", img: robin },
      { name: "Aidan Naccarato", role: "Developer", project: "TREA", img: logo },
      { name: "Justin Rowbotham", role: "Developer", project: "TREA", img: logo },
      { name: "Minaal Ali", role: "Developer", project: "TREA", img: logo },
      { name: "Rameez Mufti", role: "Developer", project: "TREA", img: logo },

      { name: "Anthony Lam", role: "Project Manager", project: "BGC", img: anthony },
      { name: "Guojia La", role: "Developer", project: "BGC", img: logo },
      { name: "Kayden Jaffer", role: "Developer", project: "BGC", img: logo },
      { name: "Rosa Scully", role: "Developer", project: "BGC", img: logo },
 
      { name: "James Lee", role: "Project Manager", project: "YOU", img: james },
      { name: "Christopher Lam", role: "Project Manager", project: "YOU", img: christopher },
      { name: "Cole Branston", role: "Developer", project: "YOU", img: logo },
      { name: "Ethan Bhalla", role: "Developer", project: "YOU", img: ethan2 },
      { name: "Hadi Youssef", role: "Developer", project: "YOU", img: hadi },
      { name: "Het Patel", role: "Developer", project: "YOU", img: logo },
      { name: "Jack Branston", role: "Developer", project: "YOU", img: logo },


      { name: "David Liu", role: "President & VP Outreach", project: "Operations", img: david },
      { name: "Daniel Tan", role: "Outreach Director", project: "Operations", img: danielTan },
      { name: "Dev Joshi", role: "VP Finance", project: "Operations", img: dev },
      { name: "Vinesh Ranganathan", role: "Finance Director", project: "Operations", img: vinesh },
      { name: "Sachi Sisodia", role: "VP Community", project: "Operations", img: sachi },
      { name: "Vishwa Kapadia", role: "Community Director", project: "Operations", img: vishwa },
      { name: "Emily Berlinghoff", role: "Marketing Director", project:"Operations", img: emily},
      { name: "Lisha Makwana", role: "Marketing Director", project:"Operations", img: lisha},
    ],

    "Winter Term": [

      { name: "Sarah Chiang", role: "Project Manager", project: "FINANCE4HER", img: sarah },
      { name: "Trinity Ung", role: "Project Manager", project: "FINANCE4HER", img: trinity },
      { name: "Abdullah Imran", role: "Developer", project: "FINANCE4HER", img: logo },
      { name: "Clayton McCormack", role: "Developer", project: "FINANCE4HER", img: clayton },
      { name: "Issar Manknojyia", role: "Developer", project: "FINANCE4HER", img: issar },
      { name: "Mariappan Vineeth", role: "Developer", project: "FINANCE4HER", img: mariappan },
      { name: "Zalak Hansoti", role: "Developer", project: "FINANCE4HER", img: zalak },

      { name: "Anthony Lam", role: "Project Manager", project: "Empower Health", img: anthony },
      { name: "Shivali Sharma", role: "Project Manager", project: "Empower Health", img: shivali },
      { name: "Aditi Bhardwaj", role: "Developer", project: "Empower Health", img: logo },
      { name: "Dylan Wettlaufer", role: "Developer", project: "Empower Health", img: logo },
      { name: "Jade Liu", role: "Developer", project: "Empower Health", img: jade },
      { name: "Pranav Chopra", role: "Developer", project: "Empower Health", img: logo },
      { name: "Sarah Solaiman", role: "Developer", project: "Empower Health", img: logo },

      { name: "Justin Oh", role: "Project Manager", project: "Passion for Parkinson's", img: justin },
      { name: "Thomas Llamzon", role: "Project Manager", project: "Passion for Parkinson's", img: thomas},
      { name: "Adeline Lue Sang", role: "Developer", project: "Passion for Parkinson's", img: adeline },
      { name: "Andres Castro", role: "Developer", project: "Passion for Parkinson's", img: andres },
      { name: "Ethan Ung", role: "Developer", project: "Passion for Parkinson's", img: logo },
      { name: "Harry Yang", role: "Developer", project: "Passion for Parkinson's", img: logo },
      { name: "Kenneth Li", role: "Developer", project: "Passion for Parkinson's", img: logo },

      { name: "David Liu", role: "Project Manager", project: "Fund Homecare", img: david2 },
      { name: "Parneet Baidwan", role: "Project Manager", project: "Fund Homecare", img: parneet },
      { name: "Johnathan Lam", role: "Developer", project: "Fund Homecare", img: johnathan },
      { name: "Samuel Joseph Humphrey", role: "Developer", project: "Fund Homecare", img: logo },
      { name: "Shayo Olaiya", role: "Developer", project: "Fund Homecare", img: logo },
      { name: "Zekai Zhao", role: "Developer", project: "Fund Homecare", img: zekai },

      { name: "Noah Kosteku", role: "Project Manager", project: "Fund Homecare Website Redesign", img: noah },
      { name: "Stephanie Li", role: "Project Manager", project: "Fund Homecare Website Redesign", img: stephanie },
      { name: "Carmen Choi", role: "Developer", project: "Fund Homecare Website Redesign", img: logo },
      { name: "Joanna Cui", role: "Developer", project: "Fund Homecare Website Redesign", img: logo },
      { name: "Justin Chow", role: "Developer", project: "Fund Homecare Website Redesign", img: logo },
      { name: "Prabnoor Multani", role: "Developer", project: "Fund Homecare Website Redesign", img: logo },

      { name: "Luca Duarte", role: "Project Manager", project: "Fund Homecare Scraper", img: luca },
      { name: "Robin Lee", role: "Project Manager", project: "Fund Homecare Scraper", img: robin },
      { name: "Adit Bhimani", role: "Developer", project: "Fund Homecare Scraper", img: adit },
      { name: "Cameron Ollerhead", role: "Developer", project: "Fund Homecare Scraper", img: logo },
      { name: "Justin Rowbotham", role: "Developer", project: "Fund Homecare Scraper", img: logo },
      { name: "Lucian Lavric ", role: "Developer", project: "Fund Homecare Scraper", img: lucian },
      { name: "Vidhi Kothawala", role: "Developer", project: "Fund Homecare Scraper", img: logo },

      { name: "David Liu", role: "President, VP Outreach", project: "Operations", img: david },
      { name: "Daniel Tan", role: "Outreach Director", project: "Operations", img: danielTan },
      { name: "Dev Joshi", role: "VP Finance", project: "Operations", img: dev },
      { name: "Vinesh Ranganathan", role: "Finance Director", project: "Operations", img: vinesh },
      { name: "Sachi Sisodia", role: "VP Community", project: "Operations", img: sachi },
      { name: "Brooke Lai", role: "VP Marketing", project:"Operations", img: logo},
      { name: "Emily Berlinghoff", role: "Marketing Director", project:"Operations", img: emily},
      { name: "Jasmine Vuong", role: "VP Marketing", project:"Operations", img: logo},
      { name: "Lisha Makwana", role: "Marketing Director", project:"Operations", img: lisha},

    ],

    "Summer Term": [],
  },
  "2025-2026": {
    "Fall Term": [],
    "Winter Term": [],
    "Summer Term": [],
  },
};

const Member = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedTerm, setSelectedTerm] = useState("Winter Term");

  // Get members for the selected year and term
  const selectedMembers = membersData[selectedYear][selectedTerm];

  // Group members by project
  const groupedMembers = selectedMembers.reduce((acc, member) => {
    const projectKey = member.project;
    if (!acc[projectKey]) acc[projectKey] = [];
    acc[projectKey].push(member);
    return acc;
  }, {});

  return (
    <section className="member section" id="member">
      <h2 className="section__title">Our Team</h2>

      <div className="year-selector">
        {Object.keys(membersData).map((year) => (
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
        {Object.keys(membersData[selectedYear]).map((term) => (
          <button
            key={term}
            className={`term-button ${selectedTerm === term ? "active" : ""}`}
            onClick={() => setSelectedTerm(term)}
          >
            {term}
          </button>
        ))}
      </div>

      <div className="member__container">
        {selectedMembers.length === 0 ? (
          <h3 className="tba-text">TBA</h3> // Display TBA if no members exist
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
    </section>
  );
};

export default Member;