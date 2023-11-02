import Image from "next/image";
import { useEffect, useState } from "react";

import Button from "components/UI/Button";
import DomainInputBlockProps from "./domainInput.props";

const DomainInput = ({
    domain,
    onChange,
    domainBlock,
    isLoading,
}: DomainInputBlockProps): JSX.Element => {
    const [domainValue, setDomainValue] = useState<string>(domain);

    const submit = (): void => {
        onChange(domainValue);
    };

    useEffect(() => {
        setDomainValue(domain);
    }, [domain]);

    useEffect(() => {
        if (domainValue) {
            onChange(domainValue);
        }
    }, []);

    return (
        <section className="domain-input mt-12">
            <div className="container">
                <h2 className="title">{domainBlock.title}</h2>
            </div>
            <div className="container-large content-wrapper">
                <div className="content">
                    <div className="container">
                        <div className="title-input">
                            <div className="h2-md">
                                {domainBlock.componentTitle}
                            </div>
                            <div className="input-wrapper">
                                <input
                                    placeholder={domainBlock.placeholder}
                                    type="text"
                                    value={domainValue}
                                    onChange={(e) =>
                                        setDomainValue(e.target.value)
                                    }
                                />
                                {isLoading && (
                                    <Image
                                        src="/images/icons/loading.svg"
                                        alt="loading icon"
                                        width="32"
                                        height="32"
                                        className="loading"
                                    />
                                )}

                                <Button
                                    background="rose"
                                    onClick={() => submit()}
                                >
                                    <div>{domainBlock.buttonText}</div>
                                </Button>

                                <Button
                                    className="btn-ok"
                                    onClick={() => submit()}
                                    background="rose"
                                >
                                    <Image
                                        src="/images/icons/ok.svg"
                                        alt="ok"
                                        width="15"
                                        height="12"
                                    />
                                </Button>
                            </div>
                        </div>
                        <img
                            src={domainBlock.imgSrc}
                            alt="austronaut ball photo"
                            width="196"
                            height="340"
                            className="austronaut-banner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DomainInput;
