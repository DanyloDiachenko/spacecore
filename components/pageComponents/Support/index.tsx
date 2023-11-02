import Link from "next/link";

import Button from "components/UI/Button";
import SupportProps from "./support.props";

const Support = ({ supportBlock }: SupportProps): JSX.Element => {
    if (!supportBlock) {
        return <></>;
    }

    return (
        <>
            <section className="mt-12 container support">
                <div>
                    <img
                        src={supportBlock.imgSrc}
                        alt={supportBlock.title + "photo"}
                        className={
                            supportBlock.type === "email" ? "email-img" : ""
                        }
                        width="597"
                        height="506"
                    />
                </div>
                <div className="right-col">
                    <h2>{supportBlock.title}</h2>
                    {supportBlock.type === "chat" && (
                        <p style={{ fontSize: "20px" }}>
                            {supportBlock.description}
                        </p>
                    )}
                    {supportBlock.type === "email" && (
                        <Link
                            className="email"
                            href={
                                supportBlock.emailLink
                                    ? supportBlock.emailLink
                                    : ""
                            }
                        >
                            <span className="h4">
                                {supportBlock.description}
                            </span>
                        </Link>
                    )}
                    {supportBlock.type === "chat" && (
                        <Button background="rose">
                            <span className="h6">
                                {supportBlock.buttonText}
                            </span>
                        </Button>
                    )}
                </div>
            </section>
        </>
    );
};

export default Support;
