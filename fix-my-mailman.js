var text = $('pre')[0].innerText.substr(0, 100);
text = text.replace(/ \w+$/, '').replace("\n", " ");
var search = '"' + text + '"' + ' site:comments.gmane.org';
console.log(search);
window.location = "http://duckduckgo.com/?q=! " + search;
