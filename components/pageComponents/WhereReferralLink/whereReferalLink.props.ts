export interface IWhereRefLinkQuestion {
    question: string;
    answer: string;
}

export interface WhereReferralLinkProps {
    whereReferralLinkBlock: {
        title: string;
        questions: IWhereRefLinkQuestion[];
        imgSrc: string;
        description: string;
        documentTitle: string;
        documentLink: string;
    };
}
