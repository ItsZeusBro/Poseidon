class _DF{
	constructor(){
		this._df=undefined;
	}
	_sortOnRowFrom(row, c1, c2){}
	_sortOnCol(col, r1, r2){}
	_sortOnRowTime(row, c1, c2){}
	_sortOnColTime(col, r1, r2){}

	_sortStepOnColFrom(col, r1, r2){
		//
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

	_applyOnRow()

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