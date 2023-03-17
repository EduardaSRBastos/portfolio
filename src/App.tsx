import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;