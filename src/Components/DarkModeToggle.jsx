import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className=" text-[12px] px-2 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </>
  )}

export default DarkModeToggle;
