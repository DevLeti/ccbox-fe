import { Fragment, useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import "./Sidebar.css";


const Sidebar = () => {
return (
<div className="sidebar-background">
    <div className="directory">
        <IoIosArrowDown className="directory-icon"/>
        Root
    </div>
    <div className="directory mg-left-1">
        <IoIosArrowDown className="directory-icon"/>
        22-1 CCBOX
    </div>
    <div className="directory mg-left-2 clicked">
        <IoIosArrowForward className="directory-icon"/>
        프로토타입
    </div>
</div>
);
};

export default Sidebar;