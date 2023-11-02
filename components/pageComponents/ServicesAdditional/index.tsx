import ServiceAdditionalItem from "./ServiceAdditionalItem";
import ServicesAdditionalProps from "./servicesAdditional.props";

const ServicesAdditional = ({
    servicesAdditional,
}: ServicesAdditionalProps): JSX.Element => {
    return (
        <section className="container mt-12 services-additional">
            {servicesAdditional.map((serviceAddItem, index) => (
                <ServiceAdditionalItem {...serviceAddItem} key={index} />
            ))}
        </section>
    );
};

export default ServicesAdditional;
