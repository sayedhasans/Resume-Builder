import Logo from '../images/express-resume-high-resolution-logo.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Education = () => {
 const navigate = useNavigate();

 const [educationInfo, seteducationInfo] = useState([{ instname: "", qualification: "",location : "",grade : "" , start:"",grayear: "" }]);
// updates the state with user's input
const handleAddeducation= () =>
    seteducationInfo([...educationInfo, { instname: "", qualification: "",location : "",grade : "" , start:"",grayear: ""  }]);

// removes a selected item from the list
const handleRemoveeducation= (index) => {
    const list = [...educationInfo];
    list.splice(index, 1);
    seteducationInfo(list);
};
// updates an item within the list
const handleUpdateeducation= (e, index) => {
    const { name, value } = e.target;
    const list = [...educationInfo];
    list[index][name] = value;
    seteducationInfo(list);
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
            <h2 className="font-semibold text-3xl ">Education Details</h2>

            <div>
            {educationInfo.map((education, index) => (
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 "  key={index}>
                  <label
                    htmlFor="inst-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Institution Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="instname"
                      id="instname"
                      placeholder="College Name"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateeducation(e, index)}/>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="qualification"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Qualification
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="qualification"
                      id="qualification"
                      placeholder="Degree"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateeducation(e, index)}/>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Location
                  </label>
                  <div className="mt-2">
                    <input
                      id="location"
                      name="location"
                      placeholder="Tamil Nadu , India"
                      type="text"
                      autoComplete="location"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateeducation(e, index)}/>
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="grade"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Grade
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="grade"
                      placeholder="CGPA"
                      id="grade"
                      autoComplete="grade"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateeducation(e, index)} />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="start"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Start Year
                  </label>
                  <div className="mt-2">
                    <input
                      type="Date"
                      name="start"
                      id="start"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateeducation(e, index)}/>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="gra-year"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    End Year
                  </label>
                  <div className="mt-2">
                    
                    <input
                      type="Date"
                      name="grayear"
                      id="grayear"
                      autoComplete="gra-year"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleUpdateeducation(e, index)}/><p>
                        <input type="checkbox" name="year" id="year" className="mt-3"/> Currently Enrolled</p>

                  </div>
                  
                  <div className='flex justify-evenly items-center '>
                        {educationInfo.length - 1 === index && educationInfo.length < 5 && (
                            <button id='addBtn' onClick={handleAddeducation} className="border-green-500 border-2 p-2 px-3 mt-3 font-medium hover:bg-green-500 hover:text-white">
                                Add
                            </button>
                        )}
                        {educationInfo.length > 1 && (
                            <button id='deleteBtn' onClick={() => handleRemoveeducation(index)} className="border-red-500 border-2 p-2 px-3 mt-3 font-medium hover:bg-red-500 hover:text-white">
                                Delete
                            </button>
                        )}
                    </div>
                  

                </div>
                
              </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between gap-x-6">
              
                <button onClick={() => navigate("/personaldetails")}
                  type="button"
                  className="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300"
                >
                  Back
                </button>
              
              <button
                type="submit" onClick={()=>navigate("/Experience")}
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
export default Education;
