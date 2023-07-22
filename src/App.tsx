import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, Fade } from '@chakra-ui/react';
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NotFound from "./pages/NotFound/NotFound";
import Art from "./pages/Art/Art";
import React from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("LoadingPage", "false");
    }, 1000);
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <ChakraProvider>
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/art" element={<Art />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      
      ): (
        <LoadingScreen />
      )}
    </ChakraProvider>
  );
};

export default App;