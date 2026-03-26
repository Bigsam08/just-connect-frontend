/**
 * @description Handles the settings page of the professional details
 */


import { useState } from "react";
import ProfilePictureUploader from "../../components/Professional/ProfilePictureUploader";


const Settings = () => {

  const user = {
    name: "Amaka Oluchi",
    email: "uel@gmail.com"
  }
  //  Profile
  const [profile, setProfile] = useState({
    name: user.name || "",
    phone: "",
    about: "",
    skill: "",
    location: "",
    profileImageUrl: "",
  });

  // Password
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });


  // Handlers
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async () => {
    // TODO: connect to backend PUT /api/professional/profile
    console.log("Profile updated", profile);
  };

  const handlePasswordSubmit = async () => {
    // TODO: connect to backend PUT /api/auth/change-password
    console.log("Password updated", password);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6">
      {/* Profile Info */}
      <section className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-6" data-aos="fade">
        <h2 className="text-lg font-semibold text-gray-800">
          Profile Information
        </h2>

        {/* Profile Picture */}
        <ProfilePictureUploader
          currentImage={profile.profileImageUrl}
          onUpload={(url) => setProfile({ ...profile, profileImageUrl: url })}
        />

        {/* Profile Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full Name"
            value={profile.name}
            onChange={handleProfileChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-500 focus:outline-1 outline-orange-500"
          />
          <input
            name="email"
            placeholder={user.email}
            value={user.email}
            readOnly
            className="p-3 bg-gray-200 border border-gray-200 rounded-xl focus:none outline-0"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={profile.phone}
            onChange={handleProfileChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-500 focus:outline-1 outline-orange-500"
          />
          <input
            name="skill"
            placeholder="Skill"
            value={profile.skill}
            onChange={handleProfileChange}
            className="p-3 border border-gray-200 rounded-xl text-gray-500 focus:outline-1 outline-orange-500"
          />
          <input
            name="location"
            placeholder="Ikeja, Lagos"
            onChange={handleProfileChange}
            value={profile.location}
            className="p-3 border border-gray-200 rounded-xl text-gray-500 focus:outline-1 outline-orange-500"
          />

          <textarea
            name="about"
            placeholder="Tell clients about yourself"
            onChange={handleProfileChange}
            value={profile.about}
            className="p-3 border border-gray-500 rounded-xl md:col-span-2"
          />
        </div>

        <button
          onClick={handleProfileSubmit}
          className="mt-4 px-5 py-3 bg-black text-white rounded-xl text-sm hover:bg-green-500 cursor-pointer"
        >
          Save Profile
        </button>
      </section>

      {/* Password */}
      <section className="border border-gray-200 rounded-2xl p-6 shadow-sm" data-aos="fade">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Change Password
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={password.currentPassword}
            onChange={handlePasswordChange}
            className="p-3 bg-gray-200 focus:outline outline-orange-500 rounded-xl"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={password.newPassword}
            onChange={handlePasswordChange}
            className="p-3 bg-gray-200 focus:outline outline-orange-500 rounded-xl"
          />
        </div>

        <button
          onClick={handlePasswordSubmit}
          className="mt-4 px-5 py-2 bg-black hover:bg-green-500 text-white rounded-xl text-sm"
        >
          Update Password
        </button>
      </section>
    </div>
  );
};

export default Settings;
