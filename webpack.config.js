process.traceDeprecation = true;
const path = require("path");
const patternslib_config = require("@patternslib/patternslib/webpack/webpack.config.js");
const package_json = require("./package.json");

module.exports = async (env, argv) => {
    let config = {
        entry: {
            "bundle.min": path.resolve(__dirname, "index.js"),
        },
    };
    config = patternslib_config(env, argv, config, [], package_json.dependencies);
    config.output.path = path.resolve(__dirname, "dist/");

    if (process.env.NODE_ENV === "development") {
        config.devServer.port = "3100";
        config.devServer.static.directory = __dirname;
    }

    return config;
};
