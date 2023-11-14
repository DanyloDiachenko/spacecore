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
                <img
                    src={whatIsDnsBlock.imgSrcLight}
                    alt={whatIsDnsBlock.title + " photo"}
                    className="light"
                    style={{
                        width: "auto",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                />
                <img
                    src={whatIsDnsBlock.imgSrcDark}
                    alt={whatIsDnsBlock.title + " photo"}
                    className="dark"
                    style={{
                        width: "auto",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
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
