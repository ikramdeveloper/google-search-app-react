import { useState } from "react";
import { Navbar, Footer, Routes } from "./components";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 black min-h-screen">
        <Navbar setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};
export default App;
