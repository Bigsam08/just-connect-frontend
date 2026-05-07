/**
 * @description Register component with account type selection
 */

import { useState } from "react";
import AuthLayout from "../../components/Auth/AuthLayout";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import { Link } from "react-router-dom";
import { validateRegister } from "../../validation/authValidation";
import CategorySelect from "../../components/Auth/CategorySelect";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { authApi } from "../../api/authApi";
import { useNotificationStore } from "../../store/notificationStore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { showNotification } = useNotificationStore();
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState(""); // "user" | "professional"
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    category_id: "", // only for professionals
    location: "", // Only for professionals
  });

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateRegister(formData, accountType);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const { confirmPassword: _confirmPassword, ...userData } = formData;
      const payload = {
        ...userData,
        role: accountType,
      };
      const res = await authApi.register(payload);
      showNotification(res.message, "success");
      navigate("/login");
    } catch (error) {
      showNotification(error.message, "error");
      // show backend error to UI
      setErrors((prev) => ({
        ...prev,
        general: error.message,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      {!accountType ? (
        // ===== STEP 1: Choose account type =====
        <div className="text-center space-y-6">
          <h2 className="text-lg md:text-2xl font-bold">Choose Account Type</h2>

          <p className="text-gray-500 text-sm">
            To get started, pick the type of account you want to create.
          </p>

          <div className="flex flex-col gap-4 justify-center mt-6">
            <button
              onClick={() => setAccountType("user")}
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition cursor-pointer"
            >
              👤 User
              <p className="text-sm text-gray-400 mt-2">
                Find and hire professional
              </p>
            </button>

            <button
              onClick={() => setAccountType("professional")}
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition cursor-pointer"
            >
              🛠 Professional
              <p className="text-sm text-gray-400 mt-2">
                Offer your skills and get clients
              </p>
            </button>
          </div>
        </div>
      ) : (
        // ===== STEP 2: Show form =====
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-md text-brand md:text-xl font-semibold capitalize">
              {accountType} Registration
            </h2>

            <button
              type="button"
              onClick={() => setAccountType("")}
              className="text-sm text-gray-400 hover:underline"
            >
              Change
            </button>
          </div>

          <Input
            label="Full Name"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <Input
            label="Email address"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Password"
              placeholder="Min of 6 characters"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              placeholder="Retype password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>

          {/* Only show for artisans  skills + location*/}
          {accountType === "professional" && (
            <div className="grid grid-cols-2 gap-3">
              <CategorySelect
                value={formData.category_id}
                onChange={handleChange}
                error={errors.category_id}
              />
              <Input
                label="Location"
                placeholder="Lagos, Nigeria"
                name="location"
                value={formData.location}
                onChange={handleChange}
                error={errors.location}
              />
            </div>
          )}

          {/** TERMS & POLICIES */}
          <div className="text-sm text-gray-500 mt-4">
            By signing up, you agree to our{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Privacy Policy
            </a>
            .
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full mt-8 disabled:cursor-not-allowed"
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};

export default Register;
