export const dotToAdd = (type: 2 | 98 | 1 | 99): JSX.Element => {
    let color = "";
    switch (type) {
        case 2: {
            color = "#8A39F8";
            break;
        }
        case 98: {
            color = "rgba(138, 57, 248, 0.5)";
            break;
        }
        case 1: {
            color = "#fd7081";
            break;
        }
        case 99: {
            color = "#FDB470";
            break;
        }
        default:
            color = "#8A39F8";
    }

    return (
        <svg
            width="6"
            height="6"
            fill={color}
            viewBox="0 0 6 6"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="3" cy="3" r="3" fill={color} />
        </svg>
    );
};
