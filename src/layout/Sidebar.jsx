import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  ActivityIcon,
  ArrowIcon,
  Classicon,
  FeedBackIcon,
  FinanceIcon,
  HomeIcon,
  StudentIcon,
  UserIcon,
} from "../assets/svg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const handleOpen = () => {
    setOpen(!open);
  };

  const Menus = [
    { title: "Dashboard", icon: HomeIcon, path: "/" },
    { title: "Students", icon: StudentIcon, path: "/students" },
    {title:"HomeWork",icon:StudentIcon,path:'/homework'},
    { title: "Teachers", icon: StudentIcon, path: "/teachers" },
    { title: "Class", icon: Classicon, path: "/class" },
    { title: "Finance", icon: FinanceIcon, path: "/finance" },
    { title: "User", icon: UserIcon, path: "/user" },
    { title: "Feedback", icon: FeedBackIcon, path: "/feedback" },
    { title: "Latest Activity", icon: ActivityIcon, path: "/latestactivity" },
  ];

  return (
    <div>
      <div className={`${open ? "w-72" : "w-[60px]"} relative duration-300 h-[100%] bg-[#2c1f7e]`}>
        <div
          onClick={handleOpen}
          className={`fixed z-[1000] top-4 ${
            open ? "left-[17%]" : "left-[2%]"
          } border-[2px] border-[#2c1f7e] bg-white rounded-full cursor-pointer`}
        >
          {open ? <ArrowIcon /> : <ArrowIcon className="rotate-180" />}
        </div>
        <ul className="pt-[50px] sticky top-0 pl-2 ">
          {Menus.map((menu, index) => (
            <li key={index} className="pb-3 text-lg cursor-pointer hover:rounded-l-full">
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  isActive || (menu.path !== "/" && location.pathname.startsWith(menu.path))
                    ? "flex gap-4 p-3 !pr-0 rounded-l-full bg-[white] text-[#2c1f7e]"
                    : "flex gap-4 p-3 !pr-0 rounded-l-full text-[white] hover:bg-[white] hover:text-[#2c1f7e]"
                }
              >
                <menu.icon className="cursor-pointer fill-[white]" />
                <span className={`${!open ? "hidden" : ""} origin-left duration-300 `}>{menu.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
