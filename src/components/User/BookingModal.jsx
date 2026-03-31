/**
 * @description Booking modal where user books with an artisan / professional
 */

import { createPortal } from "react-dom";
import { useState } from "react";
import { getNameInitials } from "../../libs/getNameInitials";

const BookingModal = ({ open, onClose, artisan, onConfirm }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    address: "",
    note: "",
  });

  if (!open) return null;

  // Handle form input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit booking
  const handleSubmit = () => {
    onConfirm({ artisanId: artisan.id, ...form });
  };

  return createPortal(
    <div className="fixed inset-0 z-999 flex items-end md:items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-2xl p-6 shadow-lg space-y-5">
        {/* Header */}
        <div>
          <h2 className="text-lg font-semibold">Book Artisan</h2>
          <p className="text-sm text-gray-500">Fill in details to proceed</p>
        </div>

        {/* Artisan Preview */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
          {artisan.img ? (
            <img
              src={artisan.img}
              alt={artisan.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
          ) : (
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl mb-4 bg-gray-200 text-gray-500 text-sm font-bold">
              {getNameInitials(artisan.name)}
            </div>
          )}

          <div>
            <p className="font-medium text-sm">{artisan.name}</p>
            <p className="text-xs text-gray-500">{artisan.skill}</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="address"
            placeholder="Service address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="note"
            placeholder="Additional note (optional)"
            value={form.note}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 hover:bg-red-500 hover:text-white transition-colors cursor-pointer py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-500 hover:bg-green-700 cursor-pointer transition-colors text-white py-2 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default BookingModal;
