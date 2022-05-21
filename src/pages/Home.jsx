import React from "react";
import "../App.css";
import pic from "../laurawalters4.jpeg"
import pdf from "../LauraWalters(1).pdf"

function Home() {
  return (
    <main className="d-flex flex-column align-items-center">
    <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center justify-content-lg-start container">
      <div className="">
      </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start">
        <div class="card w-75 p-4 shadow border-0 d-flex flex-column flex-lg-row" >
         <div className="w-100 w-lg-25 d-flex flex-column align-content-center justify-content-center">
        <img class=" card-image-top rounded" src={pic} alt="Card image cap"/>

          {/* <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
  </div>
  </div>
</div>
<div className="col-12 col-lg-8 card shadow border-0 p-5 h-100 mt-5 mt-lg-0">

<h3 className="mb-5">My Technologies</h3>
<div className="col-12 ">
<i class="devicon-javascript-plain colored tech-i "></i>

<i class="devicon-react-original-wordmark  colored tech-i"></i>

<i class="devicon-php-plain colored tech-i"></i>


<i class="devicon-laravel-plain-wordmark colored tech-i"></i>
          

<i class="devicon-sequelize-plain-wordmark colored tech-i"></i>
          

<i class="devicon-amazonwebservices-plain-wordmark colored tech-i"></i>
          
</div>
<div className="col-12">
<i class="devicon-composer-line-wordmark colored tech-i"></i>
          
<i class="devicon-bootstrap-plain-wordmark colored tech-i"></i>
          
<i class="devicon-git-plain-wordmark colored tech-i"></i>
          
<i class="devicon-github-original-wordmark colored tech-i"></i>
          
<i class="devicon-heroku-plain-wordmark colored tech-i"></i>
          
<i class="devicon-handlebars-plain-wordmark colored tech-i"></i>
</div>
<div className="col-12">
          
<i class="devicon-mongodb-plain-wordmark colored tech-i"></i>
          
<i class="devicon-mysql-plain-wordmark colored tech-i"></i>
          
<i class="devicon-nodejs-plain-wordmark colored tech-i"></i>
          
<i class="devicon-npm-original-wordmark colored tech-i"></i>
          
</div>   
          
          
          
</div>
</div>
<div className="col-11 col-lg-10 card shadow border-0 p-5 h-100 mt-5">
  <h3>About Me</h3>
  <div className="d-flex flex-lg-row flex-column justify-content-between">
  <p className="col-lg-8 col-12">
  I am currently beginning my career in software development. I am completing a full-stack coding bootcamp with the University of Birmingham, and am also completing a level 3 Software Development Technician apprenticeship with Baltic Apprenticeships. I am a fast learner a strong team player, and am building proficiency in JavaScript, Express, React, PHP and Laravel, additionally I also have experience in using AWS JawsDB and S3 Bucket. My diverse experience in the implementation of different programming languages, has enabled me to build a strong understanding of programming concepts early in my career, and I am keen to build on this understanding and progress my career in future roles.
  </p>
  <div className="col-lg-3 col-6">
    <a href={pdf} download={pdf}><button className="custom-orange-btn px-3"> Download Resume</button></a>
  </div>
</div>
</div>

    </main>
  );
}

export default Home;
