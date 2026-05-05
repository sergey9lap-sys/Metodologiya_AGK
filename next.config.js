/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "optim.tildacdn.com",
      },
      {
        protocol: "https",
        hostname: "static.tildacdn.com",
      },
      {
        protocol: "https",
        hostname: "logo-teka.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "agkedu.getcourse.ru",
      },
    ],
  },
};

module.exports = nextConfig;
