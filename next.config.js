const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat",
    },
  },
});

module.exports = nextConfig;
