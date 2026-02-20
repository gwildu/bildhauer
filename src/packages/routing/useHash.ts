import { useEffect, useState } from "react";

/**
 * Custom hook to get the current URL hash and update it when it changes.
 * in next.js use with "use client" directive, otherwise it will cause a hydration error.
 *
 * @returns {string | null} The current URL hash, or null if there is no hash.
 */
export const useHash = () => {
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
};
