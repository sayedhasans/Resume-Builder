import Logo from "../images/express-resume-high-resolution-logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Contact() {
      
        const navigate = useNavigate();

        const [phone, setPhone] = useState("");

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
            <h2 className="font-semibold text-3xl ">Contact Information</h2>

            <div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address 
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Type your Email "
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2 ">
                    <PhoneInput
                      defaultCountry="in"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                  
                      className=""
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="linkurl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Linkedin Profile Link
                  </label>
                  <div className="mt-2">
                    <input
                      id="linkurl"
                      name="linkurl"
                      type="url"
                      autoComplete="linkurl"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="giturl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Github Profile Link
                  </label>
                  <div className="mt-2">
                    <input
                      type="url"
                      name="giturl"
                      id="giturl"
                      autoComplete="giturl"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="porturl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Portfolio Link
                  </label>
                  <div className="mt-2">
                    <input
                      type="url"
                      name="porturl"
                      id="porturl"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                </div>
                </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
              
                <button onClick={() => navigate("/skills")}
                  type="button"
                  className="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300"
                >
                  Back
                </button>
              <button  type="submit" onClick={() => navigate("/awards")}
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
export default Contact;
