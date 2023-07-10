import { Route, Routes } from "react-router-dom";
import Header from "../../components/integrated/Header";
import Intro from "../../components/integrated/Intro";
import ContactForm from "../../components/integrated/ContactForm";
import {homepage_menu} from "../../utils/menu";

const Homepage = () => {
  return (
    <>
      <div>
        <Header page={"Homepage"}
                items={homepage_menu}
                actionButton={true}
                location={{path: "/", text: "Member Login"}}

        />
        <Routes>
          <Route path="" element={<Intro />} />
          <Route path="contact" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  );
};

export default Homepage;
