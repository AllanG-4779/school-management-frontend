import { FaBook, FaHospital, FaSchool, FaTimeline } from "react-icons/fa6";
import Sidebar from "../../components/integrated/SideBar";
import { GoPerson } from "react-icons/go";
import { Route, Routes } from "react-router-dom";
import StudentDashboard from "../../components/integrated/StudentDashboard";
import AddStudent from "../../components/integrated/AddStudent";
const menuItems = [
  {
    label: "Students",
    to: "/admin/dashboard/student/home",
    icon: <GoPerson />,
    children: [
      {
        label: "All Students",
        to: "/admin/dashboard/student/all",
        active: false,
      },
      {
        label: "Add Student",
        to: "/admin/dashboard/student/new",
        active: false,
      },
      {
        label: "Edit Student",
        to: "/admin/dashboard/student/edit",
        active: false,
      },
    ],
    active: true,
  },
  {
    label: "Staff",
    to: "/admin/dashboard",
    icon: <FaHospital />,
    active: false,
    children: [
      {
        label: "New Staff",
        to: "/admin/dashboard/staff/new",
        active: false,
      },
      {
        label: "Edit Staff",
        to: "/admin/dashboard/staff/update",
        active: false,
      },
      {
        label: "All Staff",
        to: "/admin/dashboard/staff/all",
        active: false,
      },
    ],
  },
  {
    label: "Examination",
    to: "/admin/dashboard",
    icon: <FaSchool />,
    active: false,
  },
  {
    label: "Classes",
    to: "/admin/dashboard",
    icon: <FaBook />,
    active: false,
  },
  {
    label: "Timing",
    to: "/admin/dashboard",
    icon: <FaTimeline />,
    active: false,
  },
];

const Index = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col h-full w-2/12">
          <Sidebar color="white" menu={menuItems} />
        </div>
        <div className="bg-gray-100 mx-auto h-screen flex-1">
          {/* The top navigation menu */}
          <div className="bg-white h-11"></div>
          <div className="p-3">
            <Routes>
              <Route path="student" element={<StudentDashboard />} />
              <Route path="student/all" element={<AddStudent />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
