import { Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NotFound from "./pages/NotFound/NotFound";
import Art from "./pages/Art/Art";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the "LoadingPage" key exists in localStorage and its value is "false"
    const loadingPageValue = localStorage.getItem("LoadingPage");
    if (loadingPageValue === "false") {
      setIsLoading(false);
    } else {
      // If not found in localStorage or the value is not "false", show the loading screen
      const startTimer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("LoadingPage", "false");
      }, 2500);
      return () => clearTimeout(startTimer);
    }
  }, []);

  return (
    <ChakraProvider>
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/art" element={<Art />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      ) : (
        <LoadingScreen />
      )}
    </ChakraProvider>
  );
};

export default App;