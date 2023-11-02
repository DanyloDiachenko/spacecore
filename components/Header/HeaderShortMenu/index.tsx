import ArrowRight from "components/UI/Icons/ArrowRight";
import GearIcon from "components/UI/Icons/Gear";
import Link from "next/link";
import ShortMenuProps from "./shortMenu.props";

const ShortMenu = ({
    secondLevelMenu,
    className,
}: ShortMenuProps): JSX.Element => {
    return (
        <div className={`section-titles short-menu ${className}`}>
            <div style={{ minHeight: 0 }}>
                {secondLevelMenu.map((leftNav, index) => (
                    <Link
                        key={index}
                        href={leftNav.link}
                        tabIndex={0}
                        className="item"
                    >
                        <GearIcon isActive={false} />
                        <div className="text-arrow">
                            <span>{leftNav.title}</span>
                            <ArrowRight isActive={false} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ShortMenu;
