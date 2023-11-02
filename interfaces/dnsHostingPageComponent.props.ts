import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import WhatIsDnsProps from "components/pageComponents/WhatIsDns/whatIsDns.props";
import WhatNeedToUseDnsProps from "components/pageComponents/WhatNeedUseDns/whatNeedToUseDns.props";

export default interface DnsHostingPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    whatIsDnsBlock: WhatIsDnsProps["whatIsDnsBlock"];
    mainInfoBlock: MainInfoProps["mainInfoBlock"];
    whatNeedToUseDnsBlock: WhatNeedToUseDnsProps["whatNeedToUseDnsBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
