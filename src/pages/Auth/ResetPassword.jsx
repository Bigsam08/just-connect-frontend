/**
 *
 * @returns A component that displays the reset password page
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/Auth/AuthLayout";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import { validateResetPassword } from "../../validation/authValidation";

const ResetPassword = () => {
  const [password, setPasswword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Submit new password

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    const validationErrors = validateResetPassword({
      password,
      confirmPassword,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 lg:space-y-4"
        data-aos="fade-in"
      >
        <h2 className="text-center font-bold text-xl text-brand pb-4">
          Reset Password
        </h2>
        <Input
          label="Password"
          placeholder="Enter new password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPasswword(e.target.value);
            if (errors.password) {
              setErrors((prev) => ({ ...prev, password: "" }));
            }
          }}
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          placeholder="Retype new password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {setConfirmPassword(e.target.value);
             if (errors.confirmPassword) {
               setErrors((prev) => ({ ...prev, confirmPassword: "" }));
             }
          }}
          error={errors.confirmPassword}
        />

        <Button type="submit" className="w-full mt-8">
          {" "}
          Submit
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

export default ResetPassword;
