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
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){
				if(maxrc=="greedy"){

					if(typeof replVal === 'string'){
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else if(Number.isInteger(maxrc)){

					if(typeof replVal === 'string'){
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnRow(indexName, maxrc, replVal)
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
						this.groupOnCol(indexName, maxrc, replVal)

					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}

				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be 'greedy' or an integer")
				}

			}else if(!indexName){

				if(maxrc=="greedy"){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)

					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
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
			if(indexName){
				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}
			}else{
				if(maxrc=='greedy'){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else if(Number.isInteger(maxrc)){
					if(typeof replVal === 'string'){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else if(!replVal){
						this.groupOnCol(indexName, maxrc, replVal)
						this.groupOnRow(indexName, maxrc, replVal)
					}else{
						throw Error("replVal needs to be a string or undefined")
					}
				}else{
					throw Error("maxrc needs to be an integer or 'greedy'")
				}
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