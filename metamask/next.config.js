/** @type {import('next').NextConfig} */
const { DEFENDER_URL, SMART_WALLET_URL } = process.env;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/defender",
        destination: `${DEFENDER_URL}/defender`,
      },
      {
        source: "/defender/:path*",
        destination: `${DEFENDER_URL}/defender/:path*`,
      },
      {
        source: "/smart-wallet",
        destination: `${SMART_WALLET_URL}/smart-wallet`,
      },
      {
        source: "/smart-wallet/:path*",
        destination: `${SMART_WALLET_URL}/smart-wallet/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  basePath: "",
};

module.exports = nextConfig;
