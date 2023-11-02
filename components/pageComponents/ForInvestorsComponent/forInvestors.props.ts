import ServicesDescriptionProps from "../ServicesDescription/servicesDescrption.props";

export default interface ForInvestorsProps {
    forInvestorsBlock: {
        title: string;
        description: string;
        descriptionAdditional: string;
        servicesDescription: ServicesDescriptionProps["servicesDescription"];
    };
}
