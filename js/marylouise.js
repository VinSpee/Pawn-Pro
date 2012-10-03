var code = document.getElementById('code');
var output = document.getElementById('output');

var convert = function() {
	c = code.value.toLowerCase();
	o = '';
	d = '';
	for (l in c) {
		l = c.charAt(l);
		switch (l) {
			case 'm':
				d = '1';
				break;
			case 'a':
				d = '2';
				break;
			case 'r':
				d = '3';
				break;
			case 'y':
				d = '4';
				break;
			case 'l':
				d = '5';
				break;
			case 'o':
				d = '6';
				break;
			case 'u':
				d = '7';
				break;
			case 'i':
				d = '8';
				break;
			case 's':
				d = '9';
				break;
			case 'e':
				d = '0';
				break;
			default:
				break;
		}
		o = o + d;
	}
	o = o.slice(0, -2) + '.' + o.slice(-2);
	output.innerHTML = o;
};
