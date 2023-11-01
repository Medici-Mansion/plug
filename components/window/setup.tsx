"use client";
import React, { useCallback, useEffect } from "react";

const Setup = () => {
  const handleDrag = useCallback((event: DragEvent) => {
    event.preventDefault();
  }, []);
  useEffect(() => {
    document.addEventListener("dragover", handleDrag);
    document.addEventListener("drop", handleDrag);

    return () => {
      document.removeEventListener("dragover", handleDrag);
      document.removeEventListener("drop", handleDrag);
    };
  }, [handleDrag]);
  return <div></div>;
};

export default Setup;
