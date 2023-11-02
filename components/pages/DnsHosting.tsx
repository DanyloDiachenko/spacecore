import MainPageComponent from "components/pageComponents/MainPageComponent";
import MainInfo from "components/pageComponents/MainInfo";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import WhatIsDns from "components/pageComponents/WhatIsDns";
import WhatNeedToUseDns from "components/pageComponents/WhatNeedUseDns";
import DnsHostingPageComponentProps from "interfaces/dnsHostingPageComponent.props";

const DnsHosting = ({
    mainBlock,
    mainInfoBlock,
    faqBlock,
    supportBlock,
    whatIsDnsBlock,
    whatNeedToUseDnsBlock,
}: DnsHostingPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #414EC4 49.48%, #3B80CC 100%)"
                mainBlock={mainBlock}
            />
            <WhatIsDns whatIsDnsBlock={whatIsDnsBlock} />
            <MainInfo mainInfoBlock={mainInfoBlock} />
            <WhatNeedToUseDns whatNeedToUseDnsBlock={whatNeedToUseDnsBlock} />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default DnsHosting;
