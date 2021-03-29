// npm i -g purgecss
// purgecss --config ./purgecss.config.js --output purgecss/vendor-purged.css

module.exports = {
  content: ['**/*.js', '**/*.html', '**/*.md'],
  css: ['assets/css/vendor.css'],
  fontFace: true,
  keyframes: true,
  rejected: false,
  variables: true
};

