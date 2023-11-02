import Image from "next/image";

import MainPageComponentProps from "./mainComponent.props";

const MainPageComponent = ({
    mainBlock,
    background,
}: MainPageComponentProps): JSX.Element => {
    return (
        <section
            style={{ background: background }}
            className="main main-item container-fluid"
        >
            <div className="container">
                <div className="content">
                    <div className="info">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: mainBlock.title,
                            }}
                        ></h1>
                        <div
                            className="description"
                            dangerouslySetInnerHTML={{
                                __html: mainBlock.description,
                            }}
                        ></div>
                    </div>
                    <div className="img-col">
                        <Image
                            priority={true}
                            loading="eager"
                            quality={100}
                            src={mainBlock.imgSrc}
                            alt={mainBlock.title + "photo"}
                            width={0}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPageComponent;
