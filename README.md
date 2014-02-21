Fix my mailman!
==============

I got angry at Mailman archives one day so I made a bookmarklet to take you away from a (public) Mailman post and help you find the much prettier Gmane page.


To use it, create a bookmarklet with this link:

```
javascript:var i,s,ss=['//raw.github.com/jvns/fix-my-mailman/master/fix-my-mailman.js','//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
```

You can also drag the bookmarklet link if you go [to the blog post](http://jvns.ca/blog/2014/02/20/a-bookmarklet-to-escape-mailman-archives/) (GitHub doesn't let you link to Javascript, probably because of security or something silly)
