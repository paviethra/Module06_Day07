import React from "react";
import '../App.css';

function Info(){
return(
<>

  <div className="container">

      <div className="">  {/* div for form tag */}
        <form>

          <div>
            <input type="text" className="form-control" placeholder="Your Name" />
            <label className="webform-label">Full Name</label>
          </div>

          <div>
            <input type="email" className="form-control" placeholder="Your Email"/>
            <label className="webform-label"> Your Email </label>
          </div>

          <div>
            <textarea className="form-control" placeholder="Your Message" />
            <label className="webform-label"> Message </label>
          </div>

          <button class="btn" type="submit" className="form-control" id="submit-button" name="submit" > Send </button>

        </form>
      </div>

    
      <div> {/* div for contact area */}
        <h3>Say hello</h3>
        <p>010-020-0340</p>
        
        <div className="websites">
            <a href="https://www.linkedin.com" > <i className="fa fa-linkedin" /> </a>
            <a href="https://github.com">  <i className="fa fa-github" />  </a>
            <a href="https://twitter.com"> <i className="fa fa-twitter" />  </a>
        </div>
 
        <p> Copyright © 2020 Ben Resume Page</p>
      </div>

  </div>

</>
);
}

export default Info;