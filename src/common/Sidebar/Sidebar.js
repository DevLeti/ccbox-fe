import { Fragment, useEffect, useState, React } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-background">
      <div className="directory clicked">
        <IoIosArrowForward className="directory-icon" />
        Root
      </div>
    </div>
  );
};

export default Sidebar;
