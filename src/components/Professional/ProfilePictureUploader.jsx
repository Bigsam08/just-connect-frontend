/**
 * @description A reuseable profile image uploader built to be used in the professional settings page
 */

import { useRef, useState } from "react";
import { Camera, Loader2 } from "lucide-react";
import { getNameInitials } from "../../libs/getNameInitials";

const ProfilePictureUploader = ({ currentImage, onUpload }) => {
  const user = {
    name: "Agbebi Oluwashola",
  };
  const [preview, setPreview] = useState(currentImage || null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  // Trigger file picker
  const handlePickImage = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  // Upload
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("profileImage", file);

      const res = await fetch("/api/professional/profile-picture", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success && data.imageUrl) {
        onUpload(data.imageUrl);
        setFile(null);
      } else {
        alert("Failed to upload image");
      }
    } catch (err) {
      console.error(err);
      alert("Upload error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="relative">
        {preview ? (
          <img
            src={preview}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border"
          />
        ) : (
          <div className="w-28 h-28 rounded-full flex items-center justify-center border border-gray-300 bg-gray-200 text-md font-semibold">
            {getNameInitials(user.name)}
          </div>
        )}

        {/* Overlay Camera Button */}
        <button
          onClick={handlePickImage}
          className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-md hover:scale-105 transition"
        >
          <Camera size={16} />
        </button>
      </div>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading || !file}
        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm hover:opacity-90 disabled:opacity-50"
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? "Uploading..." : "Save Changes"}
      </button>
    </div>
  );
};

export default ProfilePictureUploader;
