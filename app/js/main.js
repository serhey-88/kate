function toggleActive(event) {
	if (event.target.className.split(' ')[event.target.className.split(' ').length-1] !== '_is-active') {
		event.target.className += ' _is-active'
	} else {
		var temp = event.target.className.split(' ');
		temp.pop();
		event.target.className = temp.join(' ');
	}
}