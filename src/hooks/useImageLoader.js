import { useRef, useEffect } from "react";

export default function useImageLoader() {
  const urlsRef = useRef([]);

  function create(file) {
    const url = URL.createObjectURL(file);
    urlsRef.current.push(url);
    return url;
  }

  // Auto cleanup on unmount
  useEffect(() => {
    return () => {
      urlsRef.current.forEach(u => URL.revokeObjectURL(u));
      urlsRef.current = [];
    };
  }, []);

  return { create };
}
