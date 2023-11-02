import Image from "next/image";

import ArrowProps from "../arrow.props";

const NextArrow = ({ ...props }: ArrowProps): JSX.Element => {
    return (
        <button {...props} className="arrow right">
            <Image
                src="/images/icons/arrow-left.svg"
                alt="previous"
                width="49"
                height="15"
            />
        </button>
    );
};

export default NextArrow;
