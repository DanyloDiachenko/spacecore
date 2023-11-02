import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import MainTextComponentProps from "components/pageComponents/MainTextComponent/mainTextComponent.props";
import ReferralInviteFriendsProps from "components/pageComponents/ReferralInviteFriends/referralInviteFriends.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";
import { WhereReferralLinkProps } from "components/pageComponents/WhereReferralLink/whereReferalLink.props";

export default interface ReferralProgramPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    servicesDescriptionBlock: ServicesDescriptionProps["servicesDescription"];
    supportBlock: SupportProps["supportBlock"];
    referralBlock: MainTextComponentProps;
    whereReferralLinkBlock: WhereReferralLinkProps["whereReferralLinkBlock"];
    referralInviteFriendsBlock: ReferralInviteFriendsProps["referralInviteFriendsBlock"];
}
