import IFaq from "./faq.interface";

export default interface FaqProps {
    faqBlock: {
        title: string;
        faqItems: IFaq[];
    };
}
