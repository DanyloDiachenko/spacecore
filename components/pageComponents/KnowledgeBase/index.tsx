import Image from "next/image";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import { FormEvent, useState } from "react";

import Button from "components/UI/Button";
import KnowledgeBaseProps from "./knowledgeBase.props";
import { IBaseItem, ISlugLink } from "./baseItem.interface";

const KnowledgeBaseComponent = ({
    knowledgeBaseBlock,
}: KnowledgeBaseProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isSearch, setIsSearch] = useState<boolean>(false);
    const [knowledgeBaseItemsApi, setKnowledgeBaseItemsApi] = useState<
        ISlugLink[]
    >([]);

    const routerLocale: NextRouter["locale"] = useRouter().locale;

    const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.length) {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/knowledge-base-detailedlinks?filters[$or][0][title][$containsi]=${inputValue}&filters[$or][1][content][$containsi]=${inputValue}&locale=${routerLocale}`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
                        },
                    },
                );
                const data = await response.json();
                setIsSearch(true);
                setKnowledgeBaseItemsApi(
                    data.data.map((item: { attributes: IBaseItem }) => {
                        return item.attributes;
                    }),
                );
            } catch (error) {
                console.log(error);
            }
        } else {
            setIsSearch(false);
        }
    };

    return (
        <>
            <section className="container knowledge-base">
                <h2>{knowledgeBaseBlock.title}</h2>
                <form onSubmit={searchHandler} className="input-wrapper">
                    <input
                        placeholder={knowledgeBaseBlock.placeholder}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button background="rose">
                        <>{knowledgeBaseBlock.buttonText}</>
                    </Button>
                    <Button className="btn-ok" background="rose">
                        <Image
                            src="/images/icons/ok.svg"
                            alt="ok"
                            width="15"
                            height="12"
                        />
                    </Button>
                </form>
            </section>
            <section className="knowledge-items">
                {isSearch ? (
                    <>
                        {knowledgeBaseItemsApi.length ? (
                            knowledgeBaseItemsApi.map((baseItem) => (
                                <article
                                    key={baseItem.id}
                                    className="item container-large"
                                >
                                    <div className="container content-item">
                                        <Link
                                            href={
                                                "/knowledge-base/" +
                                                baseItem.slug
                                            }
                                            className="h3-lg"
                                        >
                                            {baseItem.title}
                                        </Link>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="container-large content-wrapper">
                                <div className="content">
                                    <div className="container">
                                        <div className="title-input">
                                            <div className="h2-md">
                                                {
                                                    knowledgeBaseBlock.nothingFound
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {knowledgeBaseBlock.baseItems.map((baseItem) => (
                            <article
                                key={baseItem.id}
                                className="item container-large"
                            >
                                <div className="container content-item">
                                    <div className="h3-lg">
                                        {baseItem.title}
                                    </div>
                                    <div className="links">
                                        {baseItem.links.map((link, index) => (
                                            <Link
                                                href={
                                                    "/knowledge-base/" +
                                                    link.slug
                                                }
                                                key={index}
                                            >
                                                {link.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </>
                )}
            </section>
        </>
    );
};

export default KnowledgeBaseComponent;
