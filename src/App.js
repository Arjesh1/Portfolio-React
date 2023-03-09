import './App.css';
import './style.css'
import  Header  from "./components/Header";
import  Hero  from "./components/Hero";
import  Skills  from "./components/Skills";
import  Project  from "./components/Project";
import  AboutMe  from "./components/AboutMe";
import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";
import {Routes, Route} from  "react-router-dom"






function App() {
  return (
    <>
      
    <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />


    <div class="wrapper">
        <label for="darkMode">
            <i class="fa-solid fa-toggle-on dark-mode-toggle"></i>
        </label>


        <Header/>

        <Routes>
            <Route path='/home' element={<Hero/>}/> 
            <Route path='skills' element={<Skills/>}/> 
            <Route path='projects' element={<Project/>}/> 
            <Route path='about-me' element={<AboutMe/>}/> 
            <Route path='contact' element={<Contact/>}/>
            
            
        </Routes>
         <Footer/>
         




    </div>

    </>
  );
}

export default App;
