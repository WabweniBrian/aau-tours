"use client";

import { useCallback } from "react";
import { useModalStore, type ModalType } from "@/lib/store/use-modal-store";

// Hook to use a specific modal type
export const useModal = (modalType: ModalType) => {
  const { type, isOpen, onOpen, onClose } = useModalStore();

  // Check if this specific modal is open
  const open = type === modalType && isOpen;

  // Function to open/close this specific modal
  const onOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        onOpen(modalType);
      } else {
        onClose();
      }
    },
    [modalType, onOpen, onClose],
  );

  return {
    type,
    open,
    onOpenChange,
  };
};
