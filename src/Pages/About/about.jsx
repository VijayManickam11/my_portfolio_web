import React, { useEffect, useState } from "react";
import "../../Styles/style.css";

import bg_1 from "../../Assets/images/bg_1.png";

const AboutPage = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const countTheNumberOfProject = (finalNumber) => {
    let number = 0;

    const interval = setInterval(() => {
      if (number < finalNumber) {
        number++;
        setCurrentNumber(number);
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    countTheNumberOfProject(5);
  }, []);

  const handleDownload = () => {
    const fileUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section
      className="ftco-about img ftco-section ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>

              <img
                className="img d-flex align-self-stretch align-items-center"
                src={bg_1}
                alt="bg_1"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  I am a passionate React.js frontend developer with 1.9 years
                  of professional experience in building and optimizing dynamic,
                  user-friendly web applications. I have successfully
                  contributed to 5 projects, showcasing my skills in designing
                  responsive layouts, integrating APIs, and ensuring seamless
                  user experiences. I am eager to continue enhancing my skills
                  and delivering innovative solutions in web development.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Vijay Manickam</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>January 11, 1998</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span>{" "}
                    <span>Old market, Mettur dam, Salem(dt)</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>636401</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>vijaymanickam1101@gmail.com</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>+91 9080128932</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap d-flex mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="5">
                    {currentNumber}
                  </span>
                  <span className="px-1">Project complete</span>
                </p>
                <p>
                  <a
                    onClick={handleDownload}
                    className="btn btn-primary py-3 px-3"
                    download
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
