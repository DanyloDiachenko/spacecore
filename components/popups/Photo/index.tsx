import { connect } from "react-redux";
import PhotoPopupProps from "./photo.props";
import { IPopupInitStore } from "store/popups/initStore";

const PhotoPopup = ({
    openPopup,
    closePopup,
}: PhotoPopupProps): JSX.Element => {
    return (
        <section>
            {[".png", ".webp", ".svg"].some((ext) =>
                openPopup.includes(ext),
            ) && (
                <>
                    <div
                        className="popup-active-bg"
                        onClick={() => closePopup()}
                    ></div>
                    <section className="popup-wrapper popup-wrapper-photo">
                        <div className="popup-about popup-photo">
                            <div className="close">
                                <img
                                    src="/images/icons/close.svg"
                                    alt="close"
                                    onClick={() => closePopup()}
                                />
                            </div>
                            <img className="banner" src={openPopup} alt="#" />
                        </div>
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

export default connector(PhotoPopup);
