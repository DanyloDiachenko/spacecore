import { useState } from "react";

import MainPageComponent from "components/pageComponents/MainPageComponent";
import MainInfo from "components/pageComponents/MainInfo";
import NotFindedSearched from "components/pageComponents/NotFindedSearched";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import DomainInput from "components/pageComponents/DomainInput";
import DomainsToChoose from "components/pageComponents/DomainsToChoose";
import { getDomains } from "api/domains";
import DomainNamePageComponentProps from "interfaces/domainNamePageComponent.props";
import { useRouter } from "next/router";

const DonainName = ({
    domain,
    mainInfoBlock,
    mainBlock,
    faqBlock,
    supportBlock,
    notFindedInformationBlock,
    domainBlock,
}: DomainNamePageComponentProps): JSX.Element => {
    const [domainsToChoose, setDomainsToChoose] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const checkDomain = (domain: string) => {
        setIsLoading(true);

        getDomains(domain, router.locale)
            .then((res) => {
                setDomainsToChoose(res);
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    };

    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #4497C6 49.48%, #2FEEC0 100%)"
                mainBlock={mainBlock}
            />
            <DomainInput
                domainBlock={domainBlock}
                domain={domain}
                onChange={(domain: string) => checkDomain(domain)}
                isLoading={isLoading}
            />
            <DomainsToChoose domains={domainsToChoose} />
            <MainInfo mainInfoBlock={mainInfoBlock} />
            <NotFindedSearched
                notFindedSearchedBlock={notFindedInformationBlock}
            />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default DonainName;
