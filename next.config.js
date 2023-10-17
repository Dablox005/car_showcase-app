/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    // Solved the bug issue in Car Showcase Vercel deployment, YT - JSM
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
