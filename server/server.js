var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Items = require('./api/models/ItemModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Itemss');
/*
aItems = new Items({contents: ['hahahah'],name: 'iamnotstone'});

aItems.save(function(err,aItems){
	if(err) return console.error(err)
})
*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/ItemRoutes');
routes(app);

app.use(express.static('./client/dist/'))

app.listen(port);

console.log('react-redux-immutable-asynchronous-express RESTful API server started on: ' + port);
