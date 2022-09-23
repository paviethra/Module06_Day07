import './App.css';
import {Routes,Link,Route } from "react-router-dom";
import Detail from './components/about';
import Info from './components/footer';

function App() {
  
function Home(){
return(
<>
<div className='head-container'>
    <div class="header-content">
      <h4 class="header-subtitle" >Hello, I am</h4>
      <h1 class="header-title">John Doe</h1>
      <h6 class="header-mono" >Frond end Designer | Developer</h6>
      <button className="btn btn-rounded"><i class="fa fa-print pr-2 "></i>Print Resume</button>
    </div>
    <div className='profile-image'>
        <img className="img-rounded" src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt="" width="320" height="320" />
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

  function About(){
    return(
    <Detail />
    );
  }

 function Contact(){
  return (
    <Info/>
  ); 
  }


  return (
  <>

    <nav className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <h2 className='navbar-brand'>Blog Website</h2>
        </div>
          <ul className='nav navbar-nav'>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </nav>

    <Routes>
      <Route path ="/" exact element={<Home/>}  />
      <Route path ="/about"  element={<About/>}/>
      <Route path ="/contact"  element={<Contact/>}/>
  </Routes> 
  </>
  );
}

export default App;
