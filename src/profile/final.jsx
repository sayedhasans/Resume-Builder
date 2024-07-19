import { Link ,useNavigate } from "react-router-dom";
import resimage2 from "../images/modern-resume-template.png"
import Logo from "../images/express-resume-high-resolution-logo.png"
import Resume from "./print";
function Final(){
    const navigate = useNavigate();
    return(
        <div>
             <div className="bg-pink-200 p-8 flex justify-around items-center font-semibold">
          <Link to="/">
          <img src={Logo} alt="" className="w-[100px] "/>
          </Link>
          <p>Change Templates</p>
          
        </div>
        <div className=" p-8 flex justify-around items-center font-semibold text-xl"><button onClick={()=>navigate("/preview")} className="text-blue-700">Preview</button>
            <p className="text-blue-700">Edit</p>
        </div>
        <div className="flex flex-col ml-44 justify-center items-start">
            <h2 className="text-3xl font-extrabold p-5 ">Congratulations</h2>
            <img src={resimage2} alt="resume" className="w-[40%] border border-black" />
            
            <p className="text-gray-700 text-xl p-5">Your resume is ready for download. Get it in any format of your choice</p>
            <button className="bg-orange-500 text-white p-5 rounded-2xl px-8">Download</button>
            <Resume/>
            <button onClick={()=>navigate("/awards")} className="border bg-green-500 mt-5 px-14 p-2 text-white rounded-2xl">Back</button>
        </div>
        </div>
    )
}
export default Final;