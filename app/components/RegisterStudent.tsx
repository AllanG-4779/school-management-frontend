import React from "react";
import Stepper from "./Stepper";
import AcademicInformation from "./registration-components/AcademicInformation";
import GuardianInformation from "./registration-components/GuardianInformation";

const PersonalInformation = () => {
  return (
    <div className="flex flex-col gap-3">
      <Stepper
        title="Register Student"
        items={[
          <AcademicInformation key="steps" />,
          <GuardianInformation key="items" />,
          <GuardianInformation key="page" />,
          <GuardianInformation key="st" />,
          <GuardianInformation key="md" />,
        ]}
      />
    </div>
  );
};

export default PersonalInformation;
