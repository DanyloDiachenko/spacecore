export default interface SupportProps {
    supportBlock?: {
        type: "chat" | "email";
        imgSrc: string;
        title: string;
        description: string;
        buttonText: string;
        emailLink?: string;
    };
}
