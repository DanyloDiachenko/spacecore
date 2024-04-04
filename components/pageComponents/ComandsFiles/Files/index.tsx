import Link from "next/link";

import { FilesProps } from "./files.props";

const Files = ({ title, description, files }: FilesProps): JSX.Element => {
    return (
        <div className="right-col">
            <h2>{title}</h2>
            <p className="title">{description}</p>
            {files.map((file, index) => (
                <Link href={file.fileSrc} key={index}>
                    <p className="file">{file.title}</p>
                    <p className="text-wrapper">{file.fileSrc}</p>
                </Link>
            ))}
        </div>
    );
};

export default Files;
