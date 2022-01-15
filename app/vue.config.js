module.exports = {
    // publicPath: "./", // hash模式下打包用
    publicPath: "/", // history模式下打包用
    devServer: {
        open: true,
        port: 8080,
        historyApiFallback: true, // history模式本地开发用
    }
}
