import { useState } from "react";
import FolderExplorer from "./FolderExplorer";
import { FileItem, FolderItem } from "../models/File.model";
import { sortFiles } from "../utils/sortFiles";

interface FolderProps {
    data: FolderItem;
    onFileSelect?: (file: FileItem) => void;
}

  const styles = {
    folderContainer: {
      margin: "5px 0",
    },
    folderHeader: {
      cursor: "pointer",
      fontWeight: "bold",
      padding: "5px",
      borderRadius: "4px",
      transition: "background-color 0.2s",
    },
    folderOpen: {
      backgroundColor: "#e0e7ff", // Light blue background for open folders
    },
    folderContent: {
      marginLeft: "20px",
      borderLeft: "2px solid #cbd5e1", // Subtle border for nested content
      paddingLeft: "10px",
    }
}

const Folder: React.FC<FolderProps> = ({ data, onFileSelect }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const sortedData = sortFiles(data?.data)

    return (
      <div style={styles.folderContainer}>
        <div
          style={styles.folderHeader}
          onClick={() => setIsExpanded((prev)=> !prev)}
        >
          {isExpanded ? "📂" : "📁"} {data.name}
        </div>
        {isExpanded && (
          <div style={styles.folderContent}>
            {sortedData.map((item, index) => (
              <FolderExplorer key={index} data={item} onFileSelect={onFileSelect} />
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Folder;