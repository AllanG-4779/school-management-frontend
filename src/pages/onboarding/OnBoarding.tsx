import React from "react";
import LoginForm from "../../components/integrated/LoginForm";
import { Route, Routes } from "react-router-dom";
import Activate from "../../components/integrated/Activate";
import OTPInput from "../../components/integrated/OTPInput";
import SetPin from "../../components/integrated/SetPin";

const OnBoarding: React.FC = () => {
  return (
    <div className={""}>
      {/* <Header page={"Onboarding"} items={authmenu} actionButton={false}/> */}
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="activate" element={<Activate />} />
        <Route path="validate" element={<OTPInput />} />
        <Route path="new-pin" element={<SetPin />} />
      </Routes>
    </div>
  );
};
export default OnBoarding;
