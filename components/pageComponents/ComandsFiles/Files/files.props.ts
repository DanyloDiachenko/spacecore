export interface IFile {
    title: string;
    fileSrc: string;
}

export interface FilesProps {
    title: string;
    description: string;
    files: IFile[];
}
