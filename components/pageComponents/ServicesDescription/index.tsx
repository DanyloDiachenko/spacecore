import Image from "next/image";

import ServicesDescriptionProps from "./servicesDescrption.props";

const ServicesDescription = ({
    isMinusMarginTop,
    servicesDescription,
}: ServicesDescriptionProps): JSX.Element => {
    return (
        <section
            className={`container-large services-description ${
                isMinusMarginTop ? "minus-margin-top" : "mt-12"
            }`}
        >
            <div className="container content px-0">
                {servicesDescription.map((serDescrption, index) => (
                    <div key={index} className="item">
                        <Image
                            src={serDescrption.imgSrc}
                            alt={serDescrption.title + "photo"}
                            width="100"
                            height="100"
                        />
                        <div>
                            <div className="h3">{serDescrption.title}</div>
                            <p>{serDescrption.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesDescription;
