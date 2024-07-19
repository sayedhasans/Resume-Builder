import { Routes, Route } from "react-router-dom";
import Signin from "./Signin page/signin";
import Banner from "./1stpage/banner";
import Navbar from "./1stpage/navbar";
import Signup from "./Signin page/Signup";
import Resume from "./resume templates/resumetemp";
import CV from "./resume templates/cvresume";
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
          <Route path="/detailsfillingpage/*" element ={<DetailsFillingPage />}></Route> 
                  <Route path="/myresume" element={<MyResume/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
