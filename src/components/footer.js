import React from "react";
import '../App.css';

function Info() {
  return (
<>
<div className="section contact" id="contact">
        <div id="map" className="map" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h4 className="contact-title">Send a message</h4>
                <form action>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Name *" required />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email *" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id placeholder rows={7} required defaultValue={""} />
                  </div>
                  <div className="form-group ">
                    <button type="submit" className="form-control btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h4 className="contact-title">Get in touch</h4>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1 icons">
                    <i className="fa fa-mobile" />
                  </div>
                  <div className="col-10 ">
                    <h6 className="d-inline">Phone : <br /> <span className="text-muted">+ (123) 456-789</span></h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1 icons">
                    <i className="fa fa-map-marker" />
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">Address :<br /> <span className="text-muted">12345 Fake ST NoWhere AB Country.</span></h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1 icons">
                    <i className="fa fa-envelope " />
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">Email :<br /> <span className="text-muted">info@website.com</span></h6>
                  </div>
                </div>
                <ul className="social-icons pt-4">
                  <li className="social-item"><a href="/"><i className="fa fa-facebook"/></a></li>
                  <li className="social-item"><a href="/"><i className="fa fa-twitter"/></a></li>
                  <li className="social-item"><a href="/"><i className="fa fa-google"/></a></li>
                  <li className="social-item"><a href="/"><i className="fa fa-instagram"/></a></li>
                  <li className="social-item"><a href="/"><i className="fa fa-github"/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
    <div className="copyrights">
        <p>&copy; Created With <i class="fa fa-heart text-danger"></i> By <a href="https://www.faceprep.in/"><span>FACE Prep</span></a></p>
    </div>
    </footer>
        </>
        );
}

        export default Info;