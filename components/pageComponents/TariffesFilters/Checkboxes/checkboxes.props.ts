import ICheckboxItem from "./checkbox.interface";

export default interface CheckboxesProps {
    checkboxes: ICheckboxItem[];
    cpuCheckboxStates: { [key: string]: boolean };
    onCpuCheckboxChange: (key: string) => void;
    diskCheckboxStates: { [key: string]: boolean };
    onDiskCheckboxChange: (key: string) => void;
}
