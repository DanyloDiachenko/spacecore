import Link from "next/link";

import LastPublicationsProps from "./lastPublications.props";
import Trans from "inc/locale/Trans";
import formatDate from "helpers/formatDate";

const LastPublications = ({
    lastPublicationsBlock,
}: LastPublicationsProps): JSX.Element => {
    return (
        <aside className="last-publications">
            <h2 className="h2-sm">
                <Trans string="Последнее" />
            </h2>
            <div className="content">
                {lastPublicationsBlock &&
                    lastPublicationsBlock.map((publication) => (
                        <div key={publication.slug} className="item">
                            <div className="top">
                                <div className="date">
                                    {formatDate(publication.created)}
                                </div>
                                {publication.category ? (
                                    <div className="category">
                                        {publication.category
                                            ? publication.category.title
                                            : ""}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <Link href={`/news/${publication.slug}`}>
                                <p>{publication.title}</p>
                            </Link>
                        </div>
                    ))}
            </div>
        </aside>
    );
};

export default LastPublications;
