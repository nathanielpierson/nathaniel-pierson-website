import { useEffect, useRef } from "react";

export function useClickOutside(ref, onClose, enabled) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!enabled) return;

    const handlePointer = (event) => {
      const el = ref.current;
      if (!el || el.contains(event.target)) return;
      onCloseRef.current();
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
    };
  }, [ref, enabled]);
}
