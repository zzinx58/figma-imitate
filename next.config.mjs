/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.myqcloud.com',
            }
        ]
    }
};

export default nextConfig;
