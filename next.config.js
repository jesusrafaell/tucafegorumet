/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		// domains: ['res.cloudinary.com'],
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
