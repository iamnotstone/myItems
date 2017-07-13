var path=require("path");
module.exports = {
    entry:{
        index:path.resolve(__dirname,"src/index.js"),
    },
    output:{
                path:path.resolve(__dirname,"dist"),
	filename:"[name].bundle.js"
    },
    module : {
        loaders: [ { 
                test   : /\.js$|.jsx$/,
                loader : 'babel-loader',
		query: {
          		presets: ['es2015', 'react','stage-2']
        	}
            },
	]
    },
    watch : false
};
