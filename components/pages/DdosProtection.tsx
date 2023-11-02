import MainPageComponent from "components/pageComponents/MainPageComponent";
import DdosProtectionPageComponentProps from "interfaces/ddosProtectionPageComponent.props";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import ServicesDescription from "components/pageComponents/ServicesDescription";
import DdosProtectionBanner from "components/pageComponents/DdosProtectionBanner";
import ProvidingServices from "components/pageComponents/ProvidingServices";

const DdosProtection = ({
    mainBlock,
    servicesDescription,
    faqBlock,
    supportBlock,
    ddosProtectionBannerBlock,
    providingServicesBlock,
}: DdosProtectionPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #466EC3 0%, #030341 100%)"
                mainBlock={mainBlock}
            />
            <ServicesDescription
                servicesDescription={servicesDescription}
                isMinusMarginTop={true}
            />
            <DdosProtectionBanner
                ddosProtectionBannerBlock={ddosProtectionBannerBlock}
            />
            <ProvidingServices
                providingServicesBlock={providingServicesBlock}
            />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default DdosProtection;
