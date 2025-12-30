const path = 'href="' + location.pathname + '"'
const re = new RegExp('/.+?/')


fetch('/data/lang.html')
.then((response) => response.text())
.then((text) => {
	return text
	.replace("href='/jpn/'", path.replace(re, '/jpn/'))
	.replace("href='/tok/'", path.replace(re, '/tok/'))
	})
.then((text) => document.querySelector('#lang').innerHTML = text)

