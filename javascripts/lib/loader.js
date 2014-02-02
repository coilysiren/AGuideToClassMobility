var Collection = function() {
  this.all = {};
}

Collection.prototype.each = function(callback, context) {
  _.each(this.all, callback, context);
}

Collection.prototype.add = function(object) {
  this.all[object.id] = object;
}

var Tags = new Collection();

Tags.addMany = function(tags) {
  tags.forEach(function(tag) {
    var id = tag.toLowerCase();
    Tags.all[id] = {
      id: id,
      human: tag.split(/[-_]/).map(_.str.capitalize).join(' ')
    }
  });
}

var Posts = new Collection();

Posts.load = function() {
  return reqwest({
    url: 'posts.json'
  }).then(function(response) {
    response.posts.forEach(function(post) {
      Posts.add(post);
      Tags.addMany(post.tags);
    });
  });
};
