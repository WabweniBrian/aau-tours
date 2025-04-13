import { create } from "zustand";

// Define all modal types in your application
export type ModalType =
  | "basic"
  | "custom"
  | "tabbed"
  | "fullscreen"
  | "drawer"
  | "form";

interface ModalStore {
  // Which modal is currently open
  type: ModalType | null;

  // Whether the modal is open
  isOpen: boolean;

  // Function to open a specific modal
  onOpen: (type: ModalType) => void;

  // Function to close the current modal
  onClose: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,

  onOpen: (type) => set({ type, isOpen: true }),
  onClose: () => set({ type: null, isOpen: false }),
}));
