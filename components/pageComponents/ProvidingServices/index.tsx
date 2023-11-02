import Image from "next/image";

import ProvidingServicesProps from "./providingServices.props";

const ProvidingServices = ({
    providingServicesBlock,
}: ProvidingServicesProps): JSX.Element => {
    return (
        <section className="container mt-12 providing-services">
            <h2>{providingServicesBlock.title}</h2>
            <div className="content">
                <div>
                    {providingServicesBlock.providingServices.map(
                        (provService, index) => (
                            <div key={index} className="item">
                                <Image
                                    src="/images/small/logo.svg"
                                    alt="logo"
                                    width="27"
                                    height="26"
                                />
                                <p>{provService}</p>
                            </div>
                        ),
                    )}
                </div>
                <img
                    src={providingServicesBlock.imgSrc}
                    alt={providingServicesBlock.title + "photo"}
                    width="365"
                    height="511"
                    className="banner"
                />
            </div>
        </section>
    );
};

export default ProvidingServices;
