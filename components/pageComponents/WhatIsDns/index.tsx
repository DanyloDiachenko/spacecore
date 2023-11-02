import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import Button from "components/UI/Button";
import WhatIsDnsProps from "./whatIsDns.props";

const WhatIsDns = ({ whatIsDnsBlock }: WhatIsDnsProps): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <section className="container mt-12 what-is-dns">
            <div className="left-col">
                <h2>{whatIsDnsBlock.title}</h2>
                <p>{whatIsDnsBlock.descriptionMain}</p>
                <p className="additional">
                    {whatIsDnsBlock.descriptionAdditional}
                </p>
            </div>
            <div className="right-col">
                <Image
                    src={whatIsDnsBlock.imgSrcLight}
                    alt={whatIsDnsBlock.title + " photo"}
                    width="520"
                    height="196"
                    className="light"
                />
                <Image
                    src={whatIsDnsBlock.imgSrcDark}
                    alt={whatIsDnsBlock.title + " photo"}
                    width="520"
                    height="196"
                    className="dark"
                />
                <Button
                    onClick={() => router.push(whatIsDnsBlock.buttonLink)}
                    background="rose"
                >
                    <span className="h6">{whatIsDnsBlock.buttonText}</span>
                </Button>
            </div>
        </section>
    );
};

export default WhatIsDns;
