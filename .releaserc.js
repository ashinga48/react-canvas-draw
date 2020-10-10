module.exports = {
  branch: 'master',
  plugins: [
    ['@semantic-release/npm', { npmPublish: true }],
    '@semantic-release/github',
  ],
};
