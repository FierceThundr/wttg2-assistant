
/*  
		The Welcome To The Game II Assistant is built to help players of WTTG2
		Copyright (C) 2021 Fierce Thunder

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

//==========================================================================Functions

function setup() {//Prepares website lists and appearance
	document.getElementById("dom_color").innerHTML = `body {color:hsl(120,100%,50%)} .simplebar-scrollbar::before {background-color:hsl(120,100%,50%)} .child {color:hsl(120,100%,30%)} .secondary {color:hsl(0,100%,50%)} .disabled {color:hsl(0,100%,20%)}`;
	setTimeout(function(){
		document.getElementById("load_cover").style.opacity = 0;
	},500);
	var x = new XMLHttpRequest();
	x.onreadystatechange = function() { 
		if (x.readyState == 4 && x.status == 200) {
			var d = JSON.parse(x.responseText);
			document.getElementById("version").innerHTML = `<i>Wttg Assistant Version 1.4.0.${d[0].sha.slice(0,7)}</i>`;
		}
	};
	x.open("GET","https://api.github.com/repos/fiercethundr/wttg2-assistant/commits?per_page=1",true);
	x.send();
}