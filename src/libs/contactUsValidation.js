/**
 * @description Set the rues for the contact page validation in th landing page
 */

export const contactUsValidation = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "Full name is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email address";
  }

  if (!data.message || data.message.trim() === ""){
    errors.message = "Message cannot be empty"
  }

  return errors;
};
