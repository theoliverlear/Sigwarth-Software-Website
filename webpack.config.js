const path = require('path');

module.exports = {
    entry: './src/main/resources/static/script/globalScript.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/, // This will apply the loader to TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // recognize both JavaScript and TypeScript files
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/main/resources/static/script'),
    },
    mode: 'development'
};