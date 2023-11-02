import Link from "next/link";

import { ServiceProps } from "../service.interface";

const Service = ({ title, imgSrc, link }: ServiceProps): JSX.Element => {
    return (
        <Link href={link} className="item">
            <div>{title}</div>
            <img src={imgSrc} alt={title} loading="eager" />
        </Link>
    );
};

export default Service;
