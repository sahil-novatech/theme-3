'use client'
import { useDisclosure } from "@nextui-org/react";
import React, { createContext, useContext, ReactNode } from "react";

type LoginModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  onClose: () => void;
  isMetaOpen: boolean;
  onMetaOpen: () => void;
  onMetaOpenChange: () => void;
  onMetaClose: () => void;
};

const LoginModalContext = createContext<LoginModalContextType | undefined>(undefined);

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
  const {isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {isOpen: isMetaOpen, onOpen: onMetaOpen, onOpenChange: onMetaOpenChange, onClose: onMetaClose } = useDisclosure();

  return (
    <LoginModalContext.Provider value={{ isOpen, onOpen, onOpenChange, onClose, isMetaOpen, onMetaOpen, onMetaOpenChange, onMetaClose }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModalContext = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error("useLoginModalContext must be used within a LoginModalProvider");
  }
  return context;
};