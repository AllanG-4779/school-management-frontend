"use client";
import React, { ReactNode } from "react";
import TableComponent from "./TableComponent";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import GeneralModal from "./registration-components/GeneralModal";
import PersonalInformation from "./registration-components/PersonalInformation";

const AddSession = ({ props }: SessionProps) => {
  const router = useRouter();
  const [status, setStatus] = React.useState(false);

  const getItem = (e: Session) => {
    router.push("/dashboard/session/" + e.description);
  };
  return (
    <div className="flex flex-col gap-3  p-2">
      <div className=" flex justify-between py-2">
        <p className="font-bold text-md text-slate-600">School Sessions</p>
        <button
          onClick={() => setStatus(true)}
          className="flex gap-2 p-2 bg-purple-600 text-white items-center rounded-md font-bold"
        >
          <FaPlus /> Add session
        </button>
      </div>
      <div>
        <TableComponent
          titles={[
            "Name",
            "Start",
            "End",
            "Description",
            "Status",
            "Examinations",
            "Students",
          ]}
          onClick={getItem}
          data={[...props]}
        />
      </div>
      <GeneralModal
        title="Add Session"
        footer={<Footer close={() => setStatus(false)} /> }
        status={status}
        toggle={() => setStatus(false)}
      >
        <PersonalInformation />
      </GeneralModal>
    </div>
  );
};
const Footer = ({ close }: { close: () => void; action?: () => void }) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={close}
        className="bg-slate-500 p-2 rounded-md text-white font-semibold"
      >
        Cancel
      </button>
      <button className="bg-purple-500 p-2 rounded-md text-white font-semibold">
        Continue
      </button>
    </div>
  );
};
export default AddSession;

export type Session = {
  name: string;
  start: string;
  end: string;
  description: string;
  status: ReactNode;
  exams: number;
  students: number;
};

export type SessionProps = {
  props: Session[];
};
