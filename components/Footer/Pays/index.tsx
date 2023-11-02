import Image from "next/image";

import PaysProps from "./pays.props";

const Pays = ({ pays, allRightsReserverdTitle }: PaysProps): JSX.Element => {
    return (
        <div className="bottom-info">
            <div>{allRightsReserverdTitle}</div>
            <div className="logos">
                {pays.map((pay, index) => (
                    <Image
                        key={index}
                        src={pay.imgSrc}
                        alt={pay.alt}
                        width="80"
                        height="20"
                    />
                ))}
            </div>
        </div>
    );
};

export default Pays;
