const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/main.js',
    output: {
        filename: 'js/[name].[contenthash:4].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '//js.cdn.com/id/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: path.resolve(__dirname, './src'),
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            // 处理非雪碧图的图片文件
            test: /\.(jpg|png|svg)$/,
            include: path.resolve(__dirname, './src'),
            exclude: path.resolve(__dirname, './src/img/sprite'),
            // url-loader 处理base64编码的图片
            // file-loader 处理图片的路径问题
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024 * 3,
                    // fallback: 'file-loader'
                    name: 'img/[name]-[contenthash:4].[ext]',
                    publicPath: '//img.cdn.com/id/'
                }
            }]
        }, {
            // 处理雪碧图的图片文件
            test: /\.png$/,
            include: path.resolve(__dirname, './src/img/sprite'),
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[contenthash:4].[ext]',
                    publicPath: '//img.cdn.com/id/'
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:4].css'
        }),
        new SpritesmithPlugin({
            //设置源icons,即icon的路径，必选项
            src: {
                cwd: path.resolve(__dirname, './src/img/sprite/icons'),
                glob: '*.png' //正则匹配，照着填即可
            },
            //设置导出的sprite图及对应的样式文件，必选项
            target: {
                image: path.resolve(__dirname, './src/img/sprite/index.png'),
                css: path.resolve(__dirname, './src/img/sprite/index.css')
            },
            //设置sprite.png的引用格式，会自己加入sprite.css的头部
            apiOptions: {
                cssImageRef: './index.png' //cssImageRef为必选项
            },
            //配置spritesmith选项，非必选
            spritesmithOptions: {
                algorithm: 'top-down', //设置图标的排列方式
                padding: 4 //每张小图的补白,避免雪碧图中边界部分的bug
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
};
