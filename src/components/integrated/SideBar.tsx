import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

type SidebarProps = {
  menu: {
    label: string;
    to: string;
    icon: React.ReactElement;
    active: boolean;
  }[];
  color: string;
};
const Sidebar = ({ menu, color }: SidebarProps) => {
  return (
    <>
      <div
        className={`${color} w-full h-full flex flex-col text-white p-2 gap-4`}
      >
        <h1 className="font-bold p-2 text-white text-xl w-full">
          St. Michael's, MPC
        </h1>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-5 text-sm">
            {menu.map((each) => (
              <div
                className={`flex gap-4 ${
                  each.active ? "bg-purple-800 rounded-md" : ""
                } items-center text-light p-2 text-center`}
              >
                <div>{each.icon}</div>
                <Link to={each.to}>{each.label}</Link>
              </div>
            ))}
          </div>

          <div className="flex gap-4 p-2 items-center">
            <GoPerson /> <p>Student</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
