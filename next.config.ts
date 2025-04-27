/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

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
