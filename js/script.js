var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');

document.addEventListener('mousemove', function(e){ 
	$(f1).css('-webkit-clip-path', 'polygon(' + e.pageX + 'px ' + e.pageY + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px)');
	$(f2).css('-webkit-clip-path', 'polygon(' + e.pageX + 'px ' + e.pageY + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px)');
	$(f3).css('-webkit-clip-path', 'polygon(' + e.pageX + 'px ' + e.pageY + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px, ' + window.innerWidth * Math.random() + 'px ' + window.innerHeight * Math.random() + 'px)');
}, false);

var pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    variance: '1',
    x_colors: 'random',
	cell_size: 50});
pattern.canvas(f1);

var pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    variance: '1',
    x_colors: 'random',
	cell_size: 125});
pattern.canvas(f2);

var pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    variance: '1',
    x_colors: 'random',
	cell_size: 250});
pattern.canvas(f3);

$(document).on('click', function() {
	var pattern = Trianglify({
	    height: window.innerHeight,
	    width: window.innerWidth,
	    variance: '1',
	    x_colors: 'random',
		cell_size: 50});
	pattern.canvas(f1);

	var pattern = Trianglify({
	    height: window.innerHeight,
	    width: window.innerWidth,
	    variance: '1',
	    x_colors: 'random',
		cell_size: 125});
	pattern.canvas(f2);

	var pattern = Trianglify({
	    height: window.innerHeight,
	    width: window.innerWidth,
	    variance: '1',
	    x_colors: 'random',
		cell_size: 250});
	pattern.canvas(f3);
});

function touchHandler(event) {
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
	switch(event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;        
        case "touchend":   type="mouseup"; break;
        default: return;
    }

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
    	first.screenX, first.screenY, 
       	first.clientX, first.clientY, false, 
        false, false, false, 0, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

document.addEventListener("touchstart", touchHandler, true);
document.addEventListener("touchmove", touchHandler, true);
document.addEventListener("touchend", touchHandler, true);
document.addEventListener("touchcancel", touchHandler, true);

document.body.setAttribute('class', 'visible');

if ( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ) {
    $('p').show();
}