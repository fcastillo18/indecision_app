const path = require("path");

module.exports = {  
    entry: './src/app.js',
    output:{
        //the absolute path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/, //looking for every file that ends with this. After that, specified the loder
            use: [//array of loders
                'style-loader',
                'css-loader',
                'sass-loader'//behind the scenes, sass-loader use node-sass to compile the file to regular css
                //for this loader is necessary node-sass
            ]
        }]
    },
    //con esta linea es posible debugguear la linea que lanza error en consola
    //sin esta solo se veria una linea en el bundle, mas no el error source
    devtool:'cheap-module-eval-source-map',
    //like live server
    devServer:{
        contentBase: path.join(__dirname, 'public')
    }
}

