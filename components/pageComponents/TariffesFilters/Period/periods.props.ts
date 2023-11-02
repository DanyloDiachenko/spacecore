import IVariant from "components/UI/Select/select.interface";

export default interface PeriodsProps {
    periods: IVariant[];
    period: number;
    setPeriod: (value: number) => void;
}
