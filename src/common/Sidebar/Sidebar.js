import { Fragment, useEffect, useState, React } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { highlightState } from "../../recoil/atom";
import { useRecoilValue } from "recoil";
import "./Sidebar.css";

const Sidebar = () => {
  const highlightValue = useRecoilValue(highlightState);

  return (
    <div className="sidebar-background">
      <div className={"directory clicked " + highlightValue}>
        <IoIosArrowForward className="directory-icon" />
        Root
      </div>
    </div>
  );
};

export default Sidebar;
