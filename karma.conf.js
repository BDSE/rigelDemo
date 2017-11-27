/**
 * KarmaJS for running the unit tests
 * We are using webpack to bundle up the test js files and feed them to a browser, Phantom or Chrome can be used
 * Mocha can understand CommonJs pattern but it cant read ES6's import/export pattern, so we need to use babel to
 * transpile, which in this file we are using through webpack.
 * Testing Framework: this file uses Mocha with assertion library, chai. Jasmine can also be used.
 * Webpack: test-contex.js serves as an entry file to webpack, all test js files must be imported there.
 */
const path = require('path');
module.exports = function (config) {
    config.set({
        files: [
            {
                pattern: 'test-context.js',
                watched: false
            }
        ],
        exclude: ['**/*.png', '**/*.scss'],
        frameworks: ['mocha', 'chai'],
        preprocessors: {
            //this file becomes the entry point for webpack, import all test files here and webpack
            //will create a bundle out of it.
            'test-context.js': ['webpack']
        },
        port: 9876,
        webpack: {
            devtool: 'inline-source-map',
            output: {
                publicPath: '/'
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: [/lib/, /node_modules/],
                        use: 'babel-loader' // using babel to transpile ES6 code in the test files.
                    },
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: { esModules: true }
                        },
                        enforce: 'post',
                        include: path.resolve('src/main/webapp/resources/js')
                    },
                    {
                        test: /\.(jpe?g|png|gif|svg)$/,
                        use: [{
                            loader: 'file-loader'
                        }]
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            'style-loade',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ]
            },
            watch: false
        },
        webpackServer: {
            noInfo: true
        },
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        reporters: ['mocha', 'coverage-istanbul'],

        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            dir: path.join(__dirname, 'jsCoverageReport'),
            'report-config': {
                html: {
                    subdir: 'html'
                }
            },
            fixWebpackSourcePaths: true
        },
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
