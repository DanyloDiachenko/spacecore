import Image from "next/image";
import RaitingProps from "./raiting.props";

const Rating = ({ rate }: RaitingProps): JSX.Element => {
    const renderIcons = (rate: number) => {
        const filledIcons = [];
        const notFilledIcons = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= rate) {
                filledIcons.push(i);
            } else {
                notFilledIcons.push(i);
            }
        }

        return { filledIcons, notFilledIcons };
    };

    return (
        <div className="raiting">
            {renderIcons(rate).filledIcons.map((_, index) => (
                <Image
                    key={index}
                    src="/images/small/filled-star.svg"
                    alt="filled star"
                    width="16"
                    height="16"
                />
            ))}
            {renderIcons(rate).notFilledIcons.map((_, index) => (
                <Image
                    key={index}
                    src="/images/small/no-filled-star.svg"
                    alt="not filled star"
                    width="16"
                    height="16"
                />
            ))}
        </div>
    );
};

export default Rating;
