var goal;
var hierarchy = [];
var criteria = new Array();
var alternative = new Array();
var ahp;



function capturedata(){
	goal = $('#goal').val();
	var i = 0;


	$("#form-ahp #criteria").each(function(){
	    criteria[i] = $(this).val();
	    i++;
	});

	var n_criterio_level_1 = 1;
	$("#form-ahp #criteria").each(function(){
		var criterio_level_1 = $(this).val();
		if(  $('#subc-div-'+n_criterio_level_1+' #subcriteria-'+n_criterio_level_1).length > 0  ){
			hierarchy[criterio_level_1] = new Array();
			var n_criterio_level_2 = 1;
			$('#subc-div-'+n_criterio_level_1+' #subcriteria-'+n_criterio_level_1).each(function(){
				var criterio_level_2 = $(this).val();
				if(  $('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2).length > 0  ){
					hierarchy[criterio_level_1][criterio_level_2] = new Array();
					var n_criterio_level_3 = 1;
					$('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2).each(function(){
						var criterio_level_3 = $(this).val();
						if(  $('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3).length > 0  ){
							hierarchy[criterio_level_1][criterio_level_2][criterio_level_3] = new Array();
							var n_criterio_level_4 = 1;
							$('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3).each(function(){
								var criterio_level_4 = $(this).val();
								if(  $('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4).length > 0  ){
									hierarchy[criterio_level_1][criterio_level_2][criterio_level_3][criterio_level_4] = new Array();
									var n_criterio_level_5=1;
									$('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4).each(function(){
										var criterio_level_5 = $(this).val();
										if(  $('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4+'-'+n_criterio_level_5+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4+'-'+n_criterio_level_5).length > 0  ){
											var n_criterio_level_6 = 1;
											hierarchy[criterio_level_1][criterio_level_2][criterio_level_3][criterio_level_4][criterio_level_5] = new Array();
											$('#subc-div-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4+'-'+n_criterio_level_5+' #subcriteria-'+n_criterio_level_1+'-'+n_criterio_level_2+'-'+n_criterio_level_3+'-'+n_criterio_level_4+'-'+n_criterio_level_5).each(function(){
												var criterio_level_6 = $(this).val();
												hierarchy[criterio_level_1][criterio_level_2][criterio_level_3][criterio_level_4][criterio_level_5][criterio_level_6] = "";
											});
											n_criterio_level_6++;
										}
										else{
											hierarchy[criterio_level_1][criterio_level_2][criterio_level_3][criterio_level_4][criterio_level_5] = "";
										}
										n_criterio_level_5++;
									});
								}
								else{
									hierarchy[criterio_level_1][criterio_level_2][criterio_level_3][criterio_level_4] = "";
								}
								n_criterio_level_4++;
							});
						}
						else{
							hierarchy[criterio_level_1][criterio_level_2][criterio_level_3] = "";
						}
						n_criterio_level_3++;
					})
				}
				else{
					hierarchy[criterio_level_1][criterio_level_2] = "";
				}
				n_criterio_level_2++;
			})
		}
		else{
			hierarchy[criterio_level_1] = "";
		}
		n_criterio_level_1++;
	});

	i=0;
	$("#form-ahp #alternative").each(function(){
	    alternative[i] = $(this).val();
	    i++;
	});

	ahp = new Hierarchy(goal,criteria,alternative);

	// console.log(criteria);

	$("#structure").hide( "slow", function() {
		$(".matrix-container").append('<table id="criteria-vs-criteria" class="table-pairwaise"><tr class="first-row"><th>#</th></tr></table>')
		for (var i = 0; i < criteria.length; i++) {
			$("#criteria-vs-criteria .first-row").append('<th>'+criteria[i]+'</th>');
			$("#criteria-vs-criteria").append('<tr id="'+criteria[i]+'"><th class="first-column">'+criteria[i]+'</th></tr>');
			for (var k = 0; k < criteria.length; k++){
				var ide = '#'+criteria[i];
				if(i==k){
					$(ide).append('<td><input id="c'+(i+1)+(k+1)+'" value="1" step="0.1" min="0" max="9" name="" disabled="true"></td>');
				}
				else{
					$(ide).append('<td><input onkeyup="makesomemagic('+(i+1)+','+(k+1)+')" id="c'+(i+1)+(k+1)+'" step="0.1" min="0" max="9" name=""></td>');
				}

			}
		}
    	$("#pairwaise").show( "slow");

    	for (var i = 0; i < criteria.length; i++) {
    		$(".matrix-container-a-a").append('<table id="alternative-vs-alternative-'+criteria[i]+'" class="table-pairwaise"><tr class="first-row"><th>'+criteria[i]+'</th></tr></table>');
    		for(var j = 0; j < alternative.length;j++){
    			var matrix_fr = "#alternative-vs-alternative-"+criteria[i]+" .first-row";
    			var matrix = "#alternative-vs-alternative-"+criteria[i];
				$(matrix_fr).append('<th>'+alternative[j]+'</th>');
				$(matrix).append('<tr id="'+alternative[j]+'-'+criteria[i]+'"><th class="first-column">'+alternative[j]+'</th></tr>');

				for (var k = 0; k < alternative.length; k++){
					var ide = '#'+alternative[j]+'-'+criteria[i];
					if(j==k){
						$(ide).append('<td><input id="'+criteria[i]+(j+1)+(k+1)+'" value="1" step="0.1" min="0" max="9" name="" disabled="true"></td>');
					}
					else{
						$(ide).append('<td><input onkeyup="makesomemagic('+(j+1)+','+(k+1)+',\''+criteria[i]+'\')" id="'+criteria[i]+(j+1)+(k+1)+'" step="0.1" min="0" max="9" name=""></td>');
					}
				}
			}
    	}

    	$("#pairwaise-a-a").show( "slow");
    	$("#dothemath-button").show( "slow");
    	bar_mod('666','Step 2: Set the pairwaise-matrix');

  	});


}


function dothemath(){
	var criteria_matrix = new Array(criteria.length);
	for (var i = 0; i < criteria.length; i++) {
		criteria_matrix[i] = new Array(criteria.length);
	}
	for (var i = 0; i < criteria.length; i++) {
		for (var j = 0; j < criteria.length; j++) {
			criteria_matrix[i][j] = $("#c"+(i+1)+(j+1)).val();
		}
	}


	var alternatives_matrix = new Array(criteria.length);
	for (var i = 0; i < criteria.length; i++) {
		alternatives_matrix[criteria[i]] = new Array(alternative.length);
		for (var j = 0; j < alternative.length; j++) {
			alternatives_matrix[criteria[i]][j] = new Array(alternative.length);
		}
	}

	for (var k = 0; k < criteria.length; k++) {
		for (var i = 0; i < alternative.length; i++) {
			for (var j = 0; j < alternative.length; j++) {
				alternatives_matrix[criteria[k]][i][j] = $("#"+criteria[k]+(i+1)+(j+1)).val();
			}
		}
	}

	var alternatives_priority_matrix = new Array(criteria.length);
	var results = new Array(alternative.length);
	// console.log(alternatives_matrix);
	for (var i = 0; i < criteria.length; i++) {
		console.log(i);
		alternatives_priority_matrix[i] = get_priority_vector(alternatives_matrix[criteria[i]]);
	}



	alternatives_priority_matrix = numeric.transpose(alternatives_priority_matrix);
	var criteria_priority_vector = get_priority_vector(criteria_matrix);

	for (var i = alternative.length-1; i >= 0; i--) {
		results[alternative[i]] = numeric.dot(alternatives_priority_matrix,criteria_priority_vector)[i];
	}
	for (var i = alternative.length-1; i >= 0; i--) {
		// $('#results-rows').append('<tr><th scope="row">'+i+'</th><td>'+alternative[i]+'</td><td>'+resultas[alternative[i]]+'</td></tr>');
		$('#results-rows').append('<tr><th scope="row">'+(i+1)+'</th><td>'+alternative[i]+'</td><td>'+results[alternative[i]]+'</td></tr>');
	}
	$("#pairwaise").hide( "slow");
	$("#pairwaise-a-a").hide( "slow");
    $("#dothemath-button").hide( "slow");
	$('#results').show( "slow");
	bar_mod('1000','Step 3: See the results and take your shot');






}
