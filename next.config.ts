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
    ];
  },
};

export default nextConfig;
