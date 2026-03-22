/**
 * @description This file sets validation for all auth actions
 *              Login, Register, Forgot password, Reset Password
 */

/**
 * @description Auth validation functions
 */

export const validateLogin = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateRegister = (data, role) => {
  const errors = {};

  // ===== Common fields for all roles =====
  if (!data.name) {
    errors.name = "Full name is required";
  } else if (data.name.length < 6) {
    errors.name = "Name must be at least 6 characters";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password should be at least 6 characters long";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (data.password !== data.confirmPassword) {
    errors.password = "Passwords do not match";
    errors.confirmPassword = "Passwords do not match";
  }

  // ===== Role-specific validation =====
  if (role === "professional") {
    if (!data.skill || data.skill.trim() === "") {
      errors.skill = "Primary skill is required";
    }

    // validate location
    if (!data.location || data.location.trim() === "") {
      errors.location = "Location is required";
    }
  }
  return errors;
};

export const validateForgotPassword = (email) => {
  const errors = {}

   if (!email) {
     errors.email = "Email is required";
   } else if (!/\S+@\S+\.\S+/.test(email)) {
     errors.email = "Invalid email address";
   }

  return errors;
}

export const validateResetPassword = (data) => {
  const errors = {}

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password should be at least 6 characters long";
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (data.password !== data.confirmPassword) {
    errors.password = "Passwords do not match";
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
