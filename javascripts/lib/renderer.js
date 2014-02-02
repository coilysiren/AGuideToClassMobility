var Renderer = function() { };
Renderer.prototype.collectionToHtml = function(id, collection) {
  var template = this.templateFn;

  var html = _.reduce(collection, function(m, i) {
    return m + template(i);
  }, "");

  document.getElementById(id).innerHTML = html;
}

var TagCloudRenderer = new Renderer();
TagCloudRenderer.templateFn = _.template('<a class="tag" href="#<%= id %>"><%= human %></a>&nbsp;');

TagCloudRenderer.render = function(tags) {
  this.collectionToHtml('tag-cloud', tags);
};

var PostRenderer = (function() {
  var renderer = new Renderer();

  renderer.templateFn = (function() {
    var at;
    return function(post) {
      at = at || _.template(document.getElementById('post-template').text);
      return at(post);
    }
  })();

  renderer.render = function(posts) {
    this.collectionToHtml('posts', posts)
  }

  return renderer;
})()
