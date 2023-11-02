import Image from "next/image";
import { useState, KeyboardEvent, useRef } from "react";

import SelectProps from "./select.props";
import { monthWord } from "helpers/monthWord";
import IVariant from "./select.interface";
import Trans from "inc/locale/Trans";
import onClickOutsideHandler from "helpers/onClickOutside";

const Select = ({
    variants,
    setCurrentVariant,
    currentVariant,
    type,
}: SelectProps): JSX.Element => {
    /* открыт ли выбор вариантов */
    const [isVariantsOpen, setIsVariantsOpen] = useState<boolean>(false);

    const setIsVariantsOpenHandler = () => {
        /* открытие выбора вариантов */
        setIsVariantsOpen(!isVariantsOpen);
    };

    const setIsVariantsOpenHandlerKeyboard = (e: KeyboardEvent): void => {
        /* открытие выбора вариантов через клавиатуру */
        if (e.code === "Space" || e.code === "Enter") {
            e.preventDefault();
            setIsVariantsOpenHandler();
        }
    };

    const setCurrentVariantHandlerKeyboard = (
        /* установка текущего(активного) варианта через клавиатуру */
        e: KeyboardEvent,
        variantClicked: IVariant,
    ) => {
        if (e.code === "Space" || e.code === "Enter") {
            e.preventDefault();
            setCurrentVariant(variantClicked);
        }
    };

    const selectRef = useRef<HTMLDivElement>(null);
    onClickOutsideHandler(selectRef, () => {
        setIsVariantsOpen(false);
    });

    return (
        <div ref={selectRef} className="select">
            <button
                className="content"
                onClick={setIsVariantsOpenHandler}
                onKeyDown={setIsVariantsOpenHandlerKeyboard}
            >
                <span>{currentVariant}</span>
                <Image
                    src="/images/icons/arrow-bottom.svg"
                    alt="arrow"
                    width="13"
                    height="4"
                    /* когда выбор вариантов активен - стрелка переворачивается на 180 градусов */
                    className={isVariantsOpen ? "active" : ""}
                />
            </button>
            <div className={`variants ${isVariantsOpen ? "active" : ""}`}>
                {variants.map((variant, index) => (
                    <div
                        onClick={() => {
                            setCurrentVariant(variant);
                            setIsVariantsOpen(false);
                        }}
                        tabIndex={0}
                        key={index}
                        className="variant"
                        onKeyDown={(e) =>
                            setCurrentVariantHandlerKeyboard(e, variant)
                        }
                    >
                        {type === "periods" ? (
                            <>
                                {variant.title}{" "}
                                <Trans
                                    string={monthWord(Number(variant.title))}
                                />
                            </>
                        ) : (
                            <>
                                <Trans string={variant.title} />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;
