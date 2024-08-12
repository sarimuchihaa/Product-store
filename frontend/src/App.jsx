import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';


import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.300", "gray.900")}>
      <Navbar/>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App