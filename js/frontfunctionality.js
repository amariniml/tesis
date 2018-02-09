function addcriteria(){
	var criteria_number = ($('#criteria-area #criteria').length+1);  

	if(criteria_number<10){
		var element = '<div class="col-lg-10 mt-2"><input type="text" id="criteria" name="criteria'+criteria_number+'" placeholder="Enter the criteria n°'+criteria_number+' for start the evaluation..."></div><div class="col-lg-2 mt-2"><a class="btn btn-primary"> <span class="icon-plus"></span></a> <a class="btn btn-danger"><span class="icon-minus"></span></a></div>';
		$("#criteria-area").append(element);
	}
	else{
		alert("You reach the max number of criteria, let consider reformulate the tree for consistant results!")
	}
	
}


function removecriteria(){
	var criteria_number = $('#criteria-area #criteria').length;  
	if(criteria_number>2){
		$("#criteria-area").children().last().remove();
		$("#criteria-area").children().last().remove();
	}
	else{
		alert("You can't delete because at least 2 elements are needeed for the proccess.")
	}
}

function addalternative(){
	var alternative_number = ($('#alternative-area #alternative').length+1);  

	if(alternative_number<10){
		var element = '<div class="col-lg-12 mt-2"><input type="text" id="alternative" name="alternative'+alternative_number+'" placeholder="Enter the alternative n°'+alternative_number+' for start the evaluation..."></div>';
		$("#alternative-area").append(element);
		// $("#criteria-area").append('<p>holaaa</p>');
	}
	else{
		alert("You reach the max number of alternatives, let consider reformulate the tree for consistant results!")
	}
	
}

function removealternative(){
	var alternative_number = $('#alternative-area #alternative').length;  
	if(alternative_number>2){
		$("#alternative-area").children().last().remove();
	}
	else{
		alert("You can't delete because at least 2 alternatives are needeed for comparasion.")
	}
}


function makesomemagic(row,column,criteria){

	criteria = criteria || 0;

	if(criteria==0){
		var elem_reciproco = "#c"+column+row;
		var elem = "#c"+row+column;
	}
	else{
		var elem_reciproco = "#"+criteria+column+row;
		var elem = "#"+criteria+row+column;
	}
	
	var valor = $(elem).val();

	if(valor>9 || valor==0){
		$(elem).val('');
		$(elem_reciproco).val('');
	}
	else if(valor!=0){
		$(elem_reciproco).val(1/valor);
	}
}


function bar_mod(number,title){
	$('#progress_bar').animate({
		width: number
	},3000);
	$('#footer-title').html(title);
}