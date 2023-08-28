import { GoPerson, GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { toggleActiveMenu } from "../../utils/customhooks";

type SidebarProps = {
  menu: {
    label: string;
    to: string;
    icon: React.ReactElement;
    active: boolean;
    children?: { label: string; to: string; active: boolean }[];
  }[];
  color: string;
};
const Sidebar = ({ menu, color }: SidebarProps) => {
  const [menuItems, setItems] = toggleActiveMenu(menu);
  return (
    <>
      <div className={`${color} w-full h-full flex flex-col p-2 gap-4`}>
        <h1 className="font-bold p-2 text-2xl text-purple-600 w-full">
          St. Michael's, MPC
        </h1>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col text-gray-600 gap-2 text-xs">
            {menuItems.map((each) => (
              <div className="flex flex-col ">
                <div className="flex justify-between items-center">
                  <div
                    onClick={() => setItems(each.label)}
                    className={`flex gap-5 text-lg ${
                      each.active ? "text-purple-900 rounded-md" : ""
                    } items-center text-light p-2 text-center`}
                  >
                    <div>{each.icon}</div>
                    {typeof each.children != "undefined" &&
                    each.children.length > 0 ? (
                      <p className="cursor-pointer">{each.label}</p>
                    ) : (
                      <Link to={each.to}>{each.label}</Link>
                    )}
                  </div>
                  <div
                    className={`mr transition-all duration-500 mr-5 ${
                      each.children ? "flex" : "hidden"
                    } `}
                  >
                    {each.active ? <GoTriangleDown /> : <GoTriangleRight />}
                  </div>
                </div>
                <div
                  className={`p-2  text-gray-500 w-full mx-auto  overflow-hidden duration-200 flex flex-col gap-2  ${
                    each.active && each.children ? "max-h-48" : "max-h-0"
                  }`}
                >
                  {each.children?.map((subeach: any, idx: any) => (
                    <div
                      key={idx}
                      className={`mx-auto text-lg hover:bg-purple-500 transition-all hover:text-white
                      
                       p-2 font-lighter  w-full rounded-md `}
                    >
                      <Link className="ml-10" to={subeach.to}>
                        {subeach.label}
                      </Link>
                    </div>
                  ))}
                </div>
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
