import { React } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { highlightState, folderListState } from "../../recoil/atom";
import { useRecoilValue } from "recoil";
import "../../styles/Sidebar.css";

const SidebarComponent = () => {
  const highlightValue = useRecoilValue(highlightState);
  const folderlistValue = useRecoilValue(folderListState);

  return (
    <div className="sidebar-background">
      {folderlistValue.map((folder, index) =>
        folder.id === 1 ? (
          <div className={"directory clicked " + highlightValue} key={index}>
            <IoIosArrowForward className="directory-icon" />
            {folder.foldername}
          </div>
        ) : (
          <div className={"directory clicked mg-left-1"} key={index}>
            <IoIosArrowDown className="directory-icon" />
            {folder.foldername}
          </div>
        )
      )}
    </div>
  );
};

export default SidebarComponent;
