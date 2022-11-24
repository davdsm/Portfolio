import React, { useEffect } from "react";
import { Footer } from "./Footer";
import Header from "./Header";

type MyComponentProps = React.PropsWithChildren<{}>;

export const Layout = ({ children }: MyComponentProps) => {

  const handleDark = () => {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const menu = [{
    name: "Home",
    path: "/"
  },
  {
    name: "Portfolio",
    path: "/portfolio"
  }
  ];

  return (
    <main className="bg-slate-100 dark:bg-slate-900 min-h-screen flex flex-col items-between justify-between">
      <Header handleDark={handleDark} menu={menu} />
      {children}
      <Footer handleDark={handleDark} menu={menu} />
    </main>
  );
};

export default Layout;
