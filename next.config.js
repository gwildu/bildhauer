/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = nextConfig;
