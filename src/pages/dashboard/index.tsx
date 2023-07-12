import { FaBook, FaHospital, FaSchool, FaTimeline } from "react-icons/fa6";
import Sidebar from "../../components/integrated/SideBar";
import { GoPerson } from "react-icons/go";
import Header from "../../components/integrated/Header";
const menuItems = [
  {
    label: "Students",
    to: "/path/student",
    icon: <GoPerson />,
    active: true,
  },
  {
    label: "Staff",
    to: "/path/student",
    icon: <FaHospital />,
    active: false,
  },
  {
    label: "Examination",
    to: "/path/student",
    icon: <FaSchool />,
    active: false,
  },
  {
    label: "Classes",
    to: "/path/student",
    icon: <FaBook />,
    active: false,
  },
  {
    label: "Timing",
    to: "/path/student",
    icon: <FaTimeline />,
    active: false,
  },
];

const Index = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col h-full w-2/12">
          <Sidebar color="bg-purple-700" menu={menuItems} />
        </div>
        <div className="p-5">
           
        </div>
      </div>
    </>
  );
};
export default Index;
