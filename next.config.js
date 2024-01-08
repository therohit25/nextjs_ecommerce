/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: 'fakestoreapi.com'
        }]
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/products",
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
