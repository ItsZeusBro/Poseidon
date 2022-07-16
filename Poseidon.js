export class DF{
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
		if(rc!='row'||rc!='col'||rc!=undefined){
			throw Error("rc must be row, col, or undefined")
		}
		if(typeof indexName != 'string' || !indexName){
			throw Error("indexName needs to be defined as a string or as undefined")

		}
		if(!Number.isInteger(maxrc)||maxrc!='greedy'){
			throw Error("maxrc needs to be 'greedy' or an integer")
		}
		if(typeof replVal != 'string' || !replVal){
			throw Error("replVal needs to be a string or undefined")
		}
		//rc can be row, col or both
		if(rc=='row'){
			this.groupOnRow(indexName, maxrc, replVal)
		}else if(rc=='col'){
			this.groupOnCol(indexName, maxrc, replVal)
		}else if(!rc && rFirst){
			this.groupOnRow(indexName, maxrc, replVal)
			this.groupOnCol(indexName, maxrc, replVal)
		}else if(!rc && !rFirst){
			this.groupOnCol(indexName, maxrc, replVal)
			this.groupOnRow(indexName, maxrc, replVal)
		}
	}
}

export class Srs{
	constructor(){

	}
}

export class Model{
	constructor(){

	}
}

//Posiedon is the pipeline that interfaces with DF Srs and Model
export class Posiedon{
	constructor(){

	}
}