import Image from "next/image";

import ReferralInviteFriendsProps from "./referralInviteFriends.props";

const ReferralInviteFriends = ({
    referralInviteFriendsBlock,
}: ReferralInviteFriendsProps): JSX.Element => {
    return (
        <section className="mt-12 invite-friends container">
            <h2>{referralInviteFriendsBlock.title}</h2>
            <div className="content">
                {referralInviteFriendsBlock.referrals.map((referral, index) => (
                    <article key={index} className="item">
                        <div className="number">
                            <Image
                                src="/images/small/line.svg"
                                alt="line"
                                width="60"
                                height="2"
                                className="left-line"
                            />
                            {referral.number}
                            <Image
                                src="/images/small/line.svg"
                                alt="line"
                                width="60"
                                height="2"
                                className="right-line"
                            />
                        </div>
                        <p>{referral.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ReferralInviteFriends;
