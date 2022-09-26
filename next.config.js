module.exports = {
	reactStrictMode: false,
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'images.unsplash.com',
			'ipfs.infura.io',
		],
	},
};
const config = {
	webpack5: true,
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'images.unsplash.com',
			'ipfs.infura.io',
		],
	},
};

// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(config);
