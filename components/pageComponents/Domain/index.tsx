import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import Button from "components/UI/Button";
import DomainProps from "./domain.props";

const Domain = ({ domainBlock }: DomainProps): JSX.Element => {
    const [domain, setDomain] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");

    const router: NextRouter = useRouter();

    const setDomainKeyboard = (
        e: React.KeyboardEvent<HTMLButtonElement>,
        domainName: string,
    ): void => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            setDomain(domainName);
        }
    };

    const checkDomainHandler = (): void => {
        router.push("/domains?domain=" + inputValue + domain);
    };

    return (
        <section className="mt-12 container-large domain">
            <div className="container content">
                <div className="left-col">
                    <h2>{domainBlock.title}</h2>
                    <div className="input-wrapper">
                        <input
                            placeholder={domainBlock.placeholder}
                            type="text"
                            value={inputValue}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setInputValue(e.target.value)
                            }
                        />
                        <Button onClick={checkDomainHandler} background="rose">
                            <div>{domainBlock.buttonInputText}</div>
                        </Button>
                        <Button className="btn-ok" background="rose">
                            <Image
                                src="/images/icons/ok.svg"
                                alt="ok"
                                width="15"
                                height="12"
                            />
                        </Button>
                    </div>
                    <div className="buttons-tariffes">
                        {domainBlock.buttons.map((button, index) => (
                            <button
                                key={index}
                                className={
                                    domain == button.title ? "active" : ""
                                }
                                onClick={() => setDomain(button.title)}
                                onKeyDown={(e) =>
                                    setDomainKeyboard(e, button.title)
                                }
                            >
                                {button.title} <b>/ {button.price}</b>
                            </button>
                        ))}

                        <button onClick={() => router.push("/domains")}>
                            {domainBlock.buttonMore}
                        </button>
                    </div>
                    <div className="period">{domainBlock.priceDescription}</div>
                </div>
                <div className="right-col">
                    <div className="title-present">
                        {domainBlock.mainDescription}
                    </div>
                    <Image
                        src={domainBlock.imgSrc}
                        alt={domainBlock.title + "photo"}
                        width="365"
                        height="511"
                    />
                </div>
            </div>
        </section>
    );
};

export default Domain;
