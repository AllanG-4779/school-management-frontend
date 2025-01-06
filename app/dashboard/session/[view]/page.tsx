import Badge from "@/app/components/Badge";
import SessionComponent from "@/app/components/Session";

import React from "react";

const SchoolSession = () => {
  return (
    <div className="relative">
      <SessionComponent
        props={[
          {
            name: "2024-2025 Term 3",
            description: "Term 3",
            start: new Date(),
            end: new Date(),
            status: <Badge bg="bg-green-100" text="Ongoing" />,
            exams: 0,
            students: 0,
          },
        ]}
      />
    </div>
  );
};

export default SchoolSession;
