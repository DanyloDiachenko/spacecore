import { GetServerSideProps } from "next";

import ReferralProgram from "components/pages/ReferralProgram";
import ReferralProgramPageProps from "interfaces/referralProgramPage.props";

const ReferralProgramPage = ({
    content,
}: ReferralProgramPageProps): JSX.Element => {
    const {
        main_block,
        support_block,
        services_description_block,
        referral_block,
        faq_block,
        referral_invite_friends_block,
    } = content;

    return (
        <ReferralProgram
            mainBlock={main_block}
            supportBlock={support_block}
            servicesDescriptionBlock={services_description_block}
            referralBlock={referral_block}
            faqBlock={faq_block}
            referralInviteFriendsBlock={referral_invite_friends_block}
        />
    );
};

export default ReferralProgramPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/referral-program.json`);

    return {
        props: {
            content,
        },
    };
};
