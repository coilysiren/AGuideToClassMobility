var Searcher = (function() {
    var index = lunr(function() {
      this.field('title', { boost: 10 });
      this.field('excerpt', { boost: 5 });
      this.field('tags', { boost: 20 });
      this.ref('id');
    });

    return {
      indexPost: function(p) {
        index.add({
          title: p.title.toLowerCase(),
          excerpt: p.excerpt.toLowerCase(),
          tags: p.tags.join(' ').toLowerCase(),
          id: p.id
        });
      },
      search: function(words) {
        return index.search(words).map(function(result) {
          return _.extend({}, allPosts[result.ref], result);
        });
      }
    }
})()
