const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./public/scripts/projects.js', './public/scripts/index.js'], // Your entry file
    output: {
        path: path.resolve(__dirname, './public/dist'), // Output directory
        filename: 'bundle.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ]
};

