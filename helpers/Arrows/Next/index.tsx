import Image from "next/image";
import ArrowProps from "../arrow.props";

const PrevArrow = ({ ...props }: ArrowProps): JSX.Element => {
    return (
        <button {...props} className="arrow left">
            <Image
                src="/images/icons/arrow-left.svg"
                alt="previous"
                width="49"
                height="15"
            />
        </button>
    );
};

export default PrevArrow;
