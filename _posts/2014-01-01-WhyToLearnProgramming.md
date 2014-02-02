---
title: Why to Learn Programming
layout: post
excerpt: Why to Learn Programming
tags:
 - why-to-learn-programming
published: true
---

Why should you learn programming?

Some people are interested in programming for programming’s sake (much as some people will enthusiastically debate the demerits of dangling participles outside of English classrooms). Most people are only interested in what language, programmatic or otherwise, permits them to do. 

<!--An example, here or somewhere else, of the types of things you can do with a background in programming would be helpful for beginners-->

When starting out in programming, it is important to focus on the end result. Software can be useful in almost any pursuit, so choose one that interests you. That interest will help you push through the roadblocks that can and will come between you and your goals.

With that in mind, remember: programming is just another tool in your toolkit; a new language to help you accomplish your goals. And just like any other tool, the most powerful or most complex tool is not always going to be the most useful.

Many complex technologies are built on newer languages that have been explicitly designed to ease software development. C may seem like the foundation of programming, but so was COBAL at one point. Focus on a language you can and will learn, not a language that *seems* important. 

<!--Might add that the framework for programming transfers well between different languages, kind of like learning how grammar works.-->

<!-- links to languages -->

<section id="posts">
{% for post in site.posts %}
<article>
### [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
            
{{ post.excerpt }}
            
[Read more]({{ site.baseurl }}{{ post.url }})
</article>
{% endfor %}
</section>
