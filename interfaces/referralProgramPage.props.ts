import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import MainTextComponentProps from "components/pageComponents/MainTextComponent/mainTextComponent.props";
import ReferralInviteFriendsProps from "components/pageComponents/ReferralInviteFriends/referralInviteFriends.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";
import { WhereReferralLinkProps } from "components/pageComponents/WhereReferralLink/whereReferalLink.props";

export default interface ReferralProgramPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        services_description_block: ServicesDescriptionProps["servicesDescription"];
        support_block: SupportProps["supportBlock"];
        referral_block: MainTextComponentProps;
        where_referral_link_block: WhereReferralLinkProps["whereReferralLinkBlock"];
        referral_invite_friends_block: ReferralInviteFriendsProps["referralInviteFriendsBlock"];
    };
}
