/*
  @Name: Flip Text
  @Author: Rudra Sarkar
  @Description:  Create a mirror text. Rotate letters 180 degrees with Unicode and turn text upside down.
*/

function getText() {
	var flipped = document.tBox.flipped.value;
}

function flipText() {
	var result = flipStr(document.tBox.original.value);
	document.tBox.flipped.value = result;
}

function flipStr(theStr) {
	theStr = theStr.toLowerCase();
	var last = theStr.length - 1;
	var result = "";
	for (var i = last; i >= 0; --i) {
		result += Char(theStr.charAt(i))
	}
	return result;
}

function Char(fc) {
	if (fc == 'a') {
		return '\u0250'
	}
	else if (fc == 'b') {
		return 'q'
	}
	else if (fc == 'c') {
		return '\u0254'
	}
	else if (fc == 'd') {
		return 'p'
	}
	else if (fc == 'e') {
		return '\u01DD'
	}
	else if (fc == 'f') {
		return '\u025F'
	}
	else if (fc == 'g') {
		return 'b'
	}
	else if (fc == 'h') {
		return '\u0265'
	}
	else if (fc == 'i') {
		return '\u0131'
	}
	else if (fc == 'j') {
		return '\u0638'
	}
	else if (fc == 'k') {
		return '\u029E'
	}
	else if (fc == 'l') {
		return '\u05DF'
	}
	else if (fc == 'm') {
		return '\u026F'
	}
	else if (fc == 'n') {
		return 'u'
	}
	else if (fc == 'o') {
		return 'o'
	}
	else if (fc == 'p') {
		return 'd'
	}
	else if (fc == 'q') {
		return 'b'
	}
	else if (fc == 'r') {
		return '\u0279'
	}
	else if (fc == 's') {
		return 's'
	}
	else if (fc == 't') {
		return '\u0287'
	}
	else if (fc == 'u') {
		return 'n'
	}
	else if (fc == 'v') {
		return '\u028C'
	}
	else if (fc == 'w') {
		return '\u028D'
	}
	else if (fc == 'x') {
		return 'x'
	}
	else if (fc == 'y') {
		return '\u028E'
	}
	else if (fc == 'z') {
		return 'z'
	}
	else if (fc == '[') {
		return ']'
	}
	else if (fc == ']') {
		return '['
	}
	else if (fc == '(') {
		return ')'
	}
	else if (fc == ')') {
		return '('
	}
	else if (fc == '{') {
		return '}'
	}
	else if (fc == '}') {
		return '{'
	}
	else if (fc == '?') {
		return '\u00BF'  
	}
	else if (fc == '\u00BF') {
		return '?'
	}
	else if (fc == '!') {
		return '\u00A1'
	}
	else if (fc == "\'") {
		return ','
	}
	else if (fc == ',') {
		return "\'"
	}
	else if (fc == '.') {
		return '\u02D9'
	}
	else if (fc == '_') {
		return '\u203E'
	}
	else if (fc == ';') {
		return '\u061B'
	}
	else if (fc == '9') {
		return '6'
	}
	else if (fc == '6') {
		return '9'
	}

	return fc;
}