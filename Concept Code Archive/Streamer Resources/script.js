//=============================
//=============================Popup Functions
//=============================
function popwifi() {
	if (data.popup.wifi.active != 1) {
		data.popup.wifi.active = 1;
		data.popup.wifi.reference = window.open("popup.html","Wifi Mimic","height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no");
		data.popup.wifi.reference.document.onunload = function() {
			var win = window.opener;
			if (!win.closed) {win.popwificlose();}
		};
		data.popup.wifi.reference.document.onload = function() {
			var win = window.opener;
			if (!win.closed) {win.timerdisplay();}
		};
	}
}

function popwificlose() {
	data.popup.wifi.active = 0;
}

function popnotes() {
	if (data.popup.notes.active != 1) {
		data.popup.notes.active = 1;
		data.popup.notes.reference = window.open("popup.html","Notes Mimic","height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no");
		data.popup.notes.reference.document.onunload = function() {
			var win = window.opener;
			if (!win.closed) {win.popnotesclose();}
		};
		data.popup.notes.reference.document.onload = function() {
			var win = window.opener;
			if (!win.closed) {win.noteinput();}
		};
	}
}

function popnotesclose() {
	data.popup.notes.active = 0;
}