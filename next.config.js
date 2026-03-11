const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  output: "export",
  reactStrictMode: true,
});

module.exports = nextConfig;
