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
			if(indexName){
				if(maxrc=='greedy'){
					// this.groupOnRow('someName', 'greedy', replVal='someotherName')
					// this.groupOnRow('someName', 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					// this.groupOnRow('someName', '2', replVal='someotherName')
					// this.groupOnRow('someName', '2', replVal=undefined)
				}

			}else{
				if(maxrc=="greedy"){
					// this.groupOnRow(undefined, 'greedy', replVal='someotherName')
					// this.groupOnRow(undefined, 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					// this.groupOnRow(undefined, '2', replVal='someotherName')
					// this.groupOnRow(undefined, '2', replVal=undefined)
				}
			}
			
		}else if(rc=='col'){
			if(indexName){
				if(maxrc=='greedy'){
					// this.groupOnCol('someName', 'greedy', replVal='someotherName')
					// this.groupOnCol('someName', 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					// this.groupOnCol('someName', '2', replVal='someotherName')
					// this.groupOnCol('someName', '2', replVal=undefined)
				}
			}else{
				if(maxrc=="greedy"){
					// this.groupOnCol(undefined, 'greedy', replVal='someotherName')
					// this.groupOnCol(undefined, 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					// this.groupOnCol(undefined, '2', replVal='someotherName')
					// this.groupOnCol(undefined, '2', replVal=undefined)
				}else{
					throw Error('you need a fucking manual for this shit')
				}
			}
			
		}else{
			if(indexName){
				if(maxrc=='greedy'){
					// this.groupOnCol('someName', 'greedy', replVal='someotherName')
					// this.groupOnRow('someName', 'greedy', replVal='someotherName')

					// this.groupOnCol('someName', 'greedy', replVal=undefined)
					// this.groupOnRow('someName', 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					// this.groupOnCol('someName', '2', replVal='someotherName')
					// this.groupOnRow('someName', '2', replVal='someotherName')

					// this.groupOnCol('someName', '2', replVal=undefined)
					// this.groupOnRow('someName', '2', replVal=undefined)
				}else{
					throw Error('you need a fucking manual for this shit')
				}
				
			}else{
				if(maxrc=='greedy'){
					// this.groupOnCol(undefined, 'greedy', replVal='someotherName')
					// this.groupOnRow(undefined, 'greedy', replVal='someotherName')

					// this.groupOnCol(undefined, 'greedy', replVal=undefined)
					// this.groupOnRow(undefined, 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					// this.groupOnCol(undefined, '2', replVal='someotherName')
					// this.groupOnRow(undefined, '2', replVal='someotherName')

					// this.groupOnCol(undefined, '2', replVal=undefined)
					// this.groupOnRow(undefined, '2', replVal=undefined)
				}else{
					throw Error('you need a fucking manual for this shit')
				}

			}
			
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