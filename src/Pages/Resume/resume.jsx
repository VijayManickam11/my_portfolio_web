import React, { useEffect, useState } from "react";
import "../../Styles/style.css";


const ResumePage = () => {

    const handleDownload = () => {
        const fileUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Resume.pdf";
        link.click();
      };

  return (
  
    <section className="ftco-section ftco-no-pb" id="resume-section">
    	<div className="container">

      <div class="row justify-content-center pb-5">
          <div class="col-md-10 heading-section text-center">          	
            <h2 class="mb-4">Resume</h2>            
          </div>
        </div>
    		
    		<div className="row">
    			<div className="col-md-6">
    				<div className="resume-wrap">
    					<span className="date">2020-2022</span>
    					<h2>Master of Computer Application</h2>
    					<span className="position">Dr.SNS Rajalakshmi College of Arts and Science</span>    					
    				</div>
    				
    			</div>

    			<div className="col-md-6">
    				<div className="resume-wrap ">
    					<span className="date">2016-2019</span>
    					<h2>B.sc Computer Science</h2>
    					<span className="position">Hindustan College of Arts and Science</span>
    					
    				</div>
    				
    			</div>
    		</div>

        <div className="row">
    			<div className="col-md-6">
    				<div className="resume-wrap">
    					<span className="date">2013-2015</span>
    					<h2>Higher Secondary Certificate</h2>
    					<span className="position">Government Higher Secondary School</span>    					
    				</div>
    				
    			</div>

    			<div className="col-md-6">
    				<div className="resume-wrap ">
    					<span className="date">2012-2013</span>
    					<h2>Secondary School Leaving Certificate</h2>
    					<span className="position">Government Higher Secondary School</span>
    					
    				</div>
    				
    			</div>
    		</div>

    		<div className="row justify-content-center mt-5">
    			<div className="col-md-6 text-center ">
    				<p><a onClick={handleDownload} className="btn btn-primary py-4 px-5">Download CV</a></p>
    			</div>
    		</div>
    	</div>
    </section>

  );
};

export default ResumePage;
