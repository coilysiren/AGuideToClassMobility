(function() {
  var searchPosts = _.debounce(function(words) {
    var results = Searcher.search(words);
    PostRenderer.render(results);
  }, 100);

  var main = function() {
    Posts.load().then(function(posts) {
      Posts.each(function(post) {
        Searcher.indexPost(post);
      });

      onDomReady(function() {
        TagCloudRenderer.render(Tags.all);
      });
    })

    var searchHandler = function() {
      searchPosts(searchField.value.toLowerCase());
    }

    var hashChangeHandler = function() {
      var hash = window.location.hash;
      searchField.value = hash.substr(1, hash.length - 1);
      searchHandler();
    }

    var searchField;
    onDomReady(function() {
      searchField = document.getElementById('search-field');
      searchField.addEventListener('keypress', searchHandler);
      window.addEventListener("hashchange",  hashChangeHandler);
      hashChangeHandler();
    });
  }

  main();
})();
