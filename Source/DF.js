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
			if(typeof indexName === 'string'){
				if(maxrc=='greedy'){

					if(typeof replVal === 'string'){
						// this.groupOnRow('someName', 'greedy', replVal='someotherName')

					}else if(!replVal){
						// this.groupOnRow('someName', 'greedy', replVal=undefined)

					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else if(Number.isInteger(maxrc)){
					
					if(typeof replVal === 'string'){
						// this.groupOnRow('someName', '2', replVal='someotherName')
					}else if(!replVal){
						// this.groupOnRow('someName', '2', replVal=undefined)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){

				if(maxrc=="greedy"){

					if(typeof replVal === 'string'){
						// this.groupOnRow(undefined, 'greedy', replVal='someotherName')
					}else if(!replVal){
						// this.groupOnRow(undefined, 'greedy', replVal=undefined)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else if(Number.isInteger(maxrc)){

					if(typeof replVal === 'string'){
						// this.groupOnRow(undefined, '2', replVal='someotherName')
					}else if(!replVal){
						// this.groupOnRow(undefined, '2', replVal=undefined)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else{
				throw Error("indexName needs to be defined as a string or as undefined")
			}

		}else if(rc=='col'){

			if(typeof indexName === 'string'){
				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){

					}else if(!replVal){

					}else{
						throw Error("replVal needs to be a string or undefined")
					}

					// this.groupOnCol('someName', 'greedy', replVal='someotherName')
					// this.groupOnCol('someName', 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol('someName', '2', replVal='someotherName')
					// this.groupOnCol('someName', '2', replVal=undefined)
				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){

				if(maxrc=="greedy"){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol(undefined, 'greedy', replVal='someotherName')
					// this.groupOnCol(undefined, 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol(undefined, '2', replVal='someotherName')
					// this.groupOnCol(undefined, '2', replVal=undefined)
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}

			}else{
				throw Error("indexName needs to be defined as a string or as undefined")
			}
		}else{

			if(indexName){

				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol('someName', 'greedy', replVal='someotherName')
					// this.groupOnRow('someName', 'greedy', replVal='someotherName')

					// this.groupOnCol('someName', 'greedy', replVal=undefined)
					// this.groupOnRow('someName', 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol('someName', '2', replVal='someotherName')
					// this.groupOnRow('someName', '2', replVal='someotherName')

					// this.groupOnCol('someName', '2', replVal=undefined)
					// this.groupOnRow('someName', '2', replVal=undefined)
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}
				
			}else{

				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol(undefined, 'greedy', replVal='someotherName')
					// this.groupOnRow(undefined, 'greedy', replVal='someotherName')

					// this.groupOnCol(undefined, 'greedy', replVal=undefined)
					// this.groupOnRow(undefined, 'greedy', replVal=undefined)
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){

					}else if(!replVal){
						
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
					// this.groupOnCol(undefined, '2', replVal='someotherName')
					// this.groupOnRow(undefined, '2', replVal='someotherName')

					// this.groupOnCol(undefined, '2', replVal=undefined)
					// this.groupOnRow(undefined, '2', replVal=undefined)
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
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