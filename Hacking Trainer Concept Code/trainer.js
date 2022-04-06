//Node

//The node hack will be drawn with 3 layers

//Layer 1: The static layer which includes the basic interface including the nodes themselves and target outlines
//Layer 2: The connection layer which includes all connection the player creates or is hovering
//Layer 3: The controls layer which includes all highlight/click triggers that control the puzzle

function node_start(difficulty) {
	var levels = [
		null,
		{"size":0,"targets":0,"timer":"?"}
	]
	
	//Generate array pattern with types and targets
	[
		[
			{"type":0,"target":0},
			{"type":1,"target":1},
			{"type":0,"target":0},
		],
		[
			{"type":1,"target":0},
			{"type":0,"target":0},
			{"type":1,"target":1},
		],
		[
			{"type":0,"target":1},
			{"type":1,"target":0},
			{"type":0,"target":0},
		],
	]
	
	//Link array
	[
		[0,1],
		[2,3],
		[4,5]
	]
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


//Mem