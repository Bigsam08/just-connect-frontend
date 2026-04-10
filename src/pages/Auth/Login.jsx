/**
 * @description Builds the Login page for our app,
 *              A universal authLayout  and a children form field passed
 */

import { useState } from "react";
import AuthLayout from "../../components/Auth/AuthLayout";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { Link } from "react-router-dom";
import { validateLogin } from "../../validation/authValidation";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle user input state
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SubmitLoginData = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(loginData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={SubmitLoginData} className="space-y-2 lg:space-y-4" data-aos="fade-in">
        <h2 className="text-center font-bold text-xl text-brand pb-4"> Login </h2>
        <Input
          label="Email address"
          type="email"
          placeholder="Enter email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <p className="text-sm text-gray-400 text-end hover:underline">
          <Link to="/forgot-password"> Forgot password?</Link>
        </p>

        <Button type="submit" className="w-full mt-8">
          {" "}
          Login
        </Button>

        <div className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-500 hover:underline">
              Join now
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
