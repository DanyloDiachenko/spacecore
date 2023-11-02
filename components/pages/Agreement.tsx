import Trans from "inc/locale/Trans";
import Support from "components/pageComponents/Support";
import NewsFilters from "components/pageComponents/NewsFilters";
import AgreementPageComponentProps from "interfaces/agreementPageComponent.props";

const Agreement = ({
    newsFiltersBlock,
    supportBlock,
    contentBlock,
}: AgreementPageComponentProps): JSX.Element => {
    return (
        <>
            <section className="container agreement">
                <NewsFilters newsFiltersBlock={newsFiltersBlock} />
                <div className="routes">
                    <Trans string="Главная" /> — <Trans string="Документы" /> —
                </div>
                <>
                    <div
                        className="wrapper"
                        dangerouslySetInnerHTML={{ __html: contentBlock }}
                    />
                    {/*  */}
                </>
            </section>
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default Agreement;
