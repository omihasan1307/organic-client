/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Corrected Context Type
interface WebsiteInfoContextType {
  websiteInfo: any;
  loading: boolean;
  setWebsiteInfo: React.Dispatch<React.SetStateAction<any>>;
}

const WebsiteInfoContext = createContext<WebsiteInfoContextType>({
  websiteInfo: null,
  loading: true,
  setWebsiteInfo: () => {},
});

export const WebsiteInfoProvider = ({ children, initialData }: { children: ReactNode; initialData: any }) => {
  const [websiteInfo, setWebsiteInfo] = useState(initialData?.data);
  const loading = websiteInfo === null;

  return <WebsiteInfoContext.Provider value={{ websiteInfo, loading, setWebsiteInfo }}>{children}</WebsiteInfoContext.Provider>;
};

export const useWebsiteInfo = () => useContext(WebsiteInfoContext);
