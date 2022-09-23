import React from "react";
import '../App.css';

function Detail(){
return(
<>
<div class="container-fluid">
        <div id="about" class="row about-section">
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Who am I ?</h3>
                <div className="line mb-5"></div>
                <h5 class="mb-3">A Web Designer / Developer Located In Our Lovely Earth</h5>
                <p class="mt-20 p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?</p>
                <button class="btn btn-outline-danger"><i class="icon-down-circled2 "></i>Download My CV</button>
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Personal Info</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 09/13/1996</li>
                    <li><span>Email</span> : info@website.com</li>
                    <li><span>Phone</span> : + (123) 456-7890</li>
                    <li><span>Skype</span> : John_Doe </li>
                    <li><span>Address</span> :  12345 Fake ST NoWhere AB Country.</li>
                </ul>
                <ul class="social-icons pt-3">
                    <li className="social-item"><a href="/"><i class="fa fa-facebook"></i></a></li>
                    <li className="social-item"><a href="/"><i class="fa fa-twitter"></i></a></li>
                    <li className="social-item"><a href="/"><i class="fa fa-google"></i></a></li>
                    <li className="social-item"><a href="/"><i class="fa fa-instagram"></i></a></li>
                    <li className="social-item"><a href="/"><i class="fa fa-github"></i></a></li>
                </ul>  
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">My Expertise</h3>
                <span class="line mb-5"></span>
                <div class="row more-about">
                    <div class="col-1 text-danger pt-1"><i class="fa fa-paint-brush"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p class="subtitle"> exercitat Repellendus,  corrupt.</p>
                        <hr/>
                    </div>
                </div>
                <div class="row more-about">
                    <div class="col-1 text-danger pt-1"><i class="fa fa-globe"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p class="subtitle">Lorem ipsum dolor sit consectetur.</p>
                        <hr/>
                    </div>
                </div>
                <div class="row more-about">
                    <div class="col-1 text-danger pt-1"><i class="fa fa-industry"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Digital Marketing</h6>
                        <p class="subtitle">voluptate commodi illo voluptatib.</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!--Resume Section--> */}
    <div class="section" id="resume">
        <div class="container">
            <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Expertise</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="title text-danger">2017 - Present</h6>
                            <p>UX Developer</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                            <hr/>
                            <h6 class="title text-danger">2016 - 2017</h6>
                            <p>Front-end Developer</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                            <hr/>
                            <h6 class="title text-danger">2015 - 2016</h6>
                            <p>UX Designer</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Education</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="title text-danger">2017 - Present</h6>
                            <p>B.E Computer Engineering</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error corrupti recusandae obcaecati odit repellat ducimus cum, minus tempora aperiam at.</p>
                            <hr/>
                            <h6 class="title text-danger">2016 - 2017</h6>
                            <p>Diploma in Computer Engineering</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.</p>
                            <hr/>
                            <h6 class="title text-danger">2015 - 2016</h6>
                            <p>High School Degree</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Skills</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2">
                           <h6>HTML5 &amp; CSS3</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>JavaScript</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>PHP</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>SQL</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Laborum</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Tempora</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                       <div class="card-header">
                            <div className="pull-left language">
                                <h4 class="mt-2">Languages</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2">
                           <h6>English</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" valuenow="25" valuemin="0" valuemax="100"></div>
                            </div>
                            <h6>French</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" valuenow="25" valuemin="0" valuemax="100"></div>
                            </div>
                            <h6>Spanish</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar" valuenow="50" valuemin="0" valuemax="100"></div>
                            </div>
                        </div>
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

export default Detail;