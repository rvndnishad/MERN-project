module.exports = {
    mongoURI: 'mongodb://arvind:arvind123@ds133084.mlab.com:33084/devconnector',
    secretOrKey: 'secret',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
};
