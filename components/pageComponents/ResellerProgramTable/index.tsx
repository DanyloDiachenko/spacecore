import { useState } from "react";

import Trans from "inc/locale/Trans";
import { formatNumber } from "helpers/formatNumber";
import Button from "components/UI/Button";
import { IButton, ITableContentItem } from "./resellerProgramTable.interface";
import ResellerProgramTableProps from "./resellerProgramTable.props";

const ResellerProgramTable = ({
    resellerProgramTableBlock,
}: ResellerProgramTableProps): JSX.Element => {
    const [buttonType, setButtonType] = useState<IButton>(
        resellerProgramTableBlock.buttons[0],
    );
    const [activeTableContent, setActiveTableContent] = useState<
        ITableContentItem["content"]
    >(resellerProgramTableBlock.tableContent[0].content);

    const setActiveTableContentHandler = (button: IButton): void => {
        setButtonType(button);
        const findedTableItem = resellerProgramTableBlock.tableContent.find(
            (tableItem) => tableItem.titleKey == button.titleKey,
        );
        findedTableItem && setActiveTableContent(findedTableItem.content);
    };

    const monthWord = (monthNumber: number) => {
        if (monthNumber === 1) {
            return "месяц";
        } else if (monthNumber > 1 && monthNumber < 5) {
            return "месяца";
        } else {
            return "месяцев";
        }
    };

    return (
        <section className="reseller-program-table mt-12">
            <div className="buttons container">
                {resellerProgramTableBlock.buttons.map((button, index) => (
                    <Button
                        className={
                            buttonType.titleKey === button.titleKey
                                ? "active"
                                : ""
                        }
                        key={index}
                        background="white"
                        onClick={() => setActiveTableContentHandler(button)}
                    >
                        <span className="h6">
                            <Trans string={button.title} />
                        </span>
                    </Button>
                ))}
            </div>
            <table className="content-table container">
                <thead>
                    <tr className="top">
                        {resellerProgramTableBlock.tableTopTitles.map(
                            (topTitle, index) => (
                                <th key={index}>{topTitle}</th>
                            ),
                        )}
                    </tr>
                </thead>
                <tbody>
                    {activeTableContent.map((tableItem, index) => (
                        <tr key={index}>
                            <td>
                                <span className="h5">
                                    {
                                        resellerProgramTableBlock
                                            .tableTopTitles[0]
                                    }
                                </span>
                                <span className="value">
                                    {typeof tableItem.level === "number" ? (
                                        <span>Level {tableItem.level}</span>
                                    ) : (
                                        <span>
                                            <Trans string={tableItem.level} />
                                        </span>
                                    )}
                                </span>
                            </td>
                            <td>
                                <span className="h5">
                                    {
                                        resellerProgramTableBlock
                                            .tableTopTitles[1]
                                    }
                                </span>
                                <span className="value">
                                    {tableItem.length !== 0 && tableItem.length}
                                </span>
                            </td>
                            <td>
                                <span className="h5">
                                    {
                                        resellerProgramTableBlock
                                            .tableTopTitles[2]
                                    }
                                </span>
                                <span className="value">
                                    <Trans string="от" />{" "}
                                    <span className="value circulation">
                                        <span>
                                            {formatNumber(
                                                tableItem.circulation.from,
                                            )}
                                            ₽
                                        </span>
                                        ,{" "}
                                        <span>
                                            <br />
                                            {tableItem.circulation.to}
                                            EUR
                                        </span>
                                    </span>
                                </span>
                            </td>
                            <td>
                                <span className="h5">
                                    {
                                        resellerProgramTableBlock
                                            .tableTopTitles[3]
                                    }
                                </span>
                                <span className="value">
                                    {tableItem.update !== 0 && (
                                        <>
                                            {tableItem.update}{" "}
                                            <Trans
                                                string={monthWord(
                                                    tableItem.update,
                                                )}
                                            />
                                        </>
                                    )}
                                </span>
                            </td>
                            <td>
                                <span className="h5">
                                    {
                                        resellerProgramTableBlock
                                            .tableTopTitles[4]
                                    }
                                </span>
                                <span className="value">
                                    {tableItem.discount !== 0 && (
                                        <>{tableItem.discount}%</>
                                    )}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ResellerProgramTable;
