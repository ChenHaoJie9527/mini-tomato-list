import type { FC } from "react";
import "../styles/Header.css";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

interface HeaderProps {
  content: string;
  size: number;
}

function HeaderRegisterAndLogin() {
  return (
    <div className="headerIcon pr-2 pl-2">
      <div className="">
        <span className="cursor-pointer hover:text-[pink] text-[red]">
          登录
        </span>
        <span className="pr-1 pl-1 text-[red]">|</span>
        <span className="cursor-pointer text-[red] hover:text-[pink]">
          注册
        </span>
      </div>
    </div>
  );
}

function HeaderIcons() {
  return (
    <ul className="flex items-center justify-center">
      <li className="cursor-pointer hover:bg-[antiquewhite] transition-all">
        <AppsOutlinedIcon />
      </li>
      <li className="cursor-pointer ml-2 hover:bg-[antiquewhite] transition-all">
        <AssessmentOutlinedIcon />
      </li>
      <li className="cursor-pointer ml-2 hover:bg-[antiquewhite] transition-all">
        <NotificationsActiveOutlinedIcon />
      </li>
      <li className="cursor-pointer ml-2 hover:bg-[antiquewhite] transition-all">
        <SettingsOutlinedIcon />
      </li>
    </ul>
  );
}

const Header: FC<HeaderProps> = ({ content, size }) => {
  return (
    <div className="border-solid border-[#eee] border-b-[1px] h-[40px] flex items-center justify-between pl-2 pr-2">
      <HeaderRegisterAndLogin />
      <HeaderIcons />
    </div>
  );
};
export default Header;
