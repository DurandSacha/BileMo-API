var Encore = require('@symfony/webpack-encore');
Encore

    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('build')

    .addEntry('main', './assets/js/main.js')
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[hash:8].[ext]'
    })
    .splitEntryChunks()
    .autoProvidejQuery()
    .enablePostCssLoader()
    .enableVersioning(Encore.isProduction())


;
module.exports = Encore.getWebpackConfig();