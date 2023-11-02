import Image from "next/image";
import Link from "next/link";

import Trans from "inc/locale/Trans";
import NotFindedSearchedProps from "./notFindedSearched.props";

const NotFindedSearched = ({
    notFindedSearchedBlock,
}: NotFindedSearchedProps): JSX.Element => {
    return (
        <section className="mt-12 container not-finded-searched">
            <h2>{notFindedSearchedBlock && notFindedSearchedBlock.title}</h2>
            <div className="content">
                {notFindedSearchedBlock &&
                    notFindedSearchedBlock.notFindedInformation.map(
                        (infoItem, index) => (
                            <Link
                                href={infoItem.link}
                                key={index}
                                className="item"
                            >
                                <Image
                                    src={infoItem.imgSrc}
                                    alt={infoItem.title + "photo"}
                                    width="50"
                                    height="50"
                                />
                                <div className="text">
                                    <div className="title">
                                        {infoItem.title}
                                    </div>
                                    <div className="bottom">
                                        <span>{infoItem.price}</span>
                                        <p>
                                            /{" "}
                                            {infoItem.term ? (
                                                infoItem.term
                                            ) : (
                                                <Trans string="месяц" />
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ),
                    )}
            </div>
        </section>
    );
};

export default NotFindedSearched;
