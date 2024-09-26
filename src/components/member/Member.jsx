import React, { useState } from "react";
import "./member.css";
import david from "../../assets/members/david liu.jpg";
import justin from "../../assets/members/justin oh.jpg";
import sarah from "../../assets/members/sarah chiang.jpeg";
import ethan from "../../assets/members/ethan liu.jpg";
import luca from "../../assets/members/luca duarte.jpeg";
import christopher from "../../assets/members/christopher lam.jpg";
import anthony from "../../assets/members/anthony lam.jpg";
import dev from "../../assets/members/dev joshi.jpg";
import sachi from "../../assets/members/sachi sisodia.jpg";
import trinity from "../../assets/members/trinity ung.jpg";
import eva from "../../assets/members/eva lin.jpg";
import james from "../../assets/members/nigah tariq.jpg";
import robin from "../../assets/members/robin lee.jpg";
import nigah from "../../assets/members/nigah tariq.jpg";


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
              toggleState === 1 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">David Liu</h3>
              <h4 className="member__modal-subtitle">
                Founder, Representative
              </h4>

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
            <h4 className="member__subtitle">Co-Founder, Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(2)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Justin Oh</h3>
              <h4 className="member__modal-subtitle">
                Co-Founder, Project Manager
              </h4>

              <ul className="member__modal-services grid">
                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 3rd Year Mechanical Engineering & A.I. Systems
                    Engineering
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
              toggleState === 3 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Sarah Chiang</h3>
              <h4 className="member__modal-subtitle">
                Co-Founder, Project Manager
              </h4>

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
              toggleState === 4 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Ethan Liu</h3>
              <h4 className="member__modal-subtitle">
                Co-Founder, Project Manager
              </h4>

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
              toggleState === 5 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Luca Duarte</h3>
              <h4 className="member__modal-subtitle">
                Co-Founder, Project Manager
              </h4>

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
            <img
              src={christopher}
              alt="Christopher Lam"
              className="member__image"
            />
            <h3 className="member__title">Christopher Lam</h3>
            <h4 className="member__subtitle">Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(6)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 6 ? "member__modal active-modal" : "member__modal"
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
              toggleState === 7 ? "member__modal active-modal" : "member__modal"
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
              toggleState === 8 ? "member__modal active-modal" : "member__modal"
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

        {/* Member 9 */}
        <div className="member__content">
          <div>
            <img src={sachi} alt="Sachi Sisodia" className="member__image" />
            <h3 className="member__title">Sachi Sisodia</h3>
            <h4 className="member__subtitle">VP Community</h4>
          </div>

          <span onClick={() => toggleTab(9)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 9 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Sachi Sisodia</h3>
              <h4 className="member__modal-subtitle">VP Community</h4>

              <ul className="member__modal-services grid">
                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 2nd Year Computer Science
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Member 10 */}
        <div className="member__content">
          <div>
            <img src={trinity} alt="Trinity Ung" className="member__image" />
            <h3 className="member__title">Trinity Ung</h3>
            <h4 className="member__subtitle">Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(10)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 10 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Trinity Ung</h3>
              <h4 className="member__modal-subtitle">Project Manager</h4>

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
 {/* Member 11 */}
 <div className="member__content">
          <div>
            <img src={eva} alt="Eva Lin" className="member__image" />
            <h3 className="member__title">Eva Lin</h3>
            <h4 className="member__subtitle">VP Outreach</h4>
          </div>

          <span onClick={() => toggleTab(11)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 11 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Eva Lin</h3>
              <h4 className="member__modal-subtitle">VP Outreach</h4>

              <ul className="member__modal-services grid">
                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: HBA 1
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Member 12 */}
 <div className="member__content">
          <div>
            <img src={nigah} alt="Nigah Tariq" className="member__image" />
            <h3 className="member__title">Nigah Tariq</h3>
            <h4 className="member__subtitle">VP Design</h4>
          </div>

          <span onClick={() => toggleTab(12)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 12 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Nigah Tariq</h3>
              <h4 className="member__modal-subtitle">VP Design</h4>

              <ul className="member__modal-services grid">
                <li className="member__modal-service">
                  <i className="uil uil-check-circle member__modal-icon"></i>
                  <p className="member__modal-info">
                    Major: 2nd Year Computer Science
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>


{/* Member 13 */}
<div className="member__content">
          <div>
            <img src={robin} alt="Robin Lee" className="member__image" />
            <h3 className="member__title">Robin Lee</h3>
            <h4 className="member__subtitle">Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(13)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 13 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">Robin Lee</h3>
              <h4 className="member__modal-subtitle">Project Manager</h4>

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



        {/* Member 14 */}
<div className="member__content">
          <div>
            <img src={james} alt="James Lee" className="member__image" />
            <h3 className="member__title">James Lee</h3>
            <h4 className="member__subtitle">Project Manager</h4>
          </div>

          <span onClick={() => toggleTab(14)} className="member__button">
            View More
            <i className="uil uil-arrow-right member__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 14 ? "member__modal active-modal" : "member__modal"
            }
          >
            <div className="member__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times member__modal-close"
              ></i>

              <h3 className="member__modal-title">James Lee</h3>
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
      </div>
    </section>
  );
};

export default Member;
