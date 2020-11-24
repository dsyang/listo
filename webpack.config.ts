module.exports = {
    mode: 'development',
    devtool: "inline-cheap-source-map",
    entry: {
        background: "./src/background.ts",
        popup: "./src/popup.tsx",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module.css$/i,
                use: ['style-loader','css-loader'],
                exclude: /dist/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', ".js", ".jsx"],
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    }
}
