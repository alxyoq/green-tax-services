/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'web-assets.same.dev'],
  },
  output: 'export', // Enables static HTML export
  trailingSlash: true, // Adds trailing slashes to URLs
};

export default nextConfig;
