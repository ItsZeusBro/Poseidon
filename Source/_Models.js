//Models take a vector, finds distiction space between charachteristics
//in the vector, and makes predictions based on the distinction space
//in high or low dimensionality.
//Basically, a model will plot the vector space in whatever dimension
//the model works with, and try to find groupings or interdimensional
//lines that fits the plotted data, and then make a classification
//prediction based on the lines drawn between the points. These lines
//are corrected with more examples to better fit the answers to the examples
//This is called training in a supervised learning model
//If it is unsupervised, groupings of data (clusters) will be attempted
//by the model. If a clustering algorithm is used, then the prediction
//will be set by whatever cluster lines are drawn

//Supervised learning models have 4 factors to consider
//1) Bias and Variance tradeoff 
//(High Variance for a variable x is when different predictions for x
//are made across different training sets, even though those training sets
// are theoretically consistent in quality. They can be accurately predicted
//by the model even when there is high variance, because for it to be consistently
//wrong it means that it high bias for the variable. High Variance just means there
//is a lot of space between the predictions made by the model)
//(High Bias for a variable x means that when it is trained on each of these
//similar training sets, the prediction is consistently wrong in the case of
//a classification problem with three or more classification outputs) 
//2) Complexity (how well the algorithm learns at scale)
//3) Dimensionality of input space (this means your transformations should
//yield a vector of dimensions n that is computable and supported by the algorithm)
//4) Noise in the output values
class Model{
	constructor(){

	}
}