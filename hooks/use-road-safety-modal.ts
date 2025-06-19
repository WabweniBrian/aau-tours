"use client";

import { useState, useEffect } from "react";

interface UseRoadSafetyModalOptions {
  delayMs?: number;
  storagePrefix?: string;
}

export function useRoadSafetyModal({
  delayMs = 10000,
  storagePrefix = "aau-road-safety",
}: UseRoadSafetyModalOptions = {}) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const checkShouldShow = () => {
      const dontShowAgain = localStorage.getItem(`${storagePrefix}-dont-show`);
      const lastShown = localStorage.getItem(`${storagePrefix}-last-shown`);
      const showLater = localStorage.getItem(`${storagePrefix}-show-later`);

      // Don't show if user clicked "Don't show again"
      if (dontShowAgain === "true") {
        return false;
      }

      // If user clicked "Show me later", check if 24 hours have passed
      if (showLater === "true" && lastShown) {
        const lastShownTime = new Date(lastShown).getTime();
        const now = new Date().getTime();
        const hoursPassed = (now - lastShownTime) / (1000 * 60 * 60);

        if (hoursPassed < 24) {
          return false; // Don't show yet
        }
      }

      return true;
    };

    if (checkShouldShow()) {
      const timer = setTimeout(() => {
        setShouldShow(true);
      }, delayMs);

      return () => clearTimeout(timer);
    }
  }, [delayMs, storagePrefix]);

  const handleShowLater = () => {
    localStorage.setItem(`${storagePrefix}-show-later`, "true");
    localStorage.setItem(
      `${storagePrefix}-last-shown`,
      new Date().toISOString(),
    );
    setShouldShow(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem(`${storagePrefix}-dont-show`, "true");
    setShouldShow(false);
  };

  const resetSettings = () => {
    localStorage.removeItem(`${storagePrefix}-dont-show`);
    localStorage.removeItem(`${storagePrefix}-show-later`);
    localStorage.removeItem(`${storagePrefix}-last-shown`);
  };

  return {
    shouldShow,
    setShouldShow,
    handleShowLater,
    handleDontShowAgain,
    resetSettings,
  };
}
