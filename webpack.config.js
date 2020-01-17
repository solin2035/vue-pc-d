
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["./src/main.js"],  // 入口文件

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[hash:8].js",  //MD5加密规则得到的长度为8的随即字符串 加到 js文件名 后面  防止浏览器缓存
        publicPath: ""   //公共路径  上线需要弄
    },
    devtool: "source-map",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,  // 排除
                use: ["babel-loader"]
            },
            {
                test: /\.(png|gif|svg|jpg|woff|woff2|eot|ttf)\??.*$/,
                use: ["url-loader?limit=8192&name=font/[name].[hash:8].[ext]"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: [
                        { "css": "style-loader!css-loader" },
                        { "scss": "style-loader!css-loader!sass-loader" },
                        { "less": "style-loader!css-loader!less-loader" }
                    ]
                }
            },
            {
                test: /\.(css|scss)$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                pulgins: function () {
                                    return [
                                        require("cssgrace"),
                                        require('postcss-px2rem-exclude')(
                                            {
                                                remUnit: 100,
                                                exclude: /antd-mobile/i,  // 排除 antd-mobile不需要进行 rem 转换
                                            }
                                        ), // px 转 rem
                                        require("autoprefixer")
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(css|less)$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                pulgins: function () {
                                    return [
                                        require("cssgrace"),
                                        require('postcss-px2rem-exclude')(
                                            {
                                                remUnit: 100,
                                                exclude: /antd-mobile/i,  // 排除 antd-mobile不需要进行 rem 转换
                                            }
                                        ), // px 转 rem
                                        require("autoprefixer")
                                    ]
                                }
                            }
                        },
                        "less-loader"
                    ]
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        hot: true,
        host: "0.0.0.0",
        port: 7200,
        proxy: {

        },
        publicPath: "",  //公共路径
        historyApiFallback: true,
        disableHostCheck: true

    },
    plugins: [
        new openBrowserWebpackPlugin({ url: "http://localhost:7200" }),

        new htmlWebpackPlugin({
            template: "./src/index.html",    //指明编译的html
            inject: true	    //自动将打包组件 注入到index.html中
        }),
        new extractTextWebpackPlugin({
            filename: "css/app.[hash:8].css",
            allChunks: true,
            disable: true
        })
    ]

}