var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');
YAML = require('yamljs');

models = YAML.load('renames.yaml');

var url = 'mongodb://uwnbrbuvnesmjmf:9ajxQPBNaT9U9lrK27H7@b5wzaopbkq0zaoe-mongodb.services.clever-cloud.com:27017/b5wzaopbkq0zaoe'

// unique post views
// adds viewCount
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  var i = 0;
  db.collection('posts').find({status: 1}).snapshot().forEach(
  function(elem, index, array) {
    var newData = {}
    var users = []
    elem.views.forEach(function(view) {
      if(view.user && users.indexOf(view.user + '')==-1) {
        users.push(String(view.user))
      }
    })
    console.log(users.length, elem.views.length, elem.likes.length, elem.name)
    newData.viewCount = users.length
    db.collection('posts').update({
        _id: elem._id
      }, {
        $set: newData
      }).then(function(){
        // console.log('Done', ++i)
      });

  })
    // db.close();
});

