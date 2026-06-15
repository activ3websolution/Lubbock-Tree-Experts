
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // IMPORTANT: Replace 'your-repo-name' with the name of your GitHub repository
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
