import IconProps from "./icons.props";

const ArrowRight = ({ isActive }: IconProps): JSX.Element => {
    return (
        <svg
            width="6"
            height="14"
            viewBox="0 0 6 14"
            stroke={isActive ? "#fd7081" : "#8A39F8"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1.09389 12.5771C1.0362 12.481 1.03681 12.3608 1.09547 12.2653L3.98887 7.55496C4.18293 7.23905 4.18627 6.8417 3.99756 6.52256L1.17079 1.74208C1.11178 1.6423 1.11413 1.51777 1.17684 1.42028C1.3006 1.22789 1.58387 1.23399 1.69924 1.43151L4.69713 6.56421C4.88353 6.88335 4.87871 7.27928 4.68459 7.59378L1.60693 12.5802C1.48874 12.7717 1.20972 12.77 1.09389 12.5771Z" />
        </svg>
    );
};

export default ArrowRight;
