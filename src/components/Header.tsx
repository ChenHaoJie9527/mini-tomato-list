import type { FC } from "react";
import "../styles/Header.css";
interface HeaderProps {
  content: string;
  size: number;
}

function HeaderIcon() {
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

const Header: FC<HeaderProps> = ({ content, size }) => {
  return (
    <div className="border-solid border-[#eee] border-b-[1px] h-[40px] flex items-center">
      <HeaderIcon />
    </div>
  );
};
export default Header;
