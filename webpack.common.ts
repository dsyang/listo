import { Configuration } from "webpack"

const commonConfig : Configuration = {
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
}

export default commonConfig
