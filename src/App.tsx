import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/homepage/*" element={<Homepage />}/>
      
    </Routes>
  );
};

export default App;
