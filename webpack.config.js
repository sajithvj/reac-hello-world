var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  //devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  entry:[ 'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
   devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  module : {
    loaders : [
      {test : /\.jsx?/,include : APP_DIR, exclude: /node_modules/,loader : 'babel-loader',
		query: {
            // presets: ['es2015', 'stage-1', 'react'],
            presets: ['react',  ["es2015", {"modules": false}], 'stage-1'],
            plugins:["transform-runtime", "transform-decorators-legacy", "transform-object-rest-spread", 
            "transform-class-properties",
            "react-hot-loader/babel","transform-es2015-destructuring"]
	     }
	  },
	 
	   // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      // Used for Bootstrap css Source Files
      { test: /\.css/, loader: 'style-loader!css-loader' },
	  { test: /bootstrap\/js\//,loader: 'imports?jQuery=jquery' },
      // Used for Bootstrap Glyphicon Fonts
	  { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file-loader' }
    ]
  },
   plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
		
		]
};

module.exports = config;