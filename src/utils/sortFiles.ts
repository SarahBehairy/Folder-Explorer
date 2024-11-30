import { FolderItem } from "../models/File.model";
import { FileItem } from "../models/File.model";

export const sortFiles = (files:(FolderItem | FileItem)[]): (FolderItem | FileItem)[] => {
    return files.sort((a, b) => {
        if (a.type === 'folder' && b.type === 'file') return -1;
        if (a.type === 'file' && b.type === 'folder') return 1;
        return 0; 
    });
}

