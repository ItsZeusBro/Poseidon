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
		//rc can be row, col or both
		if(rc=='row'){
			if(typeof indexName === 'string'){
				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){
						this._groupOnRowIndexGreedyRepl(indexName, replVal)
					}else if(!replVal){
						this._groupOnRowIndexGreedy(indexName)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this._groupOnRowIndexRepl(indexName, maxrc, replVal)
					}else if(!replVal){
						this._groupOnRowIndex(indexName, maxrc)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){
				if(maxrc=="greedy"){
					if(typeof replVal === 'string'){
						this._groupOnAllRowsGreedyRepl(replVal)
					}else if(!replVal){
						this._groupOnAllRowsGreedy()
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this._groupOnAllRowsRepl(maxrc, replVal)
					}else if(!replVal){
						this._groupOnAllRows(maxrc)
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
						this._groupOnColIndexGreedyRepl(indexName, replVal)
					}else if(!replVal){
						this._groupOnColIndexGreedy(indexName)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this._groupOnColIndexRepl(indexName, maxrc, replVal)
					}else if(!replVal){
						this._groupOnColIndex(indexName, maxrc)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){
				if(maxrc=="greedy"){
					if(typeof replVal === 'string'){
						this._groupOnAllColsGreedyRepl(replVal)
					}else if(!replVal){
						this._groupOnAllColsGreedy()
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this._groupOnAllColsRepl(maxrc, replVal)
					}else if(!replVal){
						this._groupOnAllCols(maxrc)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}

			}else{
				throw Error("indexName needs to be defined as a string or as undefined")
			}
		}else if(!rc){
			if(typeof indexName === 'string'){
				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){
						if(rFirst){
							this._groupOnRowIndexGreedyRepl(indexName, replVal)
							this._groupOnColIndexGreedyRepl(indexName, replVal)
						}else{
							this._groupOnColIndexGreedyRepl(indexName, replVal)
							this._groupOnRowIndexGreedyRepl(indexName, replVal)
						}
					}else if(!replVal){
						if(rFirst){
							this._groupOnRowIndexGreedy(indexName)
							this._groupOnColIndexGreedy(indexName)
						}else{
							this._groupOnColIndexGreedy(indexName)
							this._groupOnRowIndexGreedy(indexName)
						}
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						if(rFirst){
							this._groupOnRowIndexRepl(indexName, maxrc, replVal)
							this._groupOnColIndexRepl(indexName, maxrc, replVal)

						}else{
							this._groupOnColIndexRepl(indexName, maxrc, replVal)
							this._groupOnRowIndexRepl(indexName, maxrc, replVal)
						}

					}else if(!replVal){
						if(rFirst){
							this._groupOnRowIndex(indexName, maxrc)
							this._groupOnColIndex(indexName, maxrc)

						}else{
							this._groupOnColIndex(indexName, maxrc)
							this._groupOnRowIndex(indexName, maxrc)
						}

					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}
			}else if(!indexName){
				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){
						if(rFirst){


						}else{

						}

					}else if(!replVal){
						if(rFirst){


						}else{

						}

					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						if(rFirst){


						}else{

						}

					}else if(!replVal){
						if(rFirst){


						}else{

						}

					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}
			}else{
				throw Error("indexName needs to be defined as a string or as undefined")
			}

		}else{
			throw Error("rc must be row, col, or undefined")
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