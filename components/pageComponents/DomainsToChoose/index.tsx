import Link from "next/link";

import Trans from "inc/locale/Trans";

const DomainsToChoose = ({ domains }: any): JSX.Element => {
    if (!domains || !domains.length) return <></>;

    return (
        <section className="mt-12 container domains-choose">
            <h2>
                <Trans string="Выбирай" />
            </h2>
            <div className="content">
                {domains.map((domain: any, index: number) => (
                    <Link href={domain.link} key={index} className="item">
                        <div className="top">
                            <span className="title">{domain.domain}</span>
                            <div className="d-flex">
                                <span className="price">{domain.price}</span>
                                <p className="month"></p>
                            </div>
                        </div>
                        <div
                            className={`bottom`}
                            dangerouslySetInnerHTML={{ __html: domain.desc }}
                        >
                            {/* <Trans
                                string={
                                    domain.isAvailable ? "Доступен" : "Занят"
                                }
                            /> */}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default DomainsToChoose;
