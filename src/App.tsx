import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import OnBoarding from "./pages/homepage/OnBoarding";

const App = () => {
    return (
        <Routes>
            <Route path="/homepage/*" element={<Homepage/>}/>
            <Route path={"/auth/*"} element={<OnBoarding/>}/>
        </Routes>
    );
};
export default App;
