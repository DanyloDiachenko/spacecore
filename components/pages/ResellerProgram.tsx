import Link from "next/link";
import MainPageComponent from "components/pageComponents/MainPageComponent";
import ResellerText from "components/pageComponents/MainTextComponent";
import ServicesDescription from "components/pageComponents/ServicesDescription";
import Support from "components/pageComponents/Support";
import ResellerProgramTable from "components/pageComponents/ResellerProgramTable";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import ResellerProgramPageComponentProps from "interfaces/resellerProgramPageComponent.props";

const ResellerProgram = ({
    mainBlock,
    servicesDescriptionBlock,
    faqBlock,
    supportBlock,
    resellersTextBlock,
    resellersDescriptionBlock,
    resellerProgramTableBlock,
}: ResellerProgramPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #220F6A 0%, #14085A 100%)"
                mainBlock={mainBlock}
            />
            <ResellerText
                description={resellersTextBlock.description}
                title={resellersTextBlock.title}
            />
            <ServicesDescription
                servicesDescription={servicesDescriptionBlock}
                isMinusMarginTop={false}
            />
            <ResellerProgramTable
                resellerProgramTableBlock={resellerProgramTableBlock}
            />
            <p className="container mt-12 text-reseller">
                {resellersDescriptionBlock.description}
                <Link href={resellersDescriptionBlock.documentLink}>
                    {resellersDescriptionBlock.documentTitle}
                </Link>
            </p>
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default ResellerProgram;
