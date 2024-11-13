import React from "react";
import Stepper from "./Stepper";
import AcademicInformation from "./registration-components/AcademicInformation";
import GuardianInformation from "./registration-components/GuardianInformation";
import PersonalInformation from "./registration-components/PersonalInformation";

const RegisterStudent = () => {
  return (
    <div className="flex flex-col gap-3">
      <Stepper
        title="Register Student"
        items={[
          <PersonalInformation key="personal" />,
          <GuardianInformation key="parent" />,
          <AcademicInformation key="academic" />,
          // <PersonalInformation key="done" />,
          // <GuardianInformation key="df" />,
          // <AcademicInformation key="two" />,
          // <PersonalInformation key="perforsonal" />,
          <GuardianInformation key="parsent" />,
          <AcademicInformation key="ddfd" />,
        ]}
      />
    </div>
  );
};

export default RegisterStudent;
