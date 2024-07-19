import { Routes, Route } from "react-router-dom";
import Signin from "./Signin page/signin";
import Banner from "./1stpage/banner";
import Navbar from "./1stpage/navbar";
import Signup from "./Signin page/Signup";
import Resume from "./resume templates/resumetemp";
import CV from "./resume templates/cvresume";
import PersonForm from "./profile/personaldetails";
import Education  from "./profile/education";
import Experience from "./profile/experience";
import Skills from "./profile/skills";
import Contact from "./profile/contact";
import Awards from "./profile/Awards";
import Final from "./profile/final";
import Preview from "./resume templates/preview";
import MyResume from './Components/ResumeDisplay/MyResume';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import './App.css';
function App() {
  return (
    <div>
       <div> 
          <Navbar/>
        </div>
    
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Resume" element ={<Resume/>}> </Route>
          <Route path= "/CV" element ={<CV/>}> </Route>
          <Route path ="/personaldetails" element ={<PersonForm/>}></Route>
          <Route path="/Education" element ={<Education/>}></Route>
          <Route path="/Experience" element ={<Experience/>}></Route>
          <Route path="/skills" element = {<Skills/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path="/awards" element = {<Awards/>}></Route>
          <Route path="/final" element = {<Final/>}></Route>
          <Route path="/preview" element = {<Preview/>}></Route>
          <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
