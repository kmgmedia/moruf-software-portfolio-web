import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/images/[hash][ext][query]'
      },
      include: [require('path').resolve(__dirname, 'assets')],
    });
    return config;
  },
};

export default nextConfig;
