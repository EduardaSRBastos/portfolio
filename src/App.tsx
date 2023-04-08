import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, Fade } from '@chakra-ui/react';
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

const handleLoading = () => {
  const startTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(startTimer);
}

useEffect(()=>{
  
  if(localStorage.getItem("LoadingPage") === "false")
  {
    setIsLoading(false);
  } else{
    localStorage.setItem("LoadingPage", JSON.stringify(isLoading));
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  }
},[isLoading])

  return (
    <ChakraProvider>
      <BrowserRouter>
      {!isLoading ? (
        <Routes>
          <Route element={<Layout />}>
            <Route path='/404' element={<NotFound />}/>
            <Route path="*" element={ <Navigate replace to="/404" /> }/>
            <Route path={"/"} element={<Home />} />
          </Route>
        </Routes>
      ): (
        <LoadingScreen />
      )}
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;