import Image from "next/image";

import DdosProtectionBannerProps from "./ddosProtectionBanner.props";

const DdosProtectionBanner = ({
    ddosProtectionBannerBlock,
}: DdosProtectionBannerProps): JSX.Element => {
    return (
        <section className="ddos-banner mt-12 container">
            <Image
                src={ddosProtectionBannerBlock.imgSrcLight}
                alt={ddosProtectionBannerBlock.imgSrcLight + " photo"}
                width="1071"
                height="469"
                className="light"
            />
            <Image
                src={ddosProtectionBannerBlock.imgSrcDark}
                alt={ddosProtectionBannerBlock.imgSrcDark + " photo"}
                width="1071"
                height="469"
                className="dark"
            />
        </section>
    );
};

export default DdosProtectionBanner;
