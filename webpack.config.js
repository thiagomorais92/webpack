module.exports = {
    entry: ["./entry.js",
            "./app/components/angular/angular.js",
            "./app/components/angular-ui-router/release/angular-ui-router.min.js",
            "./app/components/lodash/dist/lodash.min.js",
            "./app/components/restangular/dist/restangular.min.js",
            "./style.css",
            "./app/config/ResourceService.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
