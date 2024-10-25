import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    reactCompiler: true,
  },
  redirects: async () => {
    return [
      {
        destination: '/welcome',
        permanent: true,
        source: '/',
      },
      {
        destination: '/result',
        permanent: true,
        source: '/6',
      },
    ];
  },
};

export default nextConfig;
