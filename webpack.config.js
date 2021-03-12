const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main: path.resolve(__dirname, 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    }
}