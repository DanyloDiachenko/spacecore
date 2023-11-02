import { Tooltip as ReactTooltip } from "react-tooltip";

import TooltipProps from "./tooltip.props";

const Tooltip = ({ title, id }: TooltipProps): JSX.Element => {
    return <ReactTooltip id={id} place="top" content={title} />;
};

export default Tooltip;
