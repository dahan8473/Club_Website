import React, { useState } from "react";
import "./member.css";
import david from "../../assets/members/david liu.jpeg";
import justin from "../../assets/members/justin oh.jpeg";
import sarah from "../../assets/members/sarah chiang.jpeg";
import ethan from "../../assets/members/ethan liu.jpeg";
import luca from "../../assets/members/luca duarte.jpeg";
import christopher from "../../assets/members/christopher lam.jpeg";
import anthony from "../../assets/members/anthony lam.jpeg";
import dev from "../../assets/members/dev joshi.jpeg";

const Member = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="member section" id="member">
      <h2 className="section__title">Our Team</h2>

      <div className="member__container container grid">
        
        {/* Member 1 */}
        <div className="member__content">
          <div>
            <img src={david} alt="David Liu" className="member__image" />
            <h3 className="member__title"> David Liu</h3>
            <h4 className="member__subtitle">Founder, Representative</h4>
          </div>

          <span onClick={() => toggleTab(1)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">David Liu</h3>
              <h4 className="member__modal-subtitle">Founder, Representative</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Software Engineering
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>


        {/* Member 2 */}
        <div className="member__content">
          <div>
            <img src={justin} alt="Justin Oh" className="member__image" />
            <h3 className="member__title"> Justin Oh</h3>
            <h4 className="member__subtitle">Co-Founder,  Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(2)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Justin Oh</h3>
              <h4 className="member__modal-subtitle">Co-Founder, Project Manager</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Mechanical Engineering & A.I. Systems Engineering
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>


        {/* Member 3 */}
        <div className="member__content">
          <div>
            <img src={sarah} alt="Sarah Chiang" className="member__image" />
            <h3 className="member__title">Sarah Chiang</h3>
            <h4 className="member__subtitle">Co-Founder, Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(3)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Sarah Chiang</h3>
              <h4 className="member__modal-subtitle">Co-Founder, Project Manager</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Computer Science
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Member 4 */}
        <div className="member__content">
          <div>
            <img src={ethan} alt="Ethan Liu" className="member__image" />
            <h3 className="member__title"> Ethan Liu</h3>
            <h4 className="member__subtitle">Co-Founder, Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(4)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Ethan Liu</h3>
              <h4 className="member__modal-subtitle">Co-Founder, Project Manager</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Software Engineering
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Member 5 */}
        <div className="member__content">
          <div>
            <img src={luca} alt="Luca Duarte" className="member__image" />
            <h3 className="member__title"> Luca Duarte</h3>
            <h4 className="member__subtitle">Co-Founder, Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(5)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Luca Duarte</h3>
              <h4 className="member__modal-subtitle">Co-Founder, Project Manager</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Computer Science
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Member 6 */}
        <div className="member__content">
          <div>
            <img src={christopher} alt="Christopher Lam" className="member__image" />
            <h3 className="member__title">Christopher Lam</h3>
            <h4 className="member__subtitle">Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(6)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Christopher Lam</h3>
              <h4 className="member__modal-subtitle">Project Manager</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Software Engineering
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Member 7 */}
        <div className="member__content">
          <div>
            <img src={anthony} alt="Anthony Lam" className="member__image" />
            <h3 className="member__title">Anthony Lam</h3>
            <h4 className="member__subtitle">Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(7)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 7
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Anthony Lam</h3>
              <h4 className="member__modal-subtitle">Project Manager</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Software Engineering
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Member 8 */}
        <div className="member__content">
          <div>
            <img src={dev} alt="Dev Joshi" className="member__image" />
            <h3 className="member__title">Dev Joshi</h3>
            <h4 className="member__subtitle">VP Finance</h4>
          </div>

          <span onClick={() => toggleTab(8)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 8
                ? "member__modal active-modal"
                : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Dev Joshi</h3>
              <h4 className="member__modal-subtitle">VP Finance</h4>

              <ul className="member__modal-services grid">

                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 2nd Year Business Management & Organizational Studies
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Member;
