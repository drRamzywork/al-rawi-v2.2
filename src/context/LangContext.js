import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    const fetchLangs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/languages`
        );
        const data = await res.json();
        setLangs(data.data || []);
      } catch (err) {
        console.error("Failed to fetch languages", err);
      }
    };

    fetchLangs();
  }, []);

  return (
    <LangContext.Provider value={{ langs }}>{children}</LangContext.Provider>
  );
};

export const useLangs = () => useContext(LangContext);
