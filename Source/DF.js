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
	groupOn(rc='row', indexName, maxrc, replVal=undefined, rFirst=true){
		//rc can be row, col or both
		if(rc=='row'){
			// this.groupOnRow('someName', '2', replVal='someotherName')
			// this.groupOnRow('someName', '2', replVal=undefined)
			// this.groupOnRow('someName', 'greedy', replVal='someotherName')
			// this.groupOnRow('someName', 'greedy', replVal=undefined)
			// this.groupOnRow(undefined, '2', replVal='someotherName')
			// this.groupOnRow(undefined, '2', replVal=undefined)
			// this.groupOnRow(undefined, 'greedy', replVal='someotherName')
			// this.groupOnRow(undefined, 'greedy', replVal=undefined)
		}else if(rc=='col'){
			// this.groupOnCol('someName', '2', replVal='someotherName')
			// this.groupOnCol('someName', '2', replVal=undefined)
			// this.groupOnCol('someName', 'greedy', replVal='someotherName')
			// this.groupOnCol('someName', 'greedy', replVal=undefined)
			// this.groupOnCol(undefined, '2', replVal='someotherName')
			// this.groupOnCol(undefined, '2', replVal=undefined)
			// this.groupOnCol(undefined, 'greedy', replVal='someotherName')
			// this.groupOnCol(undefined, 'greedy', replVal=undefined)
		}else{
			// this.groupOnCol('someName', '2', replVal='someotherName')
			// this.groupOnRow('someName', '2', replVal='someotherName')

			// this.groupOnCol('someName', '2', replVal=undefined)
			// this.groupOnRow('someName', '2', replVal=undefined)

			// this.groupOnCol('someName', 'greedy', replVal='someotherName')
			// this.groupOnRow('someName', 'greedy', replVal='someotherName')

			// this.groupOnCol('someName', 'greedy', replVal=undefined)
			// this.groupOnRow('someName', 'greedy', replVal=undefined)

			// this.groupOnCol(undefined, '2', replVal='someotherName')
			// this.groupOnRow(undefined, '2', replVal='someotherName')

			// this.groupOnCol(undefined, '2', replVal=undefined)
			// this.groupOnRow(undefined, '2', replVal=undefined)

			// this.groupOnCol(undefined, 'greedy', replVal='someotherName')
			// this.groupOnRow(undefined, 'greedy', replVal='someotherName')

			// this.groupOnCol(undefined, 'greedy', replVal=undefined)
			// this.groupOnRow(undefined, 'greedy', replVal=undefined)
			
		}
		
	}


	groupOnCol(colIndex, maxRow, replVal){
		//groups one column at a time
		//if replVal is specified, it will replace the value of the group index values
		//	if it is not, it will group only on a named index value
	}
	groupOnRow(rowIndex, maxCol, repVal){
		//groups one row at a time
	}


	getRowsOn(rowIndex){
		//
	}
}