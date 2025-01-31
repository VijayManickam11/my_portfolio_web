import React, { useEffect, useState } from "react";
import "../Styles/style.css";
import bg_1 from "../Assets/images/bg_1.png";
import AboutPage from "./About/about";
import ResumePage from "./Resume/resume";
import MySkillsPage from "./MySkills/mySkills";
import ProjectPage from "./Projects/projects";
import "../Assets/Icon/icons.css"

const HomePage = () => {
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
              <img
                className="one-third js-fullheight order-md-last img"
                src={bg_1}
                alt="bg_1"
              />

              <div className="one-forth d-flex  align-items-center">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Vijay Manickam</span>
                  </h1>
                  <h2 className="mb-4">Software Engineer</h2>
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
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li ><a href="#"><span className="icon-twitter"></span></a></li>
                <li ><a href="#"><span className="icon-facebook"></span></a></li>
                <li ><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>About</a></li>               
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Projects</a></li>
               
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Design</a></li>
                <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">104/A old market, Mettur dam, Salem (dt)</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 9080128932</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">vijaymanickam1101@gmail.com</span></a></li>
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
