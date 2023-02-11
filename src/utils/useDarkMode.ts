import { useState, useEffect } from "react";
function useDarkMode() {
  const darkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(() => {
    return (
      window.localStorage.getItem("colorMode") ||
      (window.matchMedia(darkQuery).matches ? "dark" : "light")
    );
  });
  console.log("mode", mode);
  useEffect(() => {
    const mediaQuery = window.matchMedia(darkQuery);
    const handleChange = () => setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("colorMode", mode);
  })

  return [mode, setMode];
}

export default useDarkMode;
