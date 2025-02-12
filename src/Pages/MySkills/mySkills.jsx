import React, { useEffect, useState } from "react";
import "../../Styles/style.css";


const MySkillsPage = () => {

   

  return (
  
    <section className="ftco-section" id="skills-section">
    <div className="container">
        <div className="row justify-content-center pb-5">
  <div className="col-md-12 heading-section text-center">
      <h1 className="big big-2">Skills</h1>
    <h2 className="mb-4">My Skills</h2>
    <p>Crafting seamless and responsive web experiences with modern front-end technologies.</p>
  </div>
</div>
        <div className="row">
            <div className="col-md-6 animate-box">
                <div className="progress-wrap">
                    <h3>React.js</h3>
                    <div className="progress">
                         <div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                        <span>90%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap">
                    <h3>Node.js</h3>
                    <div className="progress">
                         <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                        <span>50%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap">
                    <h3>Javascript</h3>
                    <div className="progress">
                         <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                        <span>95%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap">
                    <h3>JQuery</h3>
                    <div className="progress">
                         <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                        <span>40%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap">
                    <h3>HTML</h3>
                    <div className="progress">
                         <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                        <span>95%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap">
                    <h3>CSS</h3>
                    <div className="progress">
                         <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                        <span>90%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap ">
                    <h3>Bootstrap</h3>
                    <div className="progress">
                         <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        <span>90%</span>
                          </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 animate-box">
                <div className="progress-wrap ">
                    <h3>MUI - Meterial UI</h3>
                    <div className="progress">
                         <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                        <span>90%</span>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default MySkillsPage;
