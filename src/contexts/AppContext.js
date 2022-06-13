import { createContext, useContext, useState } from "react";

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cars");

  const getResults = async (url) => {
    setIsLoading(true);

    try {
      const resp = await fetch(`${baseUrl}${url}`, {
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });

      const data = await resp.json();
      setResults(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
