"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "@/components/modals/settings_modal";
import { CoverImageModal } from "../modals/cover_image_modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};