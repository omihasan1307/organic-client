/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    // or if you want to use remotePatterns (Next.js 13+):
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//   },
// };

// // next.config.js
// const withTM = require("next-transpile-modules")(["react-image-zoom"]);

// module.exports = withTM({
//   reactStrictMode: false,
//   webpack: (config: any) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "react-image-zoom": "react-image-zoom/dist/index.js",
//     };
//     return config;
//   },
// });

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//    reactStrictMode: false,
// };

// export default nextConfig;
