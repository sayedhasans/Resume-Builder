import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Signin() {
  const initialValues = { email: "", password: "" };
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
    if (!values.email) {
      errors.email = <p className="text-red-500">Email is required!</p>;
    } else if (!regex.test(values.email)) {
      errors.email = (
        <p className="text-red-500">Please enter correct email format</p>
      );
    }
    if (!values.password) {
      errors.password = <p className="text-red-500">Password is required</p>;
    } else if (values.password.length < 4) {
      errors.password = (
        <p className="text-red-500">
          Password must be more than 4 characters
        </p>
      );
    }
    return errors;
    
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-orange-200 min-h-screen">
     

      <div className="flex flex-col items-center justify-center bg-white min-w-96 min-h-[400px] ">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="p-3 text-xl text-red-500">Sign In successfully</div>
        ) : (
          <pre>{JSON.stringify()}</pre>
        )}

        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-semibold ">
            Sign in to your Account
          </h1>

          <div className="p-3 space-y-4">
            <div className="flex flex-col space-y-1">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                className="p-2 border border-gray-600"
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="flex flex-col space-y-1 ">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                className="p-2 border border-gray-600"
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="flex justify-center items-center ">
              <button className="bg-green-700  hover:bg-green-900 text-white p-2 px-5 ">
                Submit
              </button>
            </div>
            <div className="flex justify-center items-center">
              <p>
                Don't have an account ?
                <Link to="/signup" className="text-blue-500 p-3 ">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
