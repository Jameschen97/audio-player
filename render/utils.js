var log = function() {
	console.log.apply(console, arguments)
}

var e = function(element) {
	return document.querySelector(element)
}

var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
	element.addEventListener(eventName, callback)
}

var bindAll = function(selector, eventName, callback) {
    var selectors = document.querySelectorAll(selector)
    for (var i = 0; i < selectors.length; i++) {
        selectors[i].addEventListener(eventName, callback)
    }
}

var find = function(element, selector) {
    return element.querySelector(selector)
}

var clearClass = function(classItems, className) {
    // clearClass('.owen-item', 'hignlight')
    var items = document.querySelectorAll(classItems)
    for (var i = 0; i < items.length; i++) {
        if(items[i].classList.contains(className)) {
            items[i].classList.remove(className)
        }
    }
}
