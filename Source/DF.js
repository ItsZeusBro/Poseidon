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

	groupOnCol(columnName, maxRows, replacementVal){
		// groups on any column with columnName, so long as they all share the same value //default if value shared
		// If they don't have the same value, you can replace the value	//expected if value not shared
		//maxRows is set to infinity if not specified, and reorders the rows to fit the col group
	}

	groupOnRow(rowName, maxCols, replacementVal){
		// groups on any row with rowName, so long as they all share the same value //default if value shared
		// If they don't have the same value, you can replace the value	//expected if value not shared
		//maxCols is set to infinity if not specified, and reorders the cols to fit the row group
	}
}