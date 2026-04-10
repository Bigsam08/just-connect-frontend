/**
 * 
 * @returns A component that displays the forgot paswword page
 */

import { useState } from "react";
import AuthLayout from "../../components/Auth/AuthLayout";
import { Link } from "react-router-dom";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import { validateForgotPassword } from "../../validation/authValidation"

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState({})

  // Submit to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate input
    const validationErrors = validateForgotPassword(email);
     if (Object.keys(validationErrors).length > 0) {
       setErrors(validationErrors);
       return;
     }
  }

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 lg:space-y-4"
        data-aos="fade-in"
      >
        <h2 className="text-center font-bold text-xl text-brand pb-4">
          Forgot Password
        </h2>
        <Input
          label="Email address"
          type="email"
          placeholder="Enter registered email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors((prev) => ({ ...prev, email: "" }));
            }
          }}
          error={errors.email}
        />

        <Button type="submit" className="w-full mt-8">
          {" "}
          Reset Password
        </Button>

        <div className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-sm text-center text-gray-500">
            Remember password?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;