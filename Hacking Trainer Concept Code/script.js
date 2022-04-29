var img, map, con, can, ctx

window.onload = function () {
	lay1 = document.getElementById("lay1")
	lay2 = document.getElementById("lay2")
	lay3 = document.getElementById("lay3")
	map = document.getElementById("map")
	con = document.getElementById("con")
	ctx1 = lay1.getContext("2d")
	ctx2 = lay2.getContext("2d")
	node_start(7)
}

function canvas_resize(i) {
	con.style.width = i + "px"
	con.style.height = i + "px"
  lay1.width = lay2.width = cnw = lay1.offsetWidth
  lay1.height = lay2.height = cnh = lay1.offsetHeight
}

//Global

function hack_reset() {
	//Wipe both canvases
	//Wipe all buttons from map
	//Return to menu
}

function hack_fail() {
	//cleartimeouts
}

function hack_success() {
	//cleartimeouts
}





//Node

//This hack will be drawn in three layers
//Layer 1: The static layer which includes the basic interface which includes static elements
//Layer 2: The dynamic later which includes moving elements or elements subject to change
//Layer 3: The controls layer which includes all triggers that control the puzzle

function node_start(difficulty) {
	var display = { //content size will be unit*size+(2*offset)
		"offset":10,
		"unit":49
	}
	var levels = [
		null,
		{"size":5,"targets":2,"time":8,"boost":3.0,"warmup":3},
		{"size":5,"targets":3,"time":6,"boost":1.5,"warmup":3},
		{"size":7,"targets":3,"time":8,"boost":3.5,"warmup":3},
		{"size":7,"targets":5,"time":8,"boost":2.5,"warmup":3},
		{"size":9,"targets":5,"time":7.5,"boost":2.0,"warmup":3},
		{"size":9,"targets":7,"time":8.5,"boost":2.5,"warmup":2},
		{"size":11,"targets":7,"time":10,"boost":3.3,"warmup":2},
		{"size":11,"targets":9,"time":10,"boost":3.0,"warmup":2},
		{"size":13,"targets":10,"time":11,"boost":3.2,"warmup":1},
		{"size":13,"targets":14,"time":11,"boost":2.8,"warmup":1}
	]
	
	canvas_resize(display.unit * levels[difficulty].size + (2 * display.offset))
	//https://www.w3schools.com/tags/ref_canvas.asp
	//Draw experiment
	//Draw node shape
	var c = [0,0]
	ctx1.beginPath()
	//ctx1.strokeStyle = "hsla(119,53,51,1)"
	//ctx1.fillStyle = "hsla(116,89,4,1)"
	ctx1.strokeStyle = "blue"
	ctx1.fillStyle = "red"
	
	var outline1 = new Path2D('M 0,12 L 0,37 L 12,49 L 37,49 L 49,37 L 49,12 L 37,0 L 12,0 L 0,12')
	ctx1.fill(outline1)
	ctx1.stroke(outline1)
	
	//Generate array pattern with types and targets
	/*
	[
		[
			{"type":0,"target":0},
			{"type":1,"target":1},
			{"type":0,"target":0}
		],
		[
			{"type":1,"target":0},
			{"type":0,"target":0},
			{"type":1,"target":1}
		],
		[
			{"type":0,"target":1},
			{"type":1,"target":0},
			{"type":0,"target":0}
		]
	]
	*/
	
	//Link array
	/*
	[
		[0,1],
		[2,3],
		[4,5]
	]
	*/
	//Trigger initial draw of pattern
	//Wait for a moment and give player control
}

function node_drawnodes() {
	//Draws all nodes and interactive elements by iterating through all positions
	
	//Clear area
	//Draw base shape with no inner symbol or outline
	//Highlight node if target
	//Draw inner shape
}

function node_drawlinks() {
	//Clear area
	//Iterate through the link array and create links
}

function node_linkpreview(x,y,r) {
	//Add highlights to currently hovered connection
}

function node_linkpreviewout(x,y,r) {
	//Trigger redraw
}

function node_linkcreate(x,y,r) {
	//Compare target and source for matches in link array
	//If there is multiple matches, delete all elements after the earliest match and append the other node
	//If there is any match, delete all elements in array after the match and append the other node
	//If there is no match, do nothing
}

function node_timerstart(t) {
	//Save current global time
	//Save t as fulltimer
	//Start settimeout to node_timerend() and save a reference
}

function node_timeradd(t) {
	//Clear current setTimeout
	//Add t to fulltimer and save it 
	//Get difference of time of timerstart and now and subtract it from fulltimer
	//Start settimeout with time defined above
}

function node_timerend() {
	//Start a setinterval that jumps up the node tree and reaches the end
	/*
	function(){
		//Check if current index exists in array
			//If so
				//Jump to the position
				//Check if total targets in path matches level's total targets
					//If so
						//Trigger hack success
					//If not
						//Trigger hack failure
			//If not
				//Trigger hack failure
	}
	*/
}





//Stack

//This hack will be drawn in three layers
//Layer 1: The static layer which includes the basic interface which includes static elements
//Layer 2: The dynamic later which includes moving elements or elements subject to change
//Layer 3: The controls layer which includes all triggers that control the puzzle

function stack_start(difficulty) {
	var display = { //content size will be unit*size+(2*offset)
		"offset":10,
		"unit":10
	}
	var levels = [
		null,
		{"size":0,"skulls":0,"stacks":0,"timer":"?"}
	]
	
	//Define content size
	//Generate array pattern with random stacks, skulls, and pusher
	[
		[
			{"content":0},
			{"content":0},
			{"content":0}
		],
		[
			{"content":0},
			{"content":0},
			{"content":0}
		],
		[
			{"content":0},
			{"content":0},
			{"content":0}
		]
	]
	
	//Trigger initial draw of pattern
	//Wait for a moment and give player control
}

function stack_hoverhandler() {
	//Is something held?
		//If not 
			//If tile has pusher or stack
				//Highlight tile
		//If so
			//Show placement highlight
}

function stack_actionhandler() {
	//Is something held?
		//Is the selected location occupied?
			//If not
				//If stack
					//Are x&y coordinates both less than 2 units away from the pusher
						//If so
							//Place the stack in the new position
						//If not
							//Place the stack in the original position
				//If Pusher
					//Place Pusher
			//If so
				//Place the held item back in the original position
			
	//If skull
		//Trigger hack fail
	//If stack
		//Are x&y coordinates both less than 2 units away from the pusher
			//Pick up stack
	//If pusher
		//Pick up pusher
}

function stack_timerstart(t) {
	//Start settimeout to stack_timerend()
}

function stack_timerend() {
	//Trigger hack fail
}





//Mem

//This hack will be drawn in three layers
//Layer 1: The static layer which includes the basic interface which includes static elements
//Layer 2: The dynamic later which includes moving elements or elements subject to change
//Layer 3: The controls layer which includes all triggers that control the puzzle

function mem_start(difficulty) {
	var levels = [
		null,
		{"rounds":0,"length_max":0,"length_min":10}
	]
	var characters = "abcdefghijklmnopqrstuvwxyz".split("")
	
	//Define content size
	
	var solve = [] //Solve will be used to verify player choices
	var order = [] //Order will be used to display the order back
	
	//Trigger initial draw of pattern
	//Call mem_roundstart
}

function mem_roundstart() {
	//Generate length
	//Shuffle character array
	//Redefine timer to start time
	//Slice the first <length> characters from the array to use as the round
	//Trigger draw
	//Display sequence
	//Give player control
}

function mem_roundreplay() {
	//Lock controls
	//Replay current sequence
	//Unlock controls
}

function mem_roundfail() {
	//Pause timer
	//create new sequence
	//Display new sequence
	//Unpause timer
}

function mem_roundhandler(c) {
	//is c equal to scrap sequence index 0?
		//If so
			//Shift character out and mark character as correct
			//Is array length 0?
				//If so
					//Advance round
					//Is there another round
						//If not
							//Trigger success
						//If so
							//call mem_roundstart()
				//If not
					//Continue
		//if not
			//call mem_roundfail()
}

function mem_timerstart(t) {
	//Save start time
	//Save full time
	//Start settimeout to mem_timerend()
}

function mem_timerpause() {
	//Redefine full time as full time minus the difference of current timer minus start time
	//cleartimeout
}

function mem_timerplay() {
	//Start settimeout to mem_timerend() for <full time> seconds
}

function mem_timerend() {
	//Trigger hack fail
}