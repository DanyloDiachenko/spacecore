import Image from "next/image";

import { ServiceAdditionalItemProps } from "../serviceAdditional.interface";

const ServiceAdditionalItem = ({
    title,
    imgSrc,
    description,
}: ServiceAdditionalItemProps): JSX.Element => {
    return (
        <article className="item">
            <Image src={imgSrc} alt={title} width="80" height="80" />
            <div className="text">
                <div className="h3">{title}</div>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default ServiceAdditionalItem;
