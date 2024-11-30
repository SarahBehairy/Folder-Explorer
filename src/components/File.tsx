import { useState } from "react";
import { FileItem } from "../models/File.model";

interface FileProps {
    data: FileItem;
    onSelect?: (file: FileItem) => void;
  }

  const fileStyle = {
    padding: "5px",
    borderRadius: "4px",
    cursor: "default",
    color: "#1e293b"
  }

  const fileSelectedStyle= {
    backgroundColor: "#d1fae5"
  };

  const  popupStyle =  {
    position: "absolute",
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    padding: "10px",
    zIndex: 1000,
  };

  const  popupItemStyle =  {
    padding: "5px 10px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  }
  
  const File: React.FC<FileProps> = ({ data, onSelect }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });


    const handleClick = () => {
      setIsSelected(!isSelected);
      if(onSelect) {
        onSelect(data);
      }
    };

    const handleRightClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsPopupVisible(true);
      setPopupPosition({ x: e.clientX, y: e.clientY });
    };
  
    const handlePopupAction = (action: string) => {
      console.log(`Action: ${action}, File: ${data.name}`);
      setIsPopupVisible(false);
    };

  
    return (
      <div>
        <div style={{...fileStyle,  ...(isSelected ? fileSelectedStyle : {})}} onClick={handleClick} onContextMenu={handleRightClick}>
        {data.name} ({data.meta})
      </div>
        {isPopupVisible && (
        <div
          style={{
           ...popupStyle,
            top: popupPosition.y,
            left: popupPosition.x,
          }}
        >
          <div style={popupItemStyle} onClick={() => handlePopupAction("Copy")}>
            Copy
          </div>
          <div style={popupItemStyle} onClick={() => handlePopupAction("Delete")}>
            Delete
          </div>
          <div style={popupItemStyle} onClick={() => handlePopupAction("Rename")}>
            Rename
          </div>
        </div>
      )}</div>
     
    );
  };

  export default File;