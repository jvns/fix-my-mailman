var text = $('pre')[0].innerText.substr(0, 100);
text = text.replace(/ \w+$/, '').replace(/\s+/, " ").replace("\n", " ");
var search = '"' + text + '"' + ' site:comments.gmane.org';
search = search.replace(' ', '+');
window.location = "http://google.com/search?hl=en&output=search&sclient=psy-ab&q=" + search + "&btnI=I";
