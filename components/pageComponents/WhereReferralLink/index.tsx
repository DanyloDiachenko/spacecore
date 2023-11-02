import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
    WhereReferralLinkProps,
    IWhereRefLinkQuestion,
} from "./whereReferalLink.props";

const WhereReferralLink = ({
    whereReferralLinkBlock,
}: WhereReferralLinkProps): JSX.Element => {
    const [activeQuestion, setActiveQuestion] = useState(
        whereReferralLinkBlock.questions[0],
    );

    const setActiveQuestionHandler = (
        questionClicked: IWhereRefLinkQuestion,
    ): (() => void) => {
        return () => setActiveQuestion(questionClicked);
    };

    return (
        <section className="mt-12 where-referral-link container-fluid-bg">
            <div className="container">
                <div className="left-col">
                    <h2>{whereReferralLinkBlock.title}</h2>
                    {whereReferralLinkBlock.questions.map((question, index) => (
                        <div key={index}>
                            <div
                                className={`item ${
                                    question.question ===
                                    activeQuestion.question
                                        ? "active"
                                        : "inactive"
                                }`}
                            >
                                <Image
                                    src={
                                        question.question ===
                                        activeQuestion.question
                                            ? "/images/small/logo-white.svg"
                                            : "/images/small/logo.svg"
                                    }
                                    alt={question.question + "photo"}
                                    width="26"
                                    height="26"
                                />
                                <div>
                                    <div
                                        className={`question-title ${
                                            question.question ===
                                            activeQuestion.question
                                                ? "h3"
                                                : ""
                                        }`}
                                        onClick={setActiveQuestionHandler(
                                            question,
                                        )}
                                    >
                                        {question.question}
                                    </div>
                                    {activeQuestion.question ===
                                        question.question && (
                                        <p>{question.answer}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Image
                    src="/images/banners/control-panel.webp"
                    alt={whereReferralLinkBlock.description + "photo"}
                    width="629"
                    height="487"
                    className="active-banner"
                    layout="intrinsic"
                />
                <div className="right-col">
                    <Image
                        src="/images/banners/control-panel.webp"
                        alt={whereReferralLinkBlock.description + " photo"}
                        width="629"
                        height="487"
                        layout="intrinsic"
                    />
                    <p>
                        {whereReferralLinkBlock.description}{" "}
                        <span className="dash"> — </span>
                        <Link href={whereReferralLinkBlock.documentLink}>
                            {whereReferralLinkBlock.documentTitle}
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhereReferralLink;
