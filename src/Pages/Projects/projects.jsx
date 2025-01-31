import React, { useEffect, useState } from "react";
import "../../Styles/style.css";
import inspection from "../../Assets/MyProjectImages/inspection.png"
import Motivai from "../../Assets/MyProjectImages/motivai.png"
import Qglider from "../../Assets/MyProjectImages/qglider.png"
import Evcharge from "../../Assets/MyProjectImages/evcharge.png"
import Mhc from "../../Assets/MyProjectImages/Mhc.png"


const ProjectPage = () => {

    
  return (
  
    <section className="ftco-section ftco-project" id="projects-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
          	<h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Our Projects</h2>
            <p>Showcasing innovative and user-friendly web solutions built with modern technologies.</p>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-4">
          <img
                className="project img  d-flex justify-content-center align-items-center"
                src={Mhc}
                alt="Mhc"
              />
					
    				
  				</div>
  				<div className="col-md-8">
					<div className="col-md-12 heading-section">
					
					  <h3 className="mb-4">MyHireCloud</h3>
					  <p>myHireCloud is a platform that facilitates communication and collaboration among home healthcare aides while helping them to showcase their qualifications and find job opportunities that align with their skills and experience.Through the platform, aides can share knowledge and best practices with other aides and professionals in the industry, find jobs, improve their skills, and stay currentReactJS, NodeJs, MongoDB.</p>
					  
					</div>
    			
  				</div>

    			<div className="col-md-8">
    				<div className="project img d-flex justify-content-center align-items-center" >
						<div className="col-md-12 heading-section ">
						
						  <h3 className="mb-4">QGlider</h3>
						  <p>Qglider is a healthcare queue management system for hospitals and clinics. It streamlines patient check-ins (walk-in or online via kiosks/QR codes), reduces waiting times, and enhances productivity. Patients receive updates on their waitlist status via WhatsApp or SMS. The system supports online appointment booking and real-time queue monitoring, allowing hospitals to efficiently manage patient traffic and staff performance excellent analytical and problem-solving skills</p>
						  
						</div>
    					
    				</div>

    				<div className="project img d-flex justify-content-center align-items-center" >
    					<div className="col-md-12 heading-section ">
						
						  <h3 className="mb-4">EVCharge</h3>
						  <p>EVCharge is an app that helps users locate electric vehicle charging stations, save their favorite stations, and pay for charging services. The app offers a comprehensive portal with features like real-time availability, station reviews, navigation assistance, and pricing information. Users can filter stations by charger type, speed, and network, ensuring they find the most suitable option for their needs. The app also supports contactless payments, making the charging process seamless and efficient.</p>
						  
						</div>
    					
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="row">
    					<div className="col-md-12">
              <img
                className="project img  d-flex justify-content-center align-items-center"
                src={Qglider}
                alt="Qglider"
              />
		    				
	    				</div>
	    				<div className="col-md-12">
              <img
                className="project img  d-flex justify-content-center align-items-center"
                src={Evcharge}
                alt="Evcharge"
              />
	    				</div>
    				</div>
    			</div>
				<div className="col-md-4">
        <img
                className="project img  d-flex justify-content-center align-items-center"
                src={inspection}
                alt="inspection"
              />
					
    				
  				</div>
  				<div className="col-md-8">
					<div className="col-md-12 heading-section ">
					
					  <h3 className="mb-4">Inspection</h3>
					  <p>Inspection App is a site survey report management platform it helps to digitalize the site survey and it integrates equipment, user, region, and customer data to facilitate work order creation, site visit scheduling, checklist generation, and certificate issuance within its management.</p>
					  
					</div>
    				
  				</div>

				  <div className="col-md-4">
          <img
                className="project img  d-flex justify-content-center align-items-center"
                src={Motivai}
                alt="Motivai"
              />
					
    			
  				</div>
  				<div className="col-md-8">
					<div className="col-md-12 heading-section">					
					  <h3 className="mb-4">MotivAI</h3>
					  <p>MotivAI is a driving performance application that uses real-time GPS, accelerometer, and gyroscope data to assess driver behavior. As a web developer, I developed a responsive interface using ReactJS, implemented dynamic filters for data visualization, and ensured seamless API integration for an intuitive user experience.</p>
					  
					</div>
    			
  				</div>

    		</div>
    	</div>
    </section>

  );
};

export default ProjectPage;
