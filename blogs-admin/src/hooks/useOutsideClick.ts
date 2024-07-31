import { useEffect, useRef } from "react";

const useOutsideAlerter = (
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setState(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setState]);
  return ref;
};

export default useOutsideAlerter;
