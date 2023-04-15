/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    ALCHEMY_NETWORK: process.env.ALCHEMY_NETWORK,
    NEXT_PUBLIC_ALCHEMY_NETWORK: process.env.NEXT_PUBLIC_ALCHEMY_NETWORK,
    NEXT_PUBLIC_DEFAULT_CHAIN: process.env.NEXT_PUBLIC_DEFAULT_CHAIN,

    // Airstack
    AIRSTACK_API_KEY: process.env.AIRSTACK_API_KEY,
    AIRSTACK_ENDPOINT: process.env.AIRSTACK_ENDPOINT,
  },

}

module.exports = nextConfig
