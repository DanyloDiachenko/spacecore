import { IService } from "./service.interface";

export default interface ServicesProps {
    servicesBlock: {
        title: string;
        buttonText: string;
        buttonLink: string;
        services: IService[];
    };
}
