export class Poseidon{
	constructor(){
		
	}
	//This produces an array that is wrapped with properties and methods
	Series(data){
		//data can be an array or a file with an optional index
		//a file for now only accepts csv format 
		return new Srs()
	}
	//This produces a matrix built with multiple Series as rows, and exposes
	//Series function for individual rows, or DataFrame specific functions
	//for cross row functionality
	DataFrame(data){
		//data can be passed as an array of Series with optional column names
		//Csv file that represents all the options of a dataframe
		//Here is an example of two Series that make up a dataframe
		//dataset = {'Fruits': ["Apple", "Mango", "Grapes", "Strawberry", "Oranges"], 'Supply': [30, 15, 10, 25, 20]}
		return new DF()
	}
}