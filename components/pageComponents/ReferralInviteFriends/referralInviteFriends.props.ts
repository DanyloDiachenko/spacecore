import IReferral from "./referrals.interface";

export default interface ReferralInviteFriendsProps {
    referralInviteFriendsBlock: {
        title: string;
        referrals: IReferral[];
    };
}
