"use client";
import { useLayoutEffect } from "react";

export const useBodyScrollLock = () => {
  useLayoutEffect((): any => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
