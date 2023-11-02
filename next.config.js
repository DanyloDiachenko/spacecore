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
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
