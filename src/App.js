import './App.css';
import './style.css'
import  Header  from "./components/Header";
import  Hero  from "./components/Hero";
import  Banner  from "./components/Banner";
import  Project  from "./components/Project";
import  AboutMe  from "./components/AboutMe";
import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";




function App() {
  return (
    <>
      
    <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />


    <div class="wrapper">
        <label for="darkMode">
            <i class="fa-solid fa-toggle-on dark-mode-toggle"></i>
        </label>


        <Header/>
        
        <Hero/>

         <Banner/>

         <Project/>
         
         <AboutMe/>
        
        <Contact/>
         
         <Footer/>
         




    </div>

    </>
  );
}

export default App;
