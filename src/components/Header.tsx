import type { FC } from "react";
import "../styles/Header.css";
interface HeaderProps {
  content: string;
  size: number;
}

const Header: FC<HeaderProps> = ({ content, size }) => {
  return (
    <div className="border-solid border-[#eee] border-b-[1px] h-[40px]">
      Header
    </div>
  );
};
export default Header;
