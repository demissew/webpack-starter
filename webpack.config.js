const path = require('path');

module.exports = {
    entry: {
        button: './src/button.js',
        about: './src/about.js',
        contact: './src/contact.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            // Used to generate a complied js code that can run on most browsers
                            '@babel/preset-env',
                            // JSX
                            '@babel/preset-react',
                        ],
                    },
                },
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
