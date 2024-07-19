
import { Link, useNavigate } from "react-router-dom";
import Sample from "./skillsearchbar";
import Logo from "../images/express-resume-high-resolution-logo.png"
import { useState } from 'react';

function Skills() {
  const navigate = useNavigate();

  const [skillsInfo, setskillsInfo] = useState([{ skill1: "", skill2: "",skill3 : "",skill4 : "" , skill5:"" }]);
// updates the state with user's input
const handleAddskills= () =>
    setskillsInfo([...skillsInfo, { skill1: "", skill2: "",skill3 : "",skill4 : "" , skill5:""  }]);

// removes a selected item from the list
const handleRemoveskills= (index) => {
    const list = [...skillsInfo];
    list.splice(index, 1);
    setskillsInfo(list);
};
// updates an item within the list
const handleUpdateskills= (e, index) => {
    const { name, value } = e.target;
    const list = [...skillsInfo];
    list[index][name] = value;
    setskillsInfo(list);
};

  return (
    <form>
      <div>
        <div className="bg-pink-200 p-5 flex justify-around items-center font-semibold">
          <Link to="/">
          <img src={Logo} alt="" className="w-[100px] "/>
          </Link>
          <p>Change Templates</p>
        </div>
        <div className="flex justify-evenly p-10">
          <div>
            <li className="border border-indigo-500 p-12 space-y-8 list-none text-center">
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white ">
                Personal Information
              </ul>
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white">
                skills
              </ul>
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white">
                Work Experience
              </ul>
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white">
                Skills
              </ul>
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white">
               Contact 
              </ul>
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white">
              Awards/Certification
              </ul>
            </li>
          </div>

          <div className="space-y-5 border border-indigo-500 p-12">
            <h2 className="font-semibold text-3xl ">Add Your Skills</h2>

            <div>
                {/* search bar reference */}
                <div>

                    <Sample/>
                </div>
                <div className="flex justify-between py-5">
                <button
                  type="button" onClick={() => navigate("/Experience")}
                  className="text-sm font-semibold  px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300"
                >
                  Back
                </button>
              
              <button
                type="submit" onClick={() => navigate("/contact")}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save & Continue
              </button>
              </div>

            </div>
          </div>
          
           {/* Add skill section  */}
          <div className="flex justify-center items-center flex-col border border-indigo-600 p-5 space-y-6">
          
            <h2 className="font-semibold text-2xl ">Type and Add skills here</h2>
            <div>
            {skillsInfo.map((skills, index) => (
              <div>
            <div className="sm:col-span-2" key={index}>
              <label htmlFor="skill1" className="block text-sm font-medium leading-6 text-gray-900">
                Skills
              </label>
              <div className="mt-5 ">
                <input
                type="text"
                  id="skill1"
                  name="skill1"
                  placeholder="HTML"
                  autoComplete="skill1-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => handleUpdateskills(e, index)} ></input>
              </div>
            </div>

            <div className="sm:col-span-3">
             
              <div className="mt-5">
                <input
                type="text"
                  id="skill2"
                  name="skill2"
                  placeholder="CSS"
                  autoComplete="skill2-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => handleUpdateskills(e, index)}></input>
              </div>
            </div>

            <div className="sm:col-span-3">
             
              <div className="mt-5">
                <input
                type="text"
                  id="skill3"
                  name="skill3"
                  placeholder="JavaScript"
                  autoComplete="skill3-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => handleUpdateskills(e, index)}></input>
              </div>
            </div>

            <div className="sm:col-span-3">
              
              <div className="mt-5">
                <input
                type="text"
                  id="skill4"
                  name="skill4"
                  placeholder="Reactjs"
                  autoComplete="skill4-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => handleUpdateskills(e, index)}></input>
              </div>
            </div>

            <div className="sm:col-span-3">
             
              <div className="mt-5">
                <input
                type="text"
                  id="skill5"
                  name="skill5"
                  placeholder="Tailwind css"
                  autoComplete="skill5-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={(e) => handleUpdateskills(e, index)}></input>
              </div>
              </div>

                
              <div className='flex justify-evenly items-center '>
                        {skillsInfo.length - 1 === index && skillsInfo.length < 5 && (
                            <button id='addBtn' onClick={handleAddskills} className="border-green-500 border-2 p-2 px-3 mt-3 font-medium hover:bg-green-500 hover:text-white">
                                Add
                            </button>
                        )}
                        {skillsInfo.length > 1 && (
                            <button id='deleteBtn' onClick={() => handleRemoveskills(index)} className="border-red-500 border-2 p-2 px-3 mt-3 font-medium hover:bg-red-500 hover:text-white">
                                Delete
                            </button>
                        )}
                    </div>
                  

            </div>
            ))}
            </div>
            <div className="mt-6  gap-x-6">
            <div className="flex justify-between py-5 space-x-4">
            
                <button onClick={()=>navigate("/Experience")}
                  type="button"
                  className="text-sm font-semibold  px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300"
                >
                  Back
                </button>
              
              <button onClick={() => navigate("/contact")}
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save & Continue
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
    </form>
  );
}
export default Skills;
