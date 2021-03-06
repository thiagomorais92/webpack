module.exports = {
    entry: ["./entry.js",
            "./app/components/angular/angular.js",
            "./app/components/angular-ui-router/release/angular-ui-router.min.js",
            "./app/components/lodash/dist/lodash.min.js",
            "./app/components/restangular/dist/restangular.min.js",
            "./app/components/AngularJS-Toaster/toaster.min.css",
            "./app/components/angular-animate/angular-animate.js",
            "./app/components/AngularJS-Toaster/toaster.min.js",
            "./style.css"],
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
