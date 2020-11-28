import { Configuration } from "webpack"
import merge from "webpack-merge"
import commonConfig from "./webpack.common"

module.exports = merge<Configuration>(commonConfig, {
    mode: 'production',
    devtool: "source-map",
})
