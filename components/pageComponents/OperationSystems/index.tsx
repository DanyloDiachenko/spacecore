import Image from "next/image";

import OperationSystemProps from "./operationSystems.props";

const OperationSystems = ({
    operationSystemsBlock,
}: OperationSystemProps): JSX.Element => {
    const renderOperationSystems = (): JSX.Element => {
        return (
            <div className="right-col">
                {operationSystemsBlock.operationSystems.map(
                    (operationSystem, index) => (
                        <div key={index} className="item">
                            <div className="img-wrapper-wrapper">
                                <div className="img-wrapper">
                                    <Image
                                        src={operationSystem.imgSrc}
                                        alt={operationSystem.title}
                                        width={56}
                                        height={56}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="h3">
                                    {operationSystem.title}
                                </div>
                                <p>{operationSystem.description}</p>
                            </div>
                        </div>
                    ),
                )}
            </div>
        );
    };

    return (
        <section className="mt-12 container operation-systems">
            <div className="top">
                <div className="h2-md">{operationSystemsBlock.title}</div>
                <p>{operationSystemsBlock.description}</p>
            </div>
            {renderOperationSystems()}
        </section>
    );
};

export default OperationSystems;
