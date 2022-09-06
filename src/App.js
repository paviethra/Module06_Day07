import './App.css';
import {Routes,Link,Route } from "react-router-dom";
import Detail from './components/about';
import Info from './components/footer';

function App() {
  
function Home(){
return(
<>
  <div className='container pt-2'>
    <div>
      <img id="profile_image" src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80" alt=""/>
    </div>
    <div>
      <h1>Ben, a digital nomad</h1>
      <a href="/"> hello@company.com </a>
    </div>
  </div>
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
