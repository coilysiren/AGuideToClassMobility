---
layout: page
---

People are aware that someone can learn to code, and then hit it big. One liners
like:

* Just make an app and sell it!
* Programmers are the biggest up and coming highly paid professional group
* Programming? There are online classes for that

Are rampant! But less common is advice on how one would go from not knowing how
to program at all to being paid for it. This issue is exacerbated for people
coming from low income and don’t have resources to devote to starting a new
career in the first place.

A guide to class mobility is a comprehensive guide for getting people from “just
learned high school math” to “paid programmer”.

It takes more than just going over Python the Hard Way; here's where to find
those steps.


<input id="search-field" type="search" placeholder="What are you looking for?" /><br />

<p id="tag-cloud">&nbsp;</p>

<section id="posts">
  {% for post in site.posts %}
<article>
### [{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{{ post.excerpt }}

[Read more]({{ site.baseurl }}{{ post.url }})
</article>
{% endfor %}
</section>
<script type="text/javascript" src="{{ site.baseurl }}/javascripts/main.js"></script>

<script type="text/template" id="post-template">
<article>
  <h3><a href="<%= url %>"><%= title %></a></h3>
  <p><%= excerpt %></p>
  <p><a href="<%= url %>">Read More</a></p>
</article>
</script>
