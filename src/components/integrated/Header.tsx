import { Link } from "react-router-dom";
import Button from "../base/button/Button";

type menuProps = {
  page: string,
  items: {title:string, path: string}[]
  actionButton: boolean
  location?: {path: string, text:string}
}
const Header = (props: menuProps) => {
  return (
    <div
      className={` w-screen bg-white flex flex-row align-middle p-2 justify-between space-x-4`}
    >
      <p className={`text-lg text-purple-600 font-extrabold `}>
        St Michaels MPC
      </p>
      <div className={`menu-items flex flex-1 items-center align-middle h-full end `}>
        <ul
          className={`flex flex-row items-center justify-end mr-10 gap-6 flex-1`}
        >
          {props.items.map((each) => (
            <li key={each.title} className={"p-2 border-dashed hover: "}>
              <Link
                rel="stylesheet"
                className={`text-gray-700`}
                to={each.path}
              >
                {each.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {props.actionButton?<Button color={"bg-purple-500"} text={props.location?.text!} to={props.location?.path!}/> : <span></span>}
    </div>
  );
};
export default Header;
