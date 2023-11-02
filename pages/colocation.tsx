import { GetServerSideProps } from "next";

import PlacingEquipment from "components/pages/PlacingEquipment";
import PlacingEquipmentPageProps from "interfaces/placingEquipmentPage.props";
import PlacingPricesProps from "components/pageComponents/PlacingPrices/placingPrices.props";

const PlacingEquipmentPage = ({
    content,
}: PlacingEquipmentPageProps): JSX.Element => {
    const {
        main_block,
        faq_block,
        support_block,
        placing_text_block,
        placing_prices_block,
    } = content;

    return (
        <PlacingEquipment
            mainBlock={main_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            placingTextBlock={placing_text_block}
            placingPricesBlock={placing_prices_block}
        />
    );
};

export default PlacingEquipmentPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/colocation.json`);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/colocation-prices?locale=${context.locale}`,
        );

        const resJson = await res.json();
        content.placing_prices_block.placingPrices = resJson.data.map(
            (item: { attributes: PlacingPricesProps["placingPricesBlock"] }) =>
                item.attributes,
        );
    } catch (e) {
        console.log(e);
        content.placing_prices_block.placingPrices = [];
    }

    return {
        props: {
            content,
        },
    };
};
