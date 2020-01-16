var Encore = require('@symfony/webpack-encore');
Encore

    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('build')

    .addEntry('main', './assets/js/main.js')
    .configureBabel()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[hash:8].[ext]'
    })
    .splitEntryChunks()
    .autoProvidejQuery()
    //.enablePostCssLoader()
    .enableVersioning(Encore.isProduction())

    //react-Options
    .enableReactPreset()


;
module.exports = Encore.getWebpackConfig();