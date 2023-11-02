export const formatNumber = (num: number): string => {
    /* аргумент = 30000, возврат "30 000" */
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
