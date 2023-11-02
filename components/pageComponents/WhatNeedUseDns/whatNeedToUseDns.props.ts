import IStep from "./step.interface";

export default interface WhatNeedToUseDnsProps {
    whatNeedToUseDnsBlock: {
        title: string;
        buttonText: string;
        buttonLink: string;
        steps: IStep[];
    };
}
