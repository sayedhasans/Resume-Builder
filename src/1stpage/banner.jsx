
import Footer from "./footer";
import Image from "../images/home-cv-builder-lg@1x.png";
import Image2 from "../images/matching-cover-letter-with-resume.avif";
import Image3 from "../images/home-cv-tips-lg@1x.png";
import Image4 from "../images/customize-icon.png";
import Image5 from "../images/choose-template-icon.png";
import Image6 from "../images/design-formatting-icon.png";
import Image7 from "../images/download-template-icon.png";
import { Link } from "react-router-dom";
import Home from "../Components/SelectTemplate section/Home";
function banner() {
  return (
    <div className=" min-h-80 space-y-10">
     
    <div className="flex flex-col justify-center items-center  text-center   ">
      <p className="text-4xl font-bold p-2 font-serif tracking-wider mt-3">LAND YOUR DREAM JOB WITH</p>
      <p className="text-4xl font-bold text-blue-600 font-serif tracking-wide">EXPRESS RESUME .</p>
          </div>
          <Home/>
    <div className="flex justify-around items-center ">
        <div className="w-[40%]" >
          <p className="text-4xl font-bold">Easy-to-use Resume builder</p>
          <p className="text-xl py-3">With LiveCareer, you can quickly create a Resume that will attract any recruiter’s attention. Explore our professional templates, use tips from Resume writing experts, adapt our sample Resumes for your purposes. Give your application a boost.</p>
          <Link to ="/resume"><button className="bg-orange-500 text-white p-3 px-6 hover:bg-orange-300">Create a Resume</button></Link>
        </div>
        <div className="w-[40%] bg-cyan-100">
              <img src={Image} alt="" />
        </div>
    </div>

 
    <div className="flex justify-around items-center ">
      
        <div className="w-[40%] bg-cyan-500">
              <img src={Image2} alt="" />
        </div>
        <div className="w-[40%]" >
          <p className="text-4xl font-bold">Matching cover letter</p>
          <p className="text-xl py-3">Easily create a memorable cover letter with customizable suggested text in our Cover Letter Builder. Then, choose a design that aligns with your resume for a cohesive professional look.</p>
          <Link to ="/cv"><button className="bg-orange-500 text-white p-3 px-6 hover:bg-orange-300">Create a CV</button></Link>
        </div>
    </div>

    <div className="flex justify-around items-center">
        <div className="w-[40%]" >
          <p className="text-4xl font-bold">Free CV tips from HR professionals</p>
          <p className="text-xl py-3">Stop worrying about how to write a CV that’s efficient and effective. Our CV writing guides will show you exactly how to highlight your strengths and meet all the requirements of the recruitment process.</p>
          <Link to ="/resume"><button className="bg-orange-500 text-white p-3 px-6 hover:bg-orange-300">Create a Resume</button></Link>
        </div>
        <div className="w-[40%] bg-cyan-900">
              <img src={Image3} alt="" />
        </div>
    </div>
    <div className="flex justify-center items-center text-3xl font-bold">
      <p>Make a resume in 4 simple steps</p>
      </div>
      <div className= "flex  space-x-5  ">
        <div className=" flex flex-col text-center text-2xl font-bold space-y-5 items-center"> 
         <img src={Image5} alt="" className="w-[150px]" />
          <p>Pick your favorite template</p>
         </div>
            <div className="flex flex-col text-center items-center text-2xl font-bold space-y-5">
          <img src={Image6} alt="" className="w-[150px]" />
          <p>Choose text to tell your story</p>
          </div>
          <div className=" flex flex-col text-center items-center text-2xl font-bold space-y-5">
          <img src={Image4} alt="" className="w-[150px]"/>
            <p>Customize the design and formatting</p>
          </div>
          <div className="flex flex-col text-center items-center text-2xl font-bold space-y-5">
            <img src={Image7} alt=""className="w-[150px]" />
              <p>Download in any file format you need</p>
            </div>
      </div>
      <div className="flex items-center justify-center">
      <Link to ="/resume" ><button className="bg-blue-500 text-white p-3 text-xl rounded-xl font-bold">Create My Resume</button> </Link>
      </div>
  

    <Footer />
    </div>
  );
}
export default banner;
