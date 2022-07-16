class _Series{
    constructor(data){
        //check schema
        //then set
    }

    check(data){
        
    }

}

//that's what's in a series
//{
//  "indexName":[]
//}

//"that's how it looks in a dataframe" row or column with a comma, but not both
//  ',2': {
//      "metadata":{},
//      "rc":[]
//  }

//We don't need data to be redundant, we can just look twice
//If we want to reason about rows, we can just put it in the row series
//If we want to reason about cols, we can just put it in the col series
//rotating the dataframe is as easy as changing r, to ,c and viceversa
//flipping the dataframe is as easy as taking the max r and setting it equal to min row, and whatever
//rotating and flipping does a rotation to the right, or whatever

//Doing it this way separates the math from the getter setter logic, which means we can
//still be efficient with the math and keep accessors simple

