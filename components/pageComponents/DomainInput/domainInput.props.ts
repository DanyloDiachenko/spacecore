export default interface DomainInputBlockProps {
    domain: string;
    onChange: (value: string) => void;
    isLoading: boolean;

    domainBlock: {
        title: string;
        componentTitle: string;
        placeholder: string;
        buttonText: string;
        imgSrc: string;
    };
}
