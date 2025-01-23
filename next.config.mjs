const isProd = process.env.NODE_ENV === 'production';

export default {
  basePath: isProd ? '/bko-portfolio' : '',
  assetPrefix: isProd ? '/bko-portfolio/' : '',
  images: {
    unoptimized: true,
  },
}; 