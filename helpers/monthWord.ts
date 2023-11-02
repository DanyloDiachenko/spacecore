export const monthWord = (monthNumber: number) => {
    if (monthNumber === 1) {
        return "месяц";
    } else if (monthNumber > 1 && monthNumber < 5) {
        return "месяца";
    } else {
        return "месяцев";
    }
};
