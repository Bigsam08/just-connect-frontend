
/**
 * @description Building our own custom notification toast
 */

import { create } from "zustand";

export const useNotificationStore = create((set) => ({
  isOpen: false,
  message: "",
  type: "success", // success | error
  onConfirm: null,

  showNotification: (message, type = "success", onConfirm = null) =>
    set({
      isOpen: true,
      message,
      type,
      onConfirm,
    }),

  closeNotification: () =>
    set({
      isOpen: false,
      message: "",
      onConfirm: null
    }),
}));
