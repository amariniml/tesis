class Hierarchy{
	constructor(goal, criteria, alternatives){
		this.goal = goal;
		this.criteria = criteria;
		this.alternatives = alternatives;
	}


	getGoal(){
		return this.goal;
	}
	getCriteria(){
		return this.criteria;
	}
	getAlternatives(){
		return this.alternatives;
	}
}

function normalize(matrix){
	var new_matrix = new Array(matrix.length);
	for (var i = 0; i < matrix.length; i++) {
		new_matrix[i] = new Array(matrix.length);
	}

	var transpose_matrix = numeric.transpose(matrix);
	
	for (var i = 0; i < matrix.length; i++) {
		new_matrix[i] = product(1/sum_vector(transpose_matrix[i]),transpose_matrix[i]);
	}


	return numeric.transpose(new_matrix);
}


function product(real,vector){
	var new_vector = new Array(vector.length);
	for (var i = 0; i < vector.length; i++) {
		new_vector[i] = real * vector[i];
	}
	return new_vector;
}


function sum_vector(vector){
	var total = 0;
	for (var i = 0; i < vector.length; i++) {
		total = total + Number(vector[i]);
	}
	return Number(total);
}


function get_priority_vector(matrix){
	var priority_vector = new Array(matrix.length);
	var normalize_matrix = normalize(matrix);
	for (var i = 0; i < matrix.length; i++) {
		priority_vector[i] = sum_vector(normalize_matrix[i]) / matrix.length;
	}

	return priority_vector;

}



