import IVariant from "./select.interface";

export default interface SelectProps {
    variants: IVariant[];
    currentVariant: string;
    type: "periods" | "commands";
    setCurrentVariant: (clickedVariant: IVariant) => void;
}
