import { useRouter, NextRouter } from "next/router";

import Trans from "inc/locale/Trans";
import Button from "components/UI/Button";
import WhatNeedToUseDnsProps from "./whatNeedToUseDns.props";

const WhatNeedToUseDns = ({
    whatNeedToUseDnsBlock,
}: WhatNeedToUseDnsProps): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <section className="mt-12 container what-need-dns">
            <h2>{whatNeedToUseDnsBlock.title}</h2>
            <div className="content">
                {whatNeedToUseDnsBlock.steps.map((step, index) => (
                    <div key={index} className="item">
                        <div className="number h3-lg">{step.number}</div>
                        <div className="h3">
                            <Trans string={step.title} />
                        </div>
                        <p>
                            <Trans string={step.description} />
                        </p>
                    </div>
                ))}
                <Button
                    onClick={() =>
                        router.push(whatNeedToUseDnsBlock.buttonLink)
                    }
                    background="white"
                    border="rose"
                >
                    <span className="h6">
                        {whatNeedToUseDnsBlock.buttonText}
                    </span>
                </Button>
            </div>
        </section>
    );
};

export default WhatNeedToUseDns;
