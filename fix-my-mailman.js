var text = $('pre')[0].innerText.substr(0, 100);
text = text.replace(/ \w+$/, '').replace(/\s+/, " ");
var search = '"' + text + '"' + ' site:comments.gmane.org';
window.location = "http://google.com/?hl=en&q= " + search + "&btnI=1";
