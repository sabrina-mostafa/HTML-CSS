//  Convert today's date according to UTC in a string

var d=new Date();
		document.write("Original form: ");
		document.write(d+ "<br/>" );
		document.write("To string (universal time): ");
		document.write(d.toUTCString());
