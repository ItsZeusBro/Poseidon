export class df{
	constructor(){
		this.df=undefined;
		//phaseology is a concept where you chain functions together and 
		//see their phases in a scrollable list (in some sort of notebook)
		//every function has to return a new df initialized with the
		//schema of the df operation
	}
	//df can be a file or an actual df, or self if left undefined
	//reading can also merge
	read(df, rc1, rc2){
		//reads from a file or another df
		//under the hood the file is consumed by df class, and used as a df
		//it doesn't destroy the original file
		//if you specifiy rc, it overwrites a slice of the read df
		//to the df you are writing to
	}
	write(df, rc1, rc2){
		//writes to a file or another df from a source 
	}
	slice(rc){
		//this basically slices the dataframe according to rc
	}
	dice(rc){
		//shuffles a slice and returns it as a df
	}

	describe(rc){
		//describes a slice (value types, it should report row and col number just
		//in case you made an off by one error)
	}

	find(rc, value){
		//searches the slice space for the value
		//and returns a df containing the values
		//and the original row numbers
	}

	sort(rc, reverse=false, step=false){
		//  (time values are sortable)
		//	step, (if you have the same values in row one, sort those rows on row 2, etc)
		//	if you don't start from row 1, it wraps around until reaching row 1, etc.
		
		//+2:-4 is everything after row 2 and everything before col 4 (inclusive)
	}
	apply(rc, callback){
		// apply a function on rc (all rows and cols are considered in the slice)
		// programmer is responsible for knowing how general a slice can be
	}

	time(){
		//Observations:
		//1. Some rc values are indexed in time
		//2. Some rc values are recorded in time
		//3. There are a variety of different time formats 
		//Things we can do:
			//primitive actions
		//1. reformatting on an index or a slice with a time index
			//compound actions
		//2. Interpolate a slice by time values based on different average techniques(simple averages, moving averages, etc)
		//3. groupping on the data over arbitrary time windows
		//4. merging a slice based on time index or value
		//5. slicing based on time index or value (this would sort on time, calculate the slice, and then slice)
		//6. sorting an index on time by index or by value (basically creatres a new index on time)
		//7. apply a function on a time slice
		//8. sort on an arbitrary value within a time slice
		//9. find within a time slice
		//10. describe a time slice
		//11. write from a time slice
	}
	interp(){

	}
	plot(){
		
	}

	flip(){

	}
	rotate(){
		
	}

	//the col index in the example is "Grocery Type"
	groupOn(rc, indexName, maxrc, replVal=undefined, rFirst=true){
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
	display(){
		//this gets called by notebooks after a df is returned
		//it returns the schema of the df that is returned
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