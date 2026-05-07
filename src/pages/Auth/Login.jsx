/**
 * @description Builds the Login page for our app,
 *              A universal authLayout  and a children form field passed
 */

import { useState } from "react";
import AuthLayout from "../../components/Auth/AuthLayout";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { Link, useNavigate } from "react-router-dom";
import { validateLogin } from "../../validation/authValidation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNotificationStore } from "../../store/notificationStore";
import useAuthStore from "../../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [errors, setErrors] = useState({});
  const [loggingIn, setLoggingIn] = useState(false);
  const { showNotification } = useNotificationStore();
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

  const SubmitLoginData = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(loginData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoggingIn(true);
    try {
      const res = await login(loginData);
      showNotification(res.message, "success");
      navigate(`/dashboard/${res?.user?.role}`);
    } catch (error) {
      showNotification(error.message, "error");
      // show backend error to UI
      setErrors((prev) => ({
        ...prev,
        general: error.message,
      }));
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={SubmitLoginData}
        className="space-y-2 lg:space-y-4"
        data-aos="fade-in"
      >
        <h2 className="text-center font-bold text-xl text-brand pb-4">
          {" "}
          Login{" "}
        </h2>
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

        <Button
          disabled={loggingIn}
          type="submit"
          className="w-full mt-8 disabled:cursor-not-allowed"
        >
          {!loggingIn ? (
            "Login"
          ) : (
            <AiOutlineLoading3Quarters className="animate-spin" />
          )}
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
