import { homepage_menu } from "../../utils/menu";

const Header = () => {
  return (
    <div
      className={` w-screen bg-white flex flex-row align-middle p-2 justify-between space-x-4`}
    >
      <p className={`text-lg text-purple-600 font-extrabold `}>
        St Michaels MPC
      </p>
      <div className={`menu-items flex-1`}>
        <ul
          className={`flex flex-row align-middle justify-center gap-6 flex-1`}
        >
          {homepage_menu.map((each) => (
            <li key={each.title}>
              <a rel="stylesheet" href={each.where}>
                {each.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={` bg-purple-600 w-auto text-white p-1 rounded-md px-3 `}
      >
        Get Started
      </button>
    </div>
  );
};
export default Header;
