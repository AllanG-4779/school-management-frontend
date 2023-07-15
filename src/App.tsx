import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import OnBoarding from "./pages/onboarding/OnBoarding";
import Index from "./pages/dashboard";

const App = () => {
  return (
    <div className={"font-primary"}>
      <Routes>
        <Route path="/homepage/*" element={<Homepage />} />
        <Route path={"/auth/*"} element={<OnBoarding />} />
        <Route path="/admin/dashboard/*" element={<Index />} />        
      </Routes>
    </div>
  );
};
export default App;
