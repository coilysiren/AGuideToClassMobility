var Renderer = (function() {

  var postTemplate = (function() {
    var at;
    return function(post) {
      at = at || _.template(document.getElementById('post-template').text);
      return at(post);
    }
  })();

  var postsSection = (function() {
    var s;
    return function() {
      return s = s || document.getElementById('posts');
    }
  })();

  var posts
  return {
    renderPosts: function(posts) {
      var postsHtml = _.reduce(posts, function(m, p) {
        return m + postTemplate(p);
      }, "");

      postsSection().innerHTML = postsHtml;
    }
  }
})()
