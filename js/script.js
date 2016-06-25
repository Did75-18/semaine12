$(function(){

	var select = 0;

/*----------RECUPERATION DE LA CASE CLIQUEE----------*/

	$('.case').on('click', function(event){
		/*console.log (this.id);*/
		/*event.preventDefault();*/
		var clic = $(event.target);

/*---------------AJOUT CLASS----------------------*/

		if(select === 0){
			if (clic.hasClass('joueur2')) {
				alert('déjà cliqué');
			}else{
				clic.addClass('joueur1');
				select ++ ;
				/*console.log(select);*/
			}
		
		}else if (select === 1){
			if (clic.hasClass('joueur1')) {
				alert('déjà cliqué');
			}else{
				clic.addClass('joueur2');
				select --;
				/*console.log(select);*/
			}
		}	
/*------------------ENLEVE CLASS AVEC BOUTON REJOUER---------------------*/						

		$('#playAgain').on('click', function(){
			$('.case').removeClass('joueur1')
			$('.case').removeClass('joueur2')
			select = 0;
		})

/*-------------------JOUEUR 1 GAGNE -- ENLEVE LES CLASS -- MAZ SELECT POUR REDEMARRER AVEC JOUEUR1-------*/
		if( 
			(($("#x1y1").hasClass("joueur1")) && ($("#x2y1").hasClass("joueur1")) && ($("#x3y1").hasClass("joueur1")))
			|| (($("#x1y2").hasClass("joueur1")) && ($("#x2y2").hasClass("joueur1")) && ($("#x3y2").hasClass("joueur1")))
			|| (($("#x1y3").hasClass("joueur1")) && ($("#x2y3").hasClass("joueur1")) && ($("#x3y3").hasClass("joueur1")))
                        || (($("#x1y1").hasClass("joueur1")) && ($("#x1y2").hasClass("joueur1")) && ($("#x1y3").hasClass("joueur1")))
                        || (($("#x2y1").hasClass("joueur1")) && ($("#x2y2").hasClass("joueur1")) && ($("#x2y3").hasClass("joueur1")))
                        || (($("#x3y1").hasClass("joueur1")) && ($("#x3y2").hasClass("joueur1")) && ($("#x3y3").hasClass("joueur1")))
			|| (($("#x1y1").hasClass("joueur1")) && ($("#x2y2").hasClass("joueur1")) && ($("#x3y3").hasClass("joueur1")))
			|| (($("#x3y1").hasClass("joueur1")) && ($("#x2y2").hasClass("joueur1")) && ($("#x1y3").hasClass("joueur1")))

		) {
            alert("Joueur 1 a gagné !");
        	$('.case').removeClass('joueur1')
			$('.case').removeClass('joueur2')
			select = 0;

/*-------------------JOUEUR 2 GAGNE -- ENLEVE LES CLASS -- MAZ SELECT POUR REDEMARRER AVEC JOUEUR1-------*/			

		}else if (
			(($("#x1y1").hasClass("joueur2")) && ($("#x2y1").hasClass("joueur2")) && ($("#x3y1").hasClass("joueur2")))
			|| (($("#x1y2").hasClass("joueur2")) && ($("#x2y2").hasClass("joueur2")) && ($("#x3y2").hasClass("joueur2")))
			|| (($("#x1y3").hasClass("joueur2")) && ($("#x2y3").hasClass("joueur2")) && ($("#x3y3").hasClass("joueur2")))
                        || (($("#x1y1").hasClass("joueur2")) && ($("#x1y2").hasClass("joueur2")) && ($("#x1y3").hasClass("joueur2")))
                        || (($("#x2y1").hasClass("joueur2")) && ($("#x2y2").hasClass("joueur2")) && ($("#x2y3").hasClass("joueur2")))
                        || (($("#x3y1").hasClass("joueur2")) && ($("#x3y2").hasClass("joueur2")) && ($("#x3y3").hasClass("joueur2")))
			|| (($("#x1y1").hasClass("joueur2")) && ($("#x2y2").hasClass("joueur2")) && ($("#x3y3").hasClass("joueur2")))
			|| (($("#x3y1").hasClass("joueur2")) && ($("#x2y2").hasClass("joueur2")) && ($("#x1y3").hasClass("joueur2")))
		){
			alert("Joueur 2 a gagné !");
			$('.case').removeClass('joueur1')
			$('.case').removeClass('joueur2')
			select = 0;

/*-------------------EGALITE -- ENLEVE LES CLASS -- MAZ SELECT POUR REDEMARRER AVEC JOUEUR1-------*/			

		}else if(
			(($("#x1y1").hasClass("joueur1")) || ($("#x1y1").hasClass("joueur2"))) 
			&& (($("#x1y2").hasClass("joueur1")) || ($("#x1y2").hasClass("joueur2"))) 
			&& (($("#x1y3").hasClass("joueur1")) || ($("#x1y3").hasClass("joueur2"))) 
			&& (($("#x2y1").hasClass("joueur1")) || ($("#x2y1").hasClass("joueur2"))) 
			&& (($("#x2y2").hasClass("joueur1")) || ($("#x2y2").hasClass("joueur2"))) 
			&& (($("#x2y3").hasClass("joueur1")) || ($("#x2y3").hasClass("joueur2"))) 
			&& (($("#x3y1").hasClass("joueur1")) || ($("#x3y1").hasClass("joueur2"))) 
			&& (($("#x3y2").hasClass("joueur1")) || ($("#x3y2").hasClass("joueur2"))) 
			&& (($("#x3y3").hasClass("joueur1")) || ($("#x3y3").hasClass("joueur2")))
			){
			alert('Personne ne gagne...')
			$('.case').removeClass('joueur1')
			$('.case').removeClass('joueur2')
			select = 0;
		}
	})
});



//////////

/*var gagne(joueur){
	
	if( 
			(($("#x1y1").hasClass(joueur) && ($("#x2y1").hasClass(joueur) && ($("#x3y1").hasClass(joueur)))
			|| (($("#x1y2").hasClass(joueur)) && ($("#x2y2").hasClass(joueur)) && ($("#x3y2").hasClass(joueur)))
			|| (($("#x1y3").hasClass(joueur)) && ($("#x2y3").hasClass(joueur)) && ($("#x3y3").hasClass(joueur)))
                        || (($("#x1y1").hasClass(joueur)) && ($("#x1y2").hasClass(joueur)) && ($("#x1y3").hasClass(joueur)))
                        || (($("#x2y1").hasClass(joueur)) && ($("#x2y2").hasClass(joueur)) && ($("#x2y3").hasClass(joueur)))
                        || (($("#x3y1").hasClass(joueur)) && ($("#x3y2").hasClass(joueur)) && ($("#x3y3").hasClass(joueur)))
			|| (($("#x1y1").hasClass(joueur)) && ($("#x2y2").hasClass(joueur)) && ($("#x3y3").hasClass(joueur)))
			|| (($("#x3y1").hasClass(joueur)) && ($("#x2y2").hasClass(joueur)) && ($("#x1y3").hasClass(joueur)))

		) {
            alert( joueur + " a gagné !");
        	$('.case').removeClass(joueur);
			select = 0;

		}
	
}*/


/// Cas 1 Verifier horiz

/*var verifHorizontales = function(joueur){
for (y = 1; y <= 3; y++) {
	for (x = 1; x <= 3; x++) { 
	   if ($("#x"+x+"y"+y).hasClass(joueur)){
	   	
	   }
	} 
}
}*/


/// Cas 2 Verifier vertica
/*var verifVerticales = function(joueur){
for (x = 1; x <= 3; x++) {
	for (y = 1; y <= 3; y++) { 
	   if ($("#x"+x+"y"+y).hasClass(joueur)){
	   	
	   }
	} 
}
}
*/
