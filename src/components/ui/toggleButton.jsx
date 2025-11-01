import { useEffect, useState } from "react";

export default function ToggleButton() {
  const [theme, SetTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  });
  return (
    <label class="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        onChange={() => {
          SetTheme(theme === "light" ? "dark" : "light");
          console.log(theme);
        }}
        value={"theme"}
        checked={theme === "dark"}
        class="sr-only peer"
      />
      <div
        class="relative w-11 h-6
   bg-gray-200 rounded-full peer
    dark:bg-gray-700 
    peer-checked:after:translate-x-full
       rtl:peer-
       checked:after:-translate-x-full 
       peer-checked:after:border-white 
       after:content-['']
        after:absolute after:top-0.5
         after:start-[2px] 
         after:bg-white
          after:border-gray-300
           after:border 
           after:rounded-full
            after:h-5 after:w-5 
            after:transition-all
              peer-checked:bg-[#1549e6]
               dark:peer-checked:bg-[#1549e6]"
      ></div>
    </label>
  );
}
