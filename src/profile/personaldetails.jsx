
import Photo from "../Signin page/coverphoto"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../images/express-resume-high-resolution-logo.png"

const PersonForm = () => {
  const navigate = useNavigate();
    
  return (
    <form>
        <div>
        <div className='bg-pink-200 p-5 flex justify-around items-center font-semibold'>
                <Link to ="/">
                <img src={Logo} alt="" className="w-[100px] "/></Link>
                <p>Change Templates</p>
        </div>
        <div className='flex justify-around p-10'>
            <div>
                <li className='border border-indigo-500 p-12 space-y-8 list-none text-center'>
                    <ul className='border border-red-400 p-5 hover:bg-red-500 hover:text-white '>Personal Information</ul>
                    <ul className='border border-red-400 p-5 hover:bg-red-500 hover:text-white'>Education</ul>
                    <ul className='border border-red-400 p-5 hover:bg-red-500 hover:text-white'>Work Experience</ul>
                    <ul className='border border-red-400 p-5 hover:bg-red-500 hover:text-white'>Skills</ul>
                    <ul className='border border-red-400 p-5 hover:bg-red-500 hover:text-white' >Contact</ul>
                    <ul className='border border-red-400 p-5 hover:bg-red-500 hover:text-white'>Awards/Certification</ul>
                </li>
            </div>

    
      <div className="space-y-5 border border-indigo-500 p-12">   
        <h2 className="font-semibold text-3xl ">Personal Information</h2>           
          <Photo />
	

        <div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Sayed"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Hasan"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

       

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <input
                type="text"
                  id="country"
                  name="country"
                  placeholder="India"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

          

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  placeholder="Coimbatore"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  placeholder="Tamilnadu"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  placeholder="641035"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      <div className="mt-6 flex items-center justify-between gap-x-6">
        <Link to = "/Resume"><button type="button" className="text-sm font-semibold leading-6 px-3 py-2 rounded-md bg-red-400 text-white hover:bg-red-300">
          Back
        </button></Link>
      <button onClick={()=>navigate("/Education")}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save & Continue
        </button>
      </div>
      </div>
      </div>
      </div>
    </form>
  )
}
export default PersonForm;
