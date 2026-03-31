/**
 * @description This is a component page where professionals can update their services
 *              Add or remove the services they render
 */

import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Plumbing Service",
      active: true,
    },
    {
      id: 2,
      name: "Leak Repair",
      active: false,
    },
  ]);

  const [newService, setNewService] = useState("");

  // Toggle active/inactive
  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)),
    );
  };

  // Delete
  const deleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  // Add new service
  const addService = () => {
    if (!newService.trim()) return;

    const newItem = {
      id: Date.now(),
      name: newService,
      active: true,
    };

    setServices((prev) => [newItem, ...prev]);

    // reset inputs
    setNewService("");
  };

  return (
    <div className="w-full max-w-5xl flex flex-col gap-6" data-aos="fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-md md:text-lg font-semibold text-gray-800">
            My Services
          </h1>
          <span className="text-xs md:text-sm text-gray-500">
            Manage the services you offer
          </span>
        </div>
      </div>

      {/* Add new service */}
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Service name"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm"
        />

        <button
          onClick={addService}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm flex items-center justify-between"
          >
            {/* Left Info */}
            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                {service.name}
              </h2>
              <p className="text-xs text-gray-500">{service.price}</p>

              <span
                className={`text-xs mt-1 inline-block px-2 py-1 rounded-full ${
                  service.active
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {service.active ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleService(service.id)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {service.active ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>

              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Pencil size={18} />
              </button>

              <button
                onClick={() => deleteService(service.id)}
                className="p-2 rounded-lg hover:bg-red-100 text-red-600"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {services.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No services added yet.
        </div>
      )}
    </div>
  );
};

export default Services;