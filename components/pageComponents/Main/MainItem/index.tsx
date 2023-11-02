import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import Button from "components/UI/Button";
import { MainSliderItemProps } from "../mainSliderItem.props";

const MainItem = ({
    title,
    description,
    buttonText,
    imageSrc,
    discount,
    buttonLink,
}: MainSliderItemProps): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <div className="container content">
            <div className="info">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                {buttonText && buttonText.length && (
                    <Button
                        onClick={() => router.push(buttonLink)}
                        tabIndex={0}
                        background="rose"
                    >
                        <span className="h6">{buttonText}</span>
                    </Button>
                )}
            </div>
            <div className="img-col">
                <Image
                    priority={true}
                    loading="eager"
                    quality={100}
                    src={imageSrc}
                    alt={title}
                    width="446"
                    height="479"
                />
            </div>
            {discount !== "" && <div className="discount">{discount}</div>}
        </div>
    );
};

export default MainItem;
