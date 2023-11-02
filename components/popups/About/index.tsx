import { connect } from "react-redux";

import { IPopupInitStore } from "store/popups/initStore";
import AboutPopupProps from "./about.props";

const AboutPopup = ({
    openPopup,
    closePopup,
    videoLink,
}: AboutPopupProps): JSX.Element => {
    return (
        <section>
            {openPopup === "about" && (
                <>
                    <div
                        className="popup-active-bg"
                        onClick={() => closePopup()}
                    ></div>
                    <section className="popup-wrapper">
                        <iframe
                            className="popup-about"
                            src={videoLink + "?autoplay=1"}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </section>
                </>
            )}
        </section>
    );
};

const mapState = (state: { popups: IPopupInitStore }) => {
    return {
        openPopup: state.popups.openPopup,
    };
};
const mapDispatch = {
    closePopup: () => ({ type: "CLOSE_POPUPS" }),
};

const connector = connect(mapState, mapDispatch);

export default connector(AboutPopup);
