import React from "react";
import '../App.css';

function Detail(){
return(
<>
  <div className="container-fluid">
  
    <div>  {/* This div is for adding bio and image details */}

       <div> {/* This div holds personal details */}
        <h3>This is Ben's Resume</h3>
        <p> I'm into Web Development ! I'm pursuing my UG in Information Technology at SPUC College and am passionate about improving my 
            coding skills, developing applications & websites.
        </p>
        <ul>
          <li><strong>Full Name : </strong> Ben Wilson</li>
          <li><strong>Date of Birth:</strong> 26 September 1999</li>
          <li><strong>Website :</strong> company.co</li>
          <li><strong>Email :</strong> hello@company.co</li>
        </ul>
      </div>
    
      <div> {/* This div holds the image */}
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt=""/>
      </div>

    </div>


    <div>

      <div>
        <h3>Web Design</h3>
        <p>
        The design of websites that are displayed on the internet.
        </p>
      </div>

      <div>
        <h3>Developement</h3>
        <p>
        Web development is the work involved in developing a website for the Internet or an Intranet.
        </p>
      </div>

      <div>
        <h3>Content Creation</h3>
        <p>
        Content creation is the contribution of information to any media and most especially to digital media.
        </p>
      </div>

      <div>
        <h3>App Design & Developement</h3>
        <p>
        App design combines the User Interface (UI) and User Experience (UX) and process of installing, configuring, updating, and enabling one application.
        </p>
      </div> 

    </div>
  </div>

</>
);
}

export default Detail;