//@ts-ignore
import Checkbox from "react-custom-checkbox";

import CheckboxesProps from "./checkboxes.props";

const Checkboxes = ({
    checkboxes,
    cpuCheckboxStates,
    onCpuCheckboxChange,
    diskCheckboxStates,
    onDiskCheckboxChange,
}: CheckboxesProps): JSX.Element => {
    const checkedIcon = (): JSX.Element => {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#8a39f8",
                }}
            >
                <img
                    src="/images/icons/checked.svg"
                    style={{ width: 18 }}
                    alt="checked"
                />
            </div>
        );
    };

    return (
        <div className="cores-select">
            <div className="cores-first">
                <div className="h3">{checkboxes[0].title}</div>
                <div className="cores-first-content">
                    {checkboxes[0].filterTitles.map((checkbox, index) => (
                        <div className="item" key={index}>
                            <label>
                                <Checkbox
                                    tabIndex={0}
                                    className="checkbox"
                                    borderColor="#8a39f8"
                                    icon={checkedIcon()}
                                    checked={cpuCheckboxStates[checkbox.key]}
                                    onChange={() =>
                                        onCpuCheckboxChange(checkbox.key)
                                    }
                                />
                                <p>{checkbox.title}</p>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cores-second">
                <div className="h3">{checkboxes[1].title}</div>
                <div className="content">
                    {checkboxes[1].filterTitles.map((checkbox, index) => (
                        <div className="item" key={index}>
                            <Checkbox
                                tabIndex={0}
                                className="checkbox"
                                borderColor="#8a39f8"
                                icon={checkedIcon()}
                                checked={diskCheckboxStates[checkbox.key]}
                                onChange={() =>
                                    onDiskCheckboxChange(checkbox.key)
                                }
                            />
                            <p>{checkbox.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Checkboxes;
