require('import-export');
require('babel-core/register')({
  presets: ['es2015', 'react'],
  plugins: ['transform-object-rest-spread'],
});

['.png', '.css', '.svg'].forEach((ext) => {
  require.extensions[ext] = () => {};
});

require('./server');
