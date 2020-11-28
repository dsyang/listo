import {Configuration} from "webpack"
import merge from "webpack-merge"
import commonConfig from "./webpack.common"

module.exports = merge<Configuration>(commonConfig, {
    mode: 'development',
    devtool: "inline-cheap-source-map",
    entry: {
        background: ["./src/background.ts", "./src/debug.ts"],
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    }
})
