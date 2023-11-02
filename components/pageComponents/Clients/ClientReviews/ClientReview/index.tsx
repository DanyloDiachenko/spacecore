import Link from "next/link";

import Raiting from "helpers/Raiting";
import { ClientReviewProps } from "../clientReviews.interface";
import Trans from "inc/locale/Trans";
import formatDate from "helpers/formatDate";

const ClientReview = ({
    UserName,
    text,
    rating,
    date,
}: ClientReviewProps): JSX.Element => {
    return (
        <article className="item">
            <div className="top">
                <Raiting rate={rating} />
                <p>{text.length > 140 ? text.slice(0, 140) + "..." : text}</p>
                <Link className="link" href={"/reviews"}>
                    <Trans string="Читать полностью" />
                </Link>
            </div>
            <div className="bottom d-flex justify-content-between">
                <div>{UserName}</div>
                <div>{formatDate(date)}</div>
            </div>
        </article>
    );
};

export default ClientReview;
