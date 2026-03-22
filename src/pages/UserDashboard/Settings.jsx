/**
 * @description User Settings Page, where user gets to update their profile changes
 */

import { useState } from "react";
import { getNameInitials} from "../../libs/getNameInitials"
import AccountDeletionModal from "../../components/User/AccountDeleteModal";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const user = {
    name: "Big Sam",
    email: "bigsam@example.com",
    phone: "+2348000000000",
    location: "Lagos, Nigeria",
    password: "",
    image: "",
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    phone: user.phone || "",
    location: user.location,
    password: "",
    image: user.image || "",
  });
  const navigate = useNavigate();

  // handle input state value
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setForm({
      ...form,
      image: preview,
    });
  };

  // Handle profile settings change
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving settings:", form);
  };

  // Handle delete acoount logic
  const handleDeleteAccount = async () => {
    try {
      console.log("Deleting account...");

      // logout user
      // clear state / cookies

      // redirect
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSave}
      className="w-full max-w-4xl space-y-8"
      data-aos="fade"
    >
      {/* Header */}
      <div className="bg-brand px-4 py-6 rounded-xl text-brand-white">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-200 text-sm">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Info */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-6">
        <h2 className="font-semibold text-lg">Profile Information</h2>

        {/* Profile Image */}
        <div className="flex items-center gap-4">
          {form.image ? (
            <img
              src={form.image}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-full shadow-md flex items-center justify-center text-md font-bold">
              <span>{getNameInitials(user.name)} </span>
            </div>
          )}

          <label className="cursor-pointer bg-gray-100 px-3 py-2 rounded-lg text-sm hover:bg-gray-200">
            Change Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border border-gray-200 bg-white text-sm text-gray-500 rounded-lg outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            readOnly
            className="p-3 border border-gray-200 bg-white text-sm text-gray-500 rounded-lg outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 border border-gray-200 bg-white text-sm text-gray-500 rounded-lg outline-none"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="p-3 border border-gray-200 bg-white text-sm text-gray-500 rounded-lg outline-none"
          />
        </div>
      </section>

      {/* Security */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="font-semibold text-lg">Security</h2>

        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={form.password}
          onChange={handleChange}
          className="p-3 border border-gray-200 bg-white text-sm text-gray-500 rounded-lg outline-none"
        />
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 text-white cursor-pointer text-sm px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </div>

      {/* Danger Zone */}
      <section className="bg-white p-6 rounded-2xl shadow border border-red-100 space-y-4">
        <div>
          <h2 className="font-semibold text-sm text-red-500">Danger Zone</h2>
          <p className="text-sm text-gray-500">
            This action is permanent. Once deleted, your profile, bookings, and
            preferences will be lost.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDeleteModal(true)}
          className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Delete Account
        </button>
      </section>

      {/** Delete modal pop up */}
      <AccountDeletionModal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleDeleteAccount}
      />
    </form>
  );
};

export default Settings;
