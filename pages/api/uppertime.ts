// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default function getUppertime(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    req;
    return fetch("https://api.uptimerobot.com/v2/getMonitors", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
        },
        body:
            "api_key=" +
            process.env.UPTIMEROBOT_API_KEY +
            "&format=json&logs=1",
    })
        .then((res) => res.json())
        .then((data) => {
            res.status(200).json(data);
            return data;
        })
        .catch((err) => res.status(400).json(err));
}
