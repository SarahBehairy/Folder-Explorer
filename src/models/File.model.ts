
export type FileItem = {
    type: "file";
    name: string;
    meta: string;
}
  
  export type FolderItem = {
    type: "folder";
    name: string;
    data: (FolderItem | FileItem)[];
  };