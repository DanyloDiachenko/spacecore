import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import MainTextComponentProps from "components/pageComponents/MainTextComponent/mainTextComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import ReferralInviteFriendsProps from "components/pageComponents/ReferralInviteFriends/referralInviteFriends.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface ReferralProgramPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        services_description_block: ServicesDescriptionProps["servicesDescription"];
        support_block: SupportProps["supportBlock"];
        referral_block: MainTextComponentProps;
        referral_invite_friends_block: ReferralInviteFriendsProps["referralInviteFriendsBlock"];
        faq_block: FaqProps["faqBlock"];
    };
}
