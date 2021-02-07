/*
module.exports = {
    devServer: {
        proxy: 'http://localhost:8081/',
    }
}*/
// vue.config.js
/*
module.exports = {
    // https://cli.vuejs.org/config/#devserver-proxy
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8081',
                ws: true,
                //changeOrigin: true,

            }
        },
    }
}
*/
/*
module.exports = {
    outputDir: '../../target/classes/static'
}*/
module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:8080',
                changeOrigin: true
            },
        }
    },
    outputDir: '../../target/classes/static'
}