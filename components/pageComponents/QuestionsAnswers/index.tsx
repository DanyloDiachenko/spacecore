import Image from "next/image";
import { KeyboardEvent, useEffect, useState } from "react";

import LogoIcon from "components/UI/Icons/LogoIcon";
import FaqProps from "./faq.props";

const QuestionsAnswers = ({ faqBlock }: FaqProps): JSX.Element => {
    const [activeFaqIndex, setActiveFaqIndex] = useState<number>(0);
    const [isActiveClass, setIsActiveClass] = useState<boolean>(false);

    const setAnswerHandler = (activeQuestionIndex: number): void => {
        if (activeQuestionIndex === activeFaqIndex) {
            if (screen.width < 991) {
                setActiveFaqIndex(-1);
            }
        } else {
            setActiveFaqIndex(activeQuestionIndex);
        }
    };

    const setAnswerHandlerKeyboard = (
        e: KeyboardEvent,
        activeQuestionIndex: number,
    ): void => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            setAnswerHandler(activeQuestionIndex);
        }
    };

    useEffect(() => {
        setIsActiveClass(true);
        const timeoutId = setTimeout(() => {
            setIsActiveClass(false);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [activeFaqIndex]);

    return (
        <section className="container-fluid-bg px-0 mt-12 faq">
            <div className="container">
                <h2>{faqBlock.title}</h2>
                <div className="content">
                    <div className="questions">
                        {faqBlock.faqItems.map((faqItem, index) => (
                            <div key={index}>
                                <div
                                    tabIndex={0}
                                    onKeyDown={(e) =>
                                        setAnswerHandlerKeyboard(e, index)
                                    }
                                    onClick={() => setAnswerHandler(index)}
                                    key={faqItem.question}
                                    className={`item ${
                                        activeFaqIndex === index ? "active" : ""
                                    }`}
                                >
                                    <div className="icon-text">
                                        <LogoIcon
                                            isActive={
                                                activeFaqIndex === index
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <span
                                            className={
                                                activeFaqIndex === index
                                                    ? "h4"
                                                    : ""
                                            }
                                        >
                                            {faqItem.question}
                                        </span>
                                    </div>

                                    <Image
                                        className={`arrow-icon ${
                                            activeFaqIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                        src="/images/icons/arrow-bottom.svg"
                                        alt="arrow"
                                        width="11"
                                        height="5"
                                    />
                                </div>
                                <div
                                    className={`answer-adaptive ${
                                        activeFaqIndex === index
                                            ? "active"
                                            : "inactive"
                                    }`}
                                >
                                    <div className="h3-lg">
                                        {faqItem.answerTitle}
                                    </div>
                                    <p>{faqItem.answerDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="answer">
                        <div className={isActiveClass ? "answer-active" : ""}>
                            <div className="h3-lg">
                                {faqBlock.faqItems[activeFaqIndex]?.answerTitle}
                            </div>
                            <div
                                className="answer-danger"
                                dangerouslySetInnerHTML={{
                                    __html: faqBlock.faqItems[activeFaqIndex]
                                        ?.answerDescription,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionsAnswers;
