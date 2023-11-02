interface IButton {
    title: string;
    price: string;
}

export default interface DomainProps {
    domainBlock: {
        title: string;
        placeholder: string;
        buttonInputText: string;
        buttons: IButton[];
        buttonMore: string;
        priceDescription: string;
        mainDescription: string;
        imgSrc: string;
    };
}
