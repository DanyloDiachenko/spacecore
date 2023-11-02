import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import WhatIsDnsProps from "components/pageComponents/WhatIsDns/whatIsDns.props";
import WhatNeedToUseDnsProps from "components/pageComponents/WhatNeedUseDns/whatNeedToUseDns.props";

export default interface DnsHostingPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        what_is_dns_block: WhatIsDnsProps["whatIsDnsBlock"];
        main_info_block: MainInfoProps["mainInfoBlock"];
        what_need_to_use_dns_block: WhatNeedToUseDnsProps["whatNeedToUseDnsBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
