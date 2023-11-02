import Image from "next/image";
import Link from "next/link";

import Trans from "inc/locale/Trans";
import translate from "inc/locale/transFunc";
import NextArrow from "helpers/Arrows/Prev";
import DocumentsProps from "./documents.props";

const DocumentsComponent = ({
    documentsBlock,
}: DocumentsProps): JSX.Element => {
    return (
        <section className="mt-12 documents">
            {documentsBlock.documents.map((document, index) => (
                <Link
                    href={document.link}
                    key={index}
                    className="item container"
                >
                    <div className="left">
                        <Image
                            src={document.imgSrc}
                            alt={translate(document.title)}
                            width="80"
                            height="80"
                            className="logo"
                        />
                        <div className="text">
                            <div className="h3">
                                <Trans string={document.title} />
                            </div>
                            <p>
                                <Trans string={document.description} />
                            </p>
                        </div>
                    </div>
                    <NextArrow tabIndex={-1} />
                </Link>
            ))}
        </section>
    );
};

export default DocumentsComponent;
