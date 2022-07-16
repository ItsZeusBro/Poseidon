class _DF{
	constructor(){
		this._df=undefined;
	}
	_sortOnRowFrom(row, c1, c2){}
	_sortOnColFrom(col, r1, r2){}
	_sortOnRowTimeFrom(row, c1, c2){}
	_sortOnColTimeFrom(col, r1, r2){}
	_sortStepOnRowFrom(row, c1, c2){}
	_sortStepOnColFrom(col, r1, r2){
		// |
		// | sort 
		// v until
		//dupes 	--> |sort
		// 				|until
		//				v
		//				sub-dupes
		// | sort
		// v until
		//dupes		==> |
		//				|
		//				v
		//				sub-dupes
	}

	_applyOnRowFrom(row, c1, c2){}
	_applyOnColFrom(col, r1, r2){}
	_applyOnRowTimeFrom(row, c1, c2){}
	_applyOnColTimeFrom(col, r1, r2){}

	_reformatTimeFromUnixOnRowIndex(rowIndex, formatter){}
	_reformatTimeFromFormatOnRowIndex(rowIndex, formatter){}

	_interpolateTimeOnRow(){}
	_interpolateTimeOnCol(){}
	_interpolateValOnRow(){}
	_interpolateValOnCol(){}

	_rotateRight(){}
	_rotateLeft(){}

	_slice(row, col){}
	_dice(row, col){}

	_writeToDf(_df, file){}
	_writeToCsv(_df, file){}
	_writeToHTML(_df, file){}	//offers no styling
	_writeToJSON(_df, file){}
	_writeToXML(_df, file){}
	_parseAndWriteToDf(parseObj){}

	_readSliceFromDf(_df, row, col){}
	_readAndSliceFromCsv(file, row, col){}
	_readAndSliceFromJSON(file, row, col){}
	_readAndSliceFromXML(file, row, col){}



	_groupOnRowIndexGreedyRepl(indexName, replVal){}
	_groupOnColIndexGreedyRepl(indexName, replVal){}
	_groupOnRowIndexGreedy(indexName){}
	_groupOnColIndexGreedy(indexName){}
	_groupOnRowIndexRepl(indexName, maxrc, replVal){}
	_groupOnColIndexRepl(indexName, maxrc, replVal){}
	_groupOnRowIndex(indexName, maxrc){}
	_groupOnColIndex(indexName, maxrc){}
	_groupOnAllColsGreedyRepl(replVal){}
	_groupOnAllRowsGreedyRepl(replVal){}
	_groupOnAllColsGreedy(){}
	_groupOnAllRowsGreedy(){}
	_groupOnAllColsRepl(maxrc, replVal){}
	_groupOnAllRowsRepl(maxrc, replVal){}
	_groupOnAllCols(maxrc){}
	_groupOnAllRows(maxrc){}
}