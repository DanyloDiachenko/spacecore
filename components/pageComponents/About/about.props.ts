export default interface AboutProps {
    setOpenPopup: (popupToOpen: string) => void;
    aboutBlock: {
        title: string;
        description: string;
        videoLink: string;
        videoDuration: string;
    };
}
