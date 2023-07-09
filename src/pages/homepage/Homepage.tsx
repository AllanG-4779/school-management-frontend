import { Route, Routes } from "react-router-dom";
import Header from "../../components/integrated/Header";
import Intro from "../../components/integrated/Intro";
import ContactForm from "../../components/integrated/ContactForm";

const Homepage = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="" element={<Intro />} />
          <Route path="contact" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  );
};

export default Homepage;
