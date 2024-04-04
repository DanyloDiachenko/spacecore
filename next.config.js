/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    /* compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  }, */
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "my.spacecore.me",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
    i18n: {
        locales: ["default", "ru", "ua", "en"],
        defaultLocale: "default",
        localeDetection: false,
    },
    trailingSlash: true,
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "http://localhost:3000,2.58.57.56:443,https://lg-nl-ams.hybula.net/",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,DELETE,PATCH,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
