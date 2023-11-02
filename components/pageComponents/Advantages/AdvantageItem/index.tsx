import Image from "next/image";

import { AdvantageItemProps } from "../advantages.interface";

const AdvantageItem = ({
    title,
    imgSrc,
    description,
}: AdvantageItemProps): JSX.Element => {
    return (
        <div className="item">
            <div className="icon">
                <Image src={imgSrc} alt={title} width="56" height="56" />
            </div>
            <div className="h3 title">{title}</div>
            <p>{description}</p>
        </div>
    );
};

export default AdvantageItem;
