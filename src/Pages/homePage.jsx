import React, { useEffect, useState } from "react";
import "../Styles/style.css";
import bg_1 from "../Assets/images/myImage.png";
import ChainImg from "../Assets/images/clean_transparent_chain.png";
import AboutPage from "./About/about";
import ResumePage from "./Resume/resume";
import MySkillsPage from "./MySkills/mySkills";
import ProjectPage from "./Projects/projects";
import "../Assets/Icon/icons.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin , FaInstagramSquare , FaGithubSquare } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import "../Styles/style.css"
import "../Styles/animetion.css"

const HomePage = () => {
   const [animate, setAnimate] = useState(false);

  useEffect(() => {
    
    setAnimate(true);
  }, []);
  return (    
    <>


    <section id="home-section" className="hero">
      <div className="home-slider  owl-carousel">
        <div className="slider-item ">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
<section className="hero-chain-section">
  <div className={`hero-chain-wrapper ${animate ? "hero-chain-drop-swing" : ""}`}>
    {/* Rope Image */}
    <img src={ChainImg} alt="Rope" className="hero-chain-image" />

    {/* ID Card */}
    <div className="hero-chain-card hero-chain-hover-shake">
      <img src={bg_1} alt="Vijay Manickam" className="hero-chain-profile" />
      <div className="hero-chain-info">
        <div class="masking-container">
    <h1 class="masked-text">Vijay Manickam</h1>
</div>
        {/* <h2 className="hero-chain-name wave-text"><span>V</span><span>I</span><span>J</span><span>A</span><span>Y</span> <span>M</span><span>A</span><span>N</span><span>I</span><span>C</span><span>K</span><span>A</span><span>M</span></h2> */}
        <p className="hero-chain-title">Frontend Developer</p>
        <div className="hero-chain-footer">
          <span>Dept. Developer</span>
          <span>ID #000761</span>
        </div>
      </div>
    </div>
  </div>
</section>


              <div className="one-forth d-flex  align-items-center">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Vijay Manickam</span>
                  </h1>
                  <h2 className="mb-4 cursor typewriter-animation">Software Engineer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Page */}

    <AboutPage/>

    <ResumePage/>

    <MySkillsPage/>

    <ProjectPage/>

    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>Hi, I'm Vijay, a passionate Front-End Developer I turn ideas into reality with clean, efficient code and love building great user experiences.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li ><a href="#"><span ><FaLinkedin/></span></a></li>
                <li ><a href="#"><span><FaInstagramSquare/></span></a></li>
                <li ><a href="#"><span><FaGithubSquare/></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="mr-2"></span>Home</a></li>
                <li><a href="#"><span className="mr-2"></span>About</a></li>               
                <li><a href="#"><span className="mr-2"></span>Projects</a></li>
               
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="mr-2"></span>Web Design</a></li>
                <li><a href="#"><span className="mr-2"></span>Web Development</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li className="icon-and-text-email"><span className="icon icon-for-locationText"><IoLocationOutline /></span><span className="text icon-for-locationText">104/A old market, Mettur dam, Salem (dt)</span></li>
	                <li><a href="#"><span className="icon icon-for-locationText"><ImMobile /></span><span className="text">+91 9080128932</span></a></li>
	                <li><a href="#" className="icon-and-text-email"><span className="icon icon-for-locationText"><AiOutlineMail /></span><span className="text icon-for-locationText">vijaymanickam1101@gmail.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
       
      </div>
    </footer>

   


</>
  );
};

export default HomePage;
