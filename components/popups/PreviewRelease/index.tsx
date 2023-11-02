import { useEffect, useRef } from "react";

const PreviewReleasePopup = ({
    openPopup,
    onVideoEnd,
    videoUrl,
}: {
    openPopup: boolean;
    onVideoEnd: () => void;
    videoUrl: string;
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const popupClassName = openPopup
        ? "preview-release"
        : "preview-release closed";

    useEffect(() => {
        if (openPopup) {
            videoRef.current?.play();
        }
    }, [openPopup]);

    return (
        <section className="popup-wrapper preview-release-wrapper">
            <div className={popupClassName}>
                <video
                    ref={videoRef}
                    src={videoUrl}
                    autoPlay={false}
                    muted
                    onEnded={onVideoEnd}
                ></video>
            </div>
        </section>
    );
};

export default PreviewReleasePopup;
