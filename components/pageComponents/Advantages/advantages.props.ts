import { IAdvantageItem } from "./advantages.interface";

export default interface AdvantagesProps {
    advantagesBlock: {
        title: string;
        advantages: IAdvantageItem[];
    };
}
