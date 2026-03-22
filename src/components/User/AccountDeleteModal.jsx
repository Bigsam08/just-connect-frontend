/**
 * @description Delete account confirmation modal (Portal)
 */

import { createPortal } from "react-dom";

const AccountDeletionModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-999 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-lg space-y-4">
        <h2 className="text-lg font-semibold text-red-500">Delete Account</h2>

        <p className="text-sm text-gray-600">This action cannot be undone.</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default AccountDeletionModal;
