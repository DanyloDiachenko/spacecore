import MainPageComponent from "components/pageComponents/MainPageComponent";
import ReferralText from "components/pageComponents/MainTextComponent";
import ServicesDescription from "components/pageComponents/ServicesDescription";
import Support from "components/pageComponents/Support";
import ReferralInviteFriends from "components/pageComponents/ReferralInviteFriends";
import WhereReferralLink from "components/pageComponents/WhereReferralLink";
import ReferralProgramPageComponentProps from "interfaces/referralProgramPageComponent.props";

const ReferralProgram = ({
    mainBlock,
    supportBlock,
    servicesDescriptionBlock,
    referralBlock,
    referralInviteFriendsBlock,
    whereReferralLinkBlock,
}: ReferralProgramPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(351.15deg, #E6FBF4 -46.22%, #699DED 34.3%, #5940FC 131.22%)"
                mainBlock={mainBlock}
            />
            <ReferralText
                title={referralBlock.title}
                description={referralBlock.description}
            />
            <ServicesDescription
                servicesDescription={servicesDescriptionBlock}
                isMinusMarginTop={false}
            />
            <ReferralInviteFriends
                referralInviteFriendsBlock={referralInviteFriendsBlock}
            />
            <WhereReferralLink
                whereReferralLinkBlock={whereReferralLinkBlock}
            />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default ReferralProgram;
