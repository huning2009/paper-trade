require('babel-register')({
    //presets: ['es2015']
    plugins: ['transform-es2015-modules-commonjs', ['transform-object-rest-spread', { useBuiltIns: true }]]
});
require('./' + process.argv[2] + '/index.js');