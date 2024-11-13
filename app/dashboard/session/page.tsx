import AddSession from "@/app/components/AddSession";
import Badge from "@/app/components/Badge";
import React from "react";

const Sessions = () => {
  return (
    <div>
      <AddSession
        props={[
          {
            name: "Term 1",
            start: new Date().getTime().toString(),
            end: new Date().getTime().toString(),
            description: "The First Term in the School Year",
            status: <Badge bg="bg-yellow-100" text="Completed" />,
            exams: 0,
            students: 0,
          },
          {
            name: "Term 2",
            start: new Date().getTime().toString(),
            end: new Date().getTime().toString(),
            description: "The second Term of the School Year",
            status: <Badge bg="bg-yellow-100" text="Completed" />,
            exams: 0,
            students: 0,
          },
          {
            name: "Term 3",
            start: new Date().getTime().toString(),
            end: new Date().getTime().toString(),
            description: "The Last term for the schcool Year",
            status: <Badge bg="bg-green-100" text="Ongoing" />,
            exams: 0,
            students: 0,
          },
        ]}
      />
    </div>
  );
};

export default Sessions;
