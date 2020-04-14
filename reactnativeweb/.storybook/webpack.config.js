const path = require("path")

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        resolve: {
            modules: ["node_modules"], // probably not needed
            extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"], // probably not needed
            alias: {
                "react-native": "react-native-web"
            }
        }
    })

    return config
}