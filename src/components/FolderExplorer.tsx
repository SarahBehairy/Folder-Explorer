import { FileItem, FolderItem } from "../models/File.model";
import Folder from "./Folder";
import File
 from "./File";
 
interface FolderExplorerProps {
  data: FolderItem | FileItem;
  onFileSelect?: (file: FileItem) => void; // Callback for file selection
}


const FolderExplorer: React.FC<FolderExplorerProps> = ({ data, onFileSelect }) => {
  if (data.type === "folder") {
    return <Folder data={data} onFileSelect={onFileSelect} />;
  }
  return <File data={data} onSelect={onFileSelect} />;
};

export default FolderExplorer