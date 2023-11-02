import Link from "next/link";

import Rating from "helpers/Raiting";
// import Button from "components/UI/Button";
import ReviewsProps from "./reviews.props";

const ReviewsComponent = ({ reviewsBlock }: ReviewsProps): JSX.Element => {
    return (
        <section className="container mt-12 reviews">
            <aside className="left-col">
                {reviewsBlock.companies.map((company, index) => (
                    <Link href={company.link} key={index} className="item">
                        <img src={company.imgSrc} alt={company.imgSrc} />
                    </Link>
                ))}
            </aside>
            <div className="right-col">
                {reviewsBlock.reviews.map((review, index) => (
                    <div key={index} className="item">
                        <div className="top">
                            <Rating rate={review.rate} />
                            <img
                                src={review.companyImgSrc}
                                alt={review.companyImgSrc}
                                style={{ maxWidth: 150 }}
                            />
                        </div>
                        <p className="review">{review.title}</p>
                        <div className="bottom">
                            <p>{review.author}</p>
                            <p>{review.created.replace(".", "/")}</p>
                        </div>
                    </div>
                ))}
                {/* <Button background="white" border="rose">
                    <span className="h6">
                        Загрузить еще <b>10</b>
                    </span>
                </Button> */}
            </div>
        </section>
    );
};

export default ReviewsComponent;
