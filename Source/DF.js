class DF{
	constructor(){

	}

	readCsv(){

	}
	head(){

	}
	tail(){

	}
	describe(){

	}
	writeCsv(){

	}
	merge(){

	}
	groupBy(){

	}

	iloc(){

	}

	loc(){

	}
	sortBy(){

	}
	applyTo(){

	}

	timeDelta(){

	}

	plot(){
		
	}

	flip(){

	}
	rotate(){
		
	}
	//the col index in the example is "Grocery Type"
	groupOn(rc='row', index='', maxrc='inf', replVal){
		//groups on any row or col (rc must be specified) 
		//	with the index value set by index, so long as they all share the same value //default if value shared
		//if rc is not specified, return error
		
		//If they don't have the same index, replace the index value if specified 
		//	otherwise returns the same df without change

		//If index is not specified, then it groups on all r or c indicies that share the same index value 
		
		//maxrc is set to infinity if not specified, and reorders the r or c with the index value to fit the col group
	}


	getRowsOn(rowIndex){
		//
	}
}