import Image from "next/image";
import { connect } from "react-redux";

import AboutProps from "./about.props";
import Trans from "inc/locale/Trans";
import AboutPopup from "../../popups/About";

const About = ({ setOpenPopup, aboutBlock }: AboutProps): JSX.Element => {
    const setOpenPopupHandler = (): void => {
        setOpenPopup("about");
    };

    const renderTitle = (): JSX.Element => {
        const text: string =
            aboutBlock.title; /* Все о SpaceCore за ~1 минуту */
        const searchWord: string = "SpaceCore";

        const highlightedText: string = text.replace(
            new RegExp(searchWord, "gi"),
            `<span class="text-violet">${searchWord}</span>`,
        );

        return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    return (
        <>
            <AboutPopup videoLink={aboutBlock.videoLink} />
            <section className="about">
                <div className="wrapper container mt-12">
                    <div className="left-col">
                        <h2>{renderTitle()}</h2>
                        <div>{aboutBlock.description}</div>
                    </div>
                    <div className="right-col">
                        <div className="video-player">
                            <div className="logo-wrapper">
                                <Image
                                    src="/images/icons/logo-white.svg"
                                    alt="logo"
                                    width="302"
                                    height="35"
                                />
                                <div>
                                    <Trans string="открываем космос с 2018 года" />
                                </div>
                            </div>
                            <div className="play">
                                <Image
                                    tabIndex={0}
                                    src="/images/icons/play.svg"
                                    alt={aboutBlock.title}
                                    width="100"
                                    height="100"
                                    onClick={setOpenPopupHandler}
                                    className="img-play"
                                    loading="eager"
                                />
                                <div className="border-first"></div>
                                <div className="border-second"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapState = () => ({});
const mapDispatch = {
    setOpenPopup: (popupToOpen: string) => ({
        type: "SET_OPEN_POPUP",
        popupToOpen,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(About);
