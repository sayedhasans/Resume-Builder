import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/express-resume-high-resolution-logo.png"
import { useNavigate,  } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();

  const [companyInfo, setCompanyInfo] = useState([{ jobtitle: "", employer: "", city : "", country : "" , start:"", end: "" }]);
// updates the state with user's input
const handleAddCompany = () =>
    setCompanyInfo([...companyInfo, { jobtitle: "", employer: "", city : "", country : "" , start:"", end: "" }]);

// removes a selected item from the list
const handleRemoveCompany = (index) => {
    const list = [...companyInfo];
    list.splice(index, 1);
    setCompanyInfo(list);
};
// updates an item within the list
const handleUpdateCompany = (e, index) => {
    const { name, value } = e.target;
    const list = [...companyInfo];
    list[index][name] = value;
    setCompanyInfo(list);
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
        <div className="flex justify-around p-10">
          <div>
            <li className="border border-indigo-500 p-12 space-y-8 list-none text-center">
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white ">
                Personal Information
              </ul>
              <ul className="border border-red-400 p-5 hover:bg-red-500 hover:text-white">
                Education
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
            <h2 className="font-semibold text-3xl ">Experience Details</h2>

            <div>
            {companyInfo.map((company, index) => (
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3" key={index}>
                  <label
                    htmlFor="job-title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="jobtitle"
                      id="jobtitle"
                      placeholder="Front-End Developer"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateCompany(e, index)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="Employer"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Employer
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="employer"
                      id="employer"
                      placeholder="Employer Name"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateCompany(e, index)}/>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="City"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      placeholder="Coimbatore"
                      type="text"
                      autoComplete="City"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateCompany(e, index)} />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="country"
                      placeholder="India"
                      id="country"
                      autoComplete="country"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateCompany(e, index)} />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="start"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="Date"
                      name="start"
                      id="start"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateCompany(e, index)}/>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="work-year"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End Date
                  </label>
                  <div className="mt-2">
                    
                    <input
                      type="Date"
                      name="end"
                      id="end"
                      autoComplete="work-year"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateCompany(e, index)}/><p>
                        <input type="checkbox" name="year" id="year" className="mt-3"/> I Currently work here</p>

                  </div> 
                  
                  <div className='flex justify-evenly items-center '>
                        {companyInfo.length - 1 === index && companyInfo.length < 5 && (
                            <button id='addBtn' onClick={handleAddCompany} className="border-green-500 border-2 p-2 px-3 mt-3 font-medium hover:bg-green-500 hover:text-white">
                                Add
                            </button>
                        )}
                        {companyInfo.length > 1 && (
                            <button id='deleteBtn' onClick={() => handleRemoveCompany(index)} className="border-red-500 border-2 p-2 px-3 mt-3 font-medium hover:bg-red-500 hover:text-white">
                                Delete
                            </button>
                        )}
                    </div>
                  
                </div>
              </div> 
                ))}
           
            </div>
            <div className="mt-6 flex items-center justify-between gap-x-6">
             
                <button onClick={() => navigate("/education")}
                  type="button"
                  className="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300"
                >
                  Back
                </button>
         
              <button
                type="submit" onClick={() => navigate("/skills")}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Experience;
