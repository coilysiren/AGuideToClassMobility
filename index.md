---
layout: default
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

<section class="articles">
{% for post in site.posts %}
<article>
### [{{ post.title }}]({{ site.baseurl }}{{ post.url }})

{{ post.excerpt }}

[Read more]({{ site.baseurl }}{{ post.url }})
</article>
{% endfor %}
</section>
