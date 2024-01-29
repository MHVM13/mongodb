const path = require('path'); // Чтобы пути были корректными на всех ОС
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development', // Может быть production, development (отличаются скоростью сборки и оптимизацией)
        entry: path.resolve(__dirname, 'src', 'scripts', 'main.js'), // Путь к entry point файлу
        cache: true,

        // Куда и как будет выводиться bundle JS файл
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.[contenthash].js',
            clean: true,
        },

        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },

                // {
                //     test: /\.scss$/i,
                //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                // }
            ]
        },

        devtool: 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            port: env.port ?? 8282,
            open: true,
        },
    }
};