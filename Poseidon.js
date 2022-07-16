export class df{
	constructor(){
		this.df=undefined;

	}
	read(n, m){
		//if n and m are defined, it will read a file and place into a slice
		//of the dataframe (edge cases will be defined)
		//If not defined it just overwrites the dataframe with new data
	}
	write(n, m){
		//writes a slice of the dataframe if n or m or both are defined
	}
	slice(n, m){
		//gets the first n number of rows if positive integer
		//gets the last n number of rows if negative integer
		//gets the first m number of cols if positive integer
		//gets the last m number of cols if negative integer
	}

	describe(n, m){
		//describes a subsection of the dataframe, or
		//if n and m are undefined, it describes the 
		//whole thing very generally
	}

	find(rc, value, n, m){
		//if rc was r or c , and value was specified, it would search
		//	for the value rowise or columnwise and return the row or col associated
		//	if found using r, it would return all columns associated
		//	if found using c, it would return all rows associated

		//if n and or m are specified, it searches the slice setting
		//begining of n m as 0,0
	}

	sort(rc, index, reverse=false){
		//if strings, sorts alphabetically
		//if numbers, sorts numerically
		//if rowStep, (if you have the same values in row one, sort those rows on row 2, etc)
		//	if you don't start from row 1, it wraps around until reaching row 1, etc.
	}
	apply(){

	}

	time(){

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
						_df._groupOnRowIndexGreedyRepl(indexName, replVal)
					}else if(!replVal){
						_df._groupOnRowIndexGreedy(indexName)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						_df._groupOnRowIndexRepl(indexName, maxrc, replVal)
					}else if(!replVal){
						_df._groupOnRowIndex(indexName, maxrc)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){
				if(maxrc=="greedy"){
					if(typeof replVal === 'string'){
						_df._groupOnAllRowsGreedyRepl(replVal)
					}else if(!replVal){
						_df._groupOnAllRowsGreedy()
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						_df._groupOnAllRowsRepl(maxrc, replVal)
					}else if(!replVal){
						_df._groupOnAllRows(maxrc)
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
							this._groupOnAllRowsGreedyRepl(replVal)
							this._groupOnAllColsGreedyRepl(replVal)
						}else{
							this._groupOnAllColsGreedyRepl(replVal)
							this._groupOnAllRowsGreedyRepl(replVal)
						}
					}else if(!replVal){
						if(rFirst){
							this._groupOnAllRowsGreedy()
							this._groupOnAllColsGreedy()
						}else{
							this._groupOnAllColsGreedy()
							this._groupOnAllRowsGreedy()
						}
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						if(rFirst){
							this._groupOnAllRowsRepl(maxrc, replVal)
							this._groupOnAllColsRepl(maxrc, replVal)
						}else{
							this._groupOnAllColsRepl(maxrc, replVal)
							this._groupOnAllRowsRepl(maxrc, replVal)
						}
					}else if(!replVal){
						if(rFirst){
							this._groupOnAllRows(maxrc)
							this._groupOnAllCols(maxrc)
						}else{
							this._groupOnAllCols(maxrc)
							this._groupOnAllRows(maxrc)
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