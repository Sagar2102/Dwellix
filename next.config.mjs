/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: [ 
        'res.cloudinary.com',
        'avatars.githubusercontent.com',
      ]
    }
  }

export default nextConfig;
