import IVariant from "components/UI/Select/select.interface";
import { IFile } from "./Files/files.props";

export default interface ComandsFilesProps {
    comandsFilesBlock: {
        comandTitle: string;
        comandSelectTitle: string;
        commands: IVariant[];
        resourseAdressTitle: string;
        resourseAdressPlaceholder: string;
        buttonText: string;
        resultTitle: string;

        fileTitle: string;
        fileDescription: string;
        files: IFile[];
    };
}
