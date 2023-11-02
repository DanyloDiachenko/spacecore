import MainInfoProps from "./mainInfo.props";

const MainInfo = ({ mainInfoBlock }: MainInfoProps): JSX.Element => {
    return (
        <section className="mt-12 container-fluid-bg main-info px-0">
            <div className="container">
                {mainInfoBlock.map((infoItem, index) => (
                    <div
                        key={index}
                        className={`item ${
                            infoItem.id % 2 !== 0 ? "item-reversed" : ""
                        }`}
                    >
                        <div className="left-col">
                            {/* <Image
                                src={infoItem.imgSrc}
                                alt={infoItem.title + " photo"}
                                width={0}
                                height={0}
                                layout="responsive"
                            /> */}
                            {infoItem.imgSrc ? (
                                <img
                                    src={infoItem.imgSrc}
                                    alt={infoItem.title + " photo"}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="right-col">
                            <div className="h2-sm">{infoItem.title}</div>
                            <div
                                className="description"
                                dangerouslySetInnerHTML={{
                                    __html: infoItem.description,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainInfo;
