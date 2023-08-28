import { GoArrowBoth, GoBell, GoPaperAirplane, GoPeople } from "react-icons/go";
import DashboardItem from "./DashboardItem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const dashboardItems = [
  {
    title: "All Students",
    value: "3,500",
    icon: <GoPeople />,
    color: "text-green-500",
    iconbg: "bg-green-50",
  },
  {
    title: "Active",
    value: "200",
    icon: <GoPaperAirplane />,
    color: "text-blue-500",
    iconbg: "bg-blue-50",
  },
  {
    title: "Flagged",
    value: "343",
    icon: <GoBell />,
    color: "text-red-500",
    iconbg: "bg-red-50",
  },
  {
    title: "Sponsored",
    value: "343",
    icon: <GoArrowBoth />,
    color: "text-blue-500",
    iconbg: "bg-blue-50",
  },
];

const StudentDashboard = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between w-[95%] mx-auto items-center">
          <h1 className=" text-2xl  text-gray-600 font-bold">
            Student Management
          </h1>
          <div className="flex flex-row-reverse items-center bg-purple-600 p-3 hover:bg-purple-800 duration-200 cursor-pointer text-white rounded-sm gap-4">
            <Link to={"/admin/dashboard/student/new"}>New Student</Link>
            <FaPlus />
          </div>
        </div>

        <div className="flex  gap-5 mt-5  w-[95%] ">
          {dashboardItems.map((each) => (
            <div className="dashboard flex-1 ">
              <DashboardItem
                title={each.title}
                value={each.value}
                icon={each.icon}
                iconbg={each.iconbg}
                color={each.color}
              />
            </div>
          ))}
        </div>
        {/* Row 2 with 2 divs */}
        <div className="flex gap-2">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default StudentDashboard;
