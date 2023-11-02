import { IOperationSystem } from "./operationSystem.interface";

export default interface OperationSystemProps {
    operationSystemsBlock: {
        title: string;
        description: string;
        operationSystems: IOperationSystem[];
    };
}
