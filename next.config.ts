import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/2-cerebro-ia',
        destination: 'https://lp.wp.academialendaria.ai/',
        permanent: false,
      },
      {
        source: '/gestor',
        destination: 'https://go.wp.academialendaria.ai/gestor/',
        permanent: false,
      },
      {
        source: '/formacao',
        destination: 'https://lendario.ai/formacao/',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: '/:path*',
          destination: 'https://wp.academialendaria.ai/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
