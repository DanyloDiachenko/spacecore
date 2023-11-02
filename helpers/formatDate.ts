import { useRouter } from "next/router";

const formatDate = (dateString: string): string => {
    const locale = useRouter().locale;

    const monthNames = {
        en: [
            "Jan.",
            "Feb.",
            "Mar.",
            "Apr.",
            "May",
            "Jun.",
            "Jul.",
            "Aug.",
            "Sep.",
            "Oct.",
            "Nov.",
            "Dec.",
        ],
        ru: [
            "янв.",
            "фев.",
            "мар.",
            "апр.",
            "мая",
            "июн.",
            "июл.",
            "авг.",
            "сен.",
            "окт.",
            "ноя.",
            "дек.",
        ],
        ua: [
            "січ.",
            "лют.",
            "бер.",
            "квіт.",
            "трав.",
            "черв.",
            "лип.",
            "серп.",
            "вер.",
            "жовт.",
            "лист.",
            "груд.",
        ],
    };

    const date = new Date(dateString);

    return `${date.getDate()} ${
        //@ts-ignore
        monthNames[locale][date.getMonth()]
    } ${date.getFullYear()}`;
};

export default formatDate;
