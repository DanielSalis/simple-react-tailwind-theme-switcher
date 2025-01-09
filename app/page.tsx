"use client"
import Image from "next/image";

export default function Home() {
const setTheme = (color: string) => {
  document.querySelector("html")?.setAttribute("data-theme", color);
  localStorage.setItem("theme", color)
}

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%]">
      <div className="bg-card max-w-[366px] border-2 border-border rounded-lg p-8">
        <h3 className="text-copy-primary">Title</h3>
        <p className=" text-copy-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <button className="bg-cta hover:bg-cta-active transition-colors text-cta-text font-semibold w-full mt-2">
          Submit</button>
      </div>

    <div className="flex max-w-[366px] gap-1">
    <button className="mt-4 bg-cta p-2" onClick={()=>setTheme("dark")}>
        switch to dark
      </button>

      <button className="mt-4 bg-cta p-2" onClick={()=>setTheme("light")}>
        switch to light
      </button>

      <button className="mt-4 bg-cta p-2" onClick={()=>setTheme("catpuccin")}>
        switch to catpuccin
      </button>

      <button className="mt-4 bg-cta p-2" onClick={()=>setTheme("nord")}>
        switch to nord
      </button>
    </div>
    </div>
  );
}
