import { useState, useEffect } from "react";
import Logo from "../images/facebook.svg";
import Logo2 from "../images/instagram.svg";
import Logo3 from "../images/linkedin.svg";
import 'bootstrap-icons/font/bootstrap-icons.css';
function Footer() {
  const initialValues = { username: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = <p className="text-red-500">Name is required!</p>;
    }
    if (!values.email) {
      errors.email = <p className="text-red-500">Email is required!</p>;
    } else if (!regex.test(values.email)) {
      errors.email = (
        <p className="text-red-500">This is not a valid email format!</p>
      );
    }
    return errors;
  };
  return (
    <div className="  bg-gray-100 min-h-40 p-3">
      <div className=" flex justify-evenly items-center">
        <div className="space-y-5">
          <p>Mobile No : +91-9566754875</p>
          <p>Email Id : hasan786619@gmail.com</p>
          <p>Location : 1/23 , Coimbatore city , Tamilnadu-641035 , India. </p>
          <div className="flex space-x-2">
          <i class="bi bi-facebook text-blue-700 text-2xl"></i>
          <i class="bi bi-instagram text-pink-600 text-2xl"></i>
          <i class="bi bi-linkedin text-blue-800 text-2xl"></i>
          </div>
        </div>

        <div className="border border-black px-5 w-[800px]">
          <div className="flex flex-col items-center justify-center ">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="p-3 text-xl text-red-500">Send the message successfully</div>
            ) : (
              <pre>{JSON.stringify()}</pre>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold py-2">Reach Us by Email</h1>
            <div className="flex flex-col space-y-2 ">
              <label htmlFor="Name">Name : </label>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                placeholder=" Enter your name"
                className="p-2"
              />

              <p>{formErrors.username}</p>
              <label htmlFor="email">E-Mail address : </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your mail"
                className="p-2"
              />

              <p>{formErrors.email}</p>
              <label htmlFor="Message">How can we help you ? </label>
              <textarea placeholder="Type your message" className="p-2 " />
              <div className=" flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-red-500 text-white p-2 w-28 mb-2 hover:bg-red-800 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Footer;
