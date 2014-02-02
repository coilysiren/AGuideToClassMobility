(function() {
  var loadPosts = function() {
    return reqwest({
      url: 'posts.json'
    });
  };

  window.searchPosts = _.debounce(function(words) {
    var results = Searcher.search(words);
    Renderer.renderPosts(results);
  }, 100);

  var main = function() {
    allPosts = {};
    loadPosts().then(function(posts) {
      posts.posts.forEach(function(post) {
        Searcher.indexPost(post);
        allPosts[post.id] = post;
      });
    });

    onDomReady(function() {
      document.getElementById('search-field').addEventListener('keypress', function() {
        searchPosts(this.value.toLowerCase());
      });
    });
  }
  main();

})();
