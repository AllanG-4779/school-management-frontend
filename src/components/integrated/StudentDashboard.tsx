import { GoArrowBoth, GoBell, GoPaperAirplane, GoPeople } from "react-icons/go";
import DashboardItem from "./DashboardItem";

const dashboardItems = [
  {
    title: "Students",
    value: "343",
    icon: <GoPeople />,
  },
  {
    title: "Applications",
    value: "450",
    icon: <GoPaperAirplane />,
  },
  {
    title: "Processed",
    value: "343",
    icon: <GoBell />,
  },
  {
    title: "Reviews",
    value: "343",
    icon: <GoArrowBoth />,
  },
];

const StudentDashboard = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className=" text-gray-500">Student Management</h1>
        <div className="flex  gap-5 mt-5  w-[95%] ">
          {dashboardItems.map((each) => (
            <div className="dashboard  flex-1 ">
              <DashboardItem
                title={each.title}
                value={each.value}
                icon={each.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default StudentDashboard;
