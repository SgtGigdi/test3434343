const merge = require("webpack-merge");
const common = require(`${__dirname}/webpack.common.js`);
const webpack = require("webpack");

module.exports = merge.merge(common, {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
        }),
    ],
});
