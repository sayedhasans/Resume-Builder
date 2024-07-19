import Logo from "../images/express-resume-high-resolution-logo.png"
import { Link , useNavigate } from "react-router-dom";

function Awards() {
  const navigate = useNavigate();
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
            <h2 className="font-semibold text-3xl ">Awards/Certification</h2>

            <div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="organise"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name of Organisation
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="organise"
                      id="organise"
                      placeholder="Organisation Name "
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="awatit"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Award Title (Optional)
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="awatit"
                      id="awatit"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="acquis"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of Acquisition
                  </label>
                  <div className="mt-2">
                    <input
                      id="acquis"
                      name="acquis"
                      type="date"
                      autoComplete="acquis"
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="descr"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    
              <textarea placeholder="Type your message"  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                     
                  </div>
                </div>

               
                </div>
                </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
                <button onClick={() => navigate("/contact")}
                  type="button"
                  className="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300"
                >
                  Back
                </button>
              
              <button
                type="submit" onClick={() => navigate("/preview")}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Preview
              </button>
  <button       type="submit" onClick={() => navigate("/final")}
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
export default Awards;
