var ressourceBois = 0; // Nombre total de clicks enmagasiné pour le bois.
var ressourcePierre = 0; // Nombre total de clicks enmagasiné pour la pierre.
var PrixBatimentBucheron = 10; // Prix du clicker auto (Cabane de bucherons) Bois.
var PrixBatimentMine = 10; // Prix du clicker auto (Mine) Pierre.
var clickBois = 1; // Nombre de click obtenu par click sur le Bois.
var clickPierre =	1;// Nombre de click obtenu par click sur la pierre.
var autoClickBois = 0;		// Nombre de clicker auto
var autoClickPierre = 0;		// Nombre de clicker auto
var priceClickBoisUpgrade = 75;	// Prix de l'amélioration du click
var priceClickPierreUpgrade = 75;	// Prix de l'amélioration du click
var ressourceOr;
var soldat= 0;
var batimentBase;
var batimentCaserne;
var batimentMine = document.getElementById ('y2x11'); // emplacement batiment mineur
var batimentBucheron = document.getElementById('y7x11') // emplacement batiment bucheron
var rempart;
var piege;
var ennemi = 0; //ennemi de base 
var divEnnemi = document.getElementById('y3x2'); // emplacement des ennemies de base
var caserne = document.getElementById('y6x6'); // correspond à la div de la construction caserne
var batimentDefense = document.getElementById('y5x7');//correspond à la div du construction batiment de défense
var creerSoldat = document.getElementById('newSoldat'); // bouton création soldat
var caseSoldat = document.getElementById('y5x5');
var caserneConstruite=false; // 
var armee=0;
var vieArmee=0; //incremente les pv selon la création ou la perte de soldat
var tuerArmee;

// Sons

 function bruitPierre(){
    var sonPierre = new Audio();
    sonPierre.src = "./Sons/pierre.mp3";
    sonPierre.play();

}

function bruitConstruction(){
    var sonConstruction = new Audio();
    sonConstruction.src = "./Sons/construction.mp3";
    sonConstruction.play();

}


// Fonction cliquer sur une div
function checkDiv(e) {
	if (e.target.classList.contains("wood")) {		// Vérifie si la div est du bois
		ClickManuelBois();
				// Début Animation Bois cliqué 						
				var newDiv = document.createElement("div");		// Créer une nouvelle div
					document.body.insertBefore(newDiv, jeu);	// Insérer la nouvelle div avant "jeu"
					newDiv.classList.add("woodAnim");			// Ajouter la class woodAnim (ce qui défini son aspect)
					newDiv.style.left = e.pageX + 'px';			// Positionner en X la div selon le curseur du joueur
					newDiv.style.top = e.pageY + 'px';			// Positionner en Y la div selon le curseur du joueur
					newDiv.innerHTML = '<h5>+ '+clickBois+' Bois !</h5>';	// Ajoute le texte +X Bois 
					var fading = setTimeout(function() { newDiv.remove(); }, 900); // Démarrer le timer pour supprimer la div
					newDiv.className += " ressourceMove";		// Ajoute la class "ressourceMove", ce qui lance l'animation CSS
	}
	else if (e.target.classList.contains("rock")) {	// Vérifie si la div est de la Pierre
		ClickManuelPierre();
				// Début Animation Pierre cliqué 						
				var newDiv = document.createElement("div");		// Créer une nouvelle div
					document.body.insertBefore(newDiv, jeu);	// Insérer la nouvelle div avant "jeu"
					newDiv.classList.add("rockAnim");			// Ajouter la class rockAnim (ce qui défini son aspect)
					newDiv.style.left = e.pageX + 'px';			// Positionner en X la div selon le curseur du joueur
					newDiv.style.top = e.pageY + 'px';			// Positionner en Y la div selon le curseur du joueur
					newDiv.innerHTML = '<h5>+ '+clickPierre+' Pierre !</h5>';	// Ajoute le texte +X Pierre 
					var fading = setTimeout(function() { newDiv.remove(); }, 900); // Démarrer le timer pour supprimer la div
					newDiv.className += " ressourceMove";		// Ajoute la class "ressourceMove", ce qui lance l'animation CSS
	}
	else if (e.target.contains(divEnnemi)) {
		detruireEnnemi();
	}
	else {
		alert(e.target.id);
	}
}

// Fonction mise à jour de l'affichage des compteurs Pour le bois et pierre.
function Affichage() {

	if (ressourcePierre<1){
		ressourcePierre=0;
	}
	if (ressourceBois<1) {
		ressourceBois=0;
	}	


	// Bois 
	document.getElementById('nbClickBois').innerHTML = 'Bois: '+ressourceBois;
	document.getElementById('autoClickBois').innerHTML = 'Camp de bucherons :</br> ('+PrixBatimentBucheron+') de bois';
	document.getElementById('clickerAutoBois').innerHTML = 'Nombre de bucherons: '+autoClickBois+"</br>(1 click/s)";
	document.getElementById('upgradeClickBois').innerHTML = 'Bucherons plus rapides :</br> (' +priceClickBoisUpgrade+') de bois';
	// Pierre 
	document.getElementById('nbClickPierre').innerHTML = 'Pierre: '+ressourcePierre;
	document.getElementById('autoClickPierre').innerHTML = 'Acheter mine :</br> ('+PrixBatimentMine+') de pierres';
	document.getElementById('clickerAutoPierre').innerHTML = 'Nombre de mineurs: '+autoClickPierre+"</br>(1 click/s)";
	document.getElementById('upgradeClickPierre').innerHTML = 'Mineurs plus rapides :</br> ('+priceClickPierreUpgrade+') de pierres';
	//soldat
  document.getElementById('nbSoldat').innerHTML = 'Nombre de guerriers: '+armee;
	affichageArmee();
	//ennemi
	document.getElementById('afficheEnnemi').innerHTML = "Nombre d'ennemis: "+ennemi;


}






//Compteur et Bonus BOIS.


// Fonction click manuel bois
function ClickManuelBois() {
	ressourceBois = ressourceBois + clickBois;
	Affichage();
	
}

// Fonction amélioration du click (multiplicateur)
function UpgradeBois() {
	if (ressourceBois >= priceClickBoisUpgrade) {
		clickBois++;
		ressourceBois = (ressourceBois - priceClickBoisUpgrade);
		priceClickBoisUpgrade = priceClickBoisUpgrade*2;
		Affichage();
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
}

// Fonction clicker auto bois
function CabaneBucheron() {
	if (ressourceBois >= PrixBatimentBucheron){
		ressourceBois = (ressourceBois - PrixBatimentBucheron);
		autoClickBois++;
		PrixBatimentBucheron = parseInt(PrixBatimentBucheron*1.5);
		Affichage();
		construireBatimentBucheron();
		setInterval(ClickManuelBois, 1000);
		
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
}

// Fin Compteur et Bonus BOIS.







//Compteur et Bonus pierre


// Fonction click manuel Pierre
function ClickManuelPierre() {
	
	ressourcePierre = ressourcePierre + clickPierre;
	Affichage();
	
}

// Fonction amélioration du click (multiplicateur)
function UpgradePierre() {
	if (ressourcePierre >= priceClickPierreUpgrade) {
		clickPierre++;
		ressourcePierre = (ressourcePierre - priceClickPierreUpgrade);
		priceClickPierreUpgrade = priceClickPierreUpgrade*2;
		Affichage();
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
}

// Fonction clicker auto pierre
function MinePierre() {
	if (ressourcePierre >= PrixBatimentMine){
		ressourcePierre = (ressourcePierre - PrixBatimentMine);
		autoClickPierre++;
		PrixBatimentMine = parseInt(PrixBatimentMine*1.5);
		Affichage();
		construireBatimentMineur();
		setInterval(ClickManuelPierre, 1000);

	}
	else {
		alert('Pas assez de $clicks$ !');
	}
}


// Fin Compteur et Bonus PIERRE.




// Construire Batiment Soldat (y6x6)

function construireCaserne() {
	if (ressourceBois > 5 && ressourcePierre > 5) {
		caserne.style.backgroundImage = "url(./Images/Orc_Barracks.gif)";
		caserneConstruite=true;
		ressourceBois = ressourceBois-4;
		ressourcePierre = ressourcePierre-4;
		Affichage();
		bruitConstruction();
	}
	else alert ( "Augmenter vos ressources Bois et Pierre");
}

// fin Construire Batiment Soldat



// Construire Batiment Défense (y2x11)

function construireBatimentDefense () {
	if (ressourceBois > 20 && ressourcePierre > 20) {
		batimentDefense.style.backgroundImage = "url(./Images/Orc_Blacksmith.gif)";
		ressourceBois = ressourceBois-4;
		ressourcePierre = ressourcePierre-4;
		Affichage();
		bruitConstruction();

	}
	else alert ("Augmenter vos ressources Bois et Pierre");
}

// fin Construire Batiment Soldat

/* construire batiment bucheron (y7x11) */
function construireBatimentBucheron	(){
	
		batimentBucheron.style.backgroundImage ="url(./Images/Orc_Lumbermill.gif)";
		bruitConstruction();
		Affichage();
		
	}
/* construire batiment bucheron (y2x11) */
function construireBatimentMineur(){
	batimentMine.style.backgroundImage ="url(./Images/Orc_Mine.gif)";
	bruitConstruction();
	Affichage();
}


// fonction Bouton Soldat

creerSoldat.onclick=boutonSoldat;
// condition pour pouvoir avoir des soldats (si la caserne est construite)
function boutonSoldat(){
	if (caserneConstruite == true){
		creationSoldat();
		}		
		else {
			alert("vous n'avez pas construit la caserne");
		}
		
}

// fonction création des soldats, conditions de ressources, diminution des ressources si on crée des soldats
function creationSoldat(){
 if (ressourceBois>3 && ressourcePierre>3){
  armee = armee+1;
  ressourceBois= ressourceBois-4;
  ressourcePierre=ressourcePierre-4;
  Affichage();
  affichageArmee();
}
	else {
	alert("Il vous faut des ressources supplémentaires");
	}
console.log(armee);
}


/* l'ennemi enleve de la vie et tue des soldats*/

function enleverVieArmee () {

	if (armee>0) {}
	armee=armee-ennemi;

	if (armee<1) {
	
	armee=0;
	}

	Affichage();
}

/* fin création soldat */

/* l'ennemi enleve des ressources*/

function enleverRessourcesPierre() {
	
	if (ressourcePierre>1) {
	ressourcePierre=ressourcePierre-ennemi;
	Affichage();
	}
}


function enleverRessourcesBois() {
	if (ressourceBois>1) {
	ressourceBois=ressourceBois-ennemi;
	Affichage();
	}
}

//creation ennemies de base

function ennemiNbRandom() {

	divEnnemi.style.backgroundImage="url(./Images/ennemi.png)";
	ennemi = Math.floor((Math.random() * 20) + 1);
	console.log(ennemi)
		
		if (armee>0) {
			setInterval(enleverVieArmee, 6000);
		}

		else {
			setInterval(enleverRessourcesPierre, 2000);
			setInterval(enleverRessourcesBois, 2000);
		}
Affichage();
}

/* detruire ennemies*/

function detruireEnnemi() {
	
	if (ennemi>0) {
	ennemi= ennemi-1;
	}
	if (ennemi==0) {
		divEnnemi.style.backgroundImage="none";
	}
Affichage();
}


/*  Affichage armée */

function affichageArmee() {

	if (armee > 0) {
	caseSoldat.style.backgroundImage="url(./Images/peon.png)";
	}
		else if (armee<1){ 
		caseSoldat.style.backgroundImage="none";

		} 						
}
setInterval(affichageArmee, 2000); /* raffraichi l'affichage de la case armée */


/* EVENT SHARKNADO */

function sharknado() {
	var shark = document.createElement("div");			// Création d'une nouvelle div pour la tornade
	document.body.insertBefore(shark, jeu);				// Insérer la div avant "jeu"
	setTimeout(function(){ shark.style.transform = "translateX(600px)"; }, 5000) // Fixer la position de la tornade à la fin de l'animation CSS
	shark.classList.add("tornado");						// Ajouter le class "tornado" : Lancer l'anim de déplacement CSS
	var sharkLife = 10;									// Vie de la tornade
	var sharkDamage = setInterval(function(){			// DEGATS DE LA TORNADE PAR SECONDE !
		if (armee > 0) {
			armee--;
		} 
		if (ressourcePierre > 0) {
			ressourcePierre = parseInt((ressourcePierre-(ressourcePierre*5/100)));  // Enlever 5% de la pierre
		}
		if (ressourceBois > 0) {
			ressourceBois = parseInt((ressourceBois-(ressourceBois*5/100))); 		// Enlever 5% du bois
		}
	Affichage();
	}, 1000); // chaque seconde

	shark.addEventListener('click', function destroyTornado(e) {	// Similaire au "onclick" sauf qu'il est valable en dehors de la fonction -> éxécute "destroyTornado" quand on clique sur la tornade.
		

		var newDiv = document.createElement("div");		// Créer une nouvelle div
			document.body.insertBefore(newDiv, jeu);	// Insérer la nouvelle div avant "jeu"
			newDiv.style.position = "absolute";			// Position absolute, pour ne pas déformer le reste du jeu
			newDiv.style.zIndex = "999";				// Est au dessus de tout
			newDiv.style.marginTop = "-60px";			// Pour centrer
			newDiv.style.marginLeft = "-60px";			// le gif sur le curseur
			newDiv.style.left = e.pageX + 'px';			// Positionner en X la div selon le curseur du joueur
			newDiv.style.top = e.pageY + 'px';			// Positionner en Y la div selon le curseur du joueur
			
		var gifRnd = Math.floor(Math.random() * 2 )+ 1; // Un nombre random entre 1 et 2
			if (gifRnd == 1) {					
				newDiv.style.height = "130px";			// Défini la taille de la div selon le gif
				newDiv.style.width = "150px";
				newDiv.style.backgroundImage = "url('./Images/fx1.gif')";
				var fading = setTimeout(function() { newDiv.remove(); }, 800); // Démarrer le timer pour supprimer la div
			}
			else if (gifRnd == 2) {
				newDiv.style.height = "125px";			// Défini la taille de la div selon le gif
				newDiv.style.width = "150px";
				newDiv.style.backgroundImage = "url('./Images/fx2.gif')"
				var fading = setTimeout(function() { newDiv.remove(); }, 600); // Démarrer le timer pour supprimer la div
			}


		sharkLife--												// Retirer 1 pv à la tornade
		if (sharkLife <= 0) {									// Si la tornade tombe à 0 pv
			clearInterval(sharkDamage);							// Arrêt des dégats
			setTimeout(function(){ shark.remove(); }, 3000);	// Suppression de la div après l'animation CSS 
			shark.classList.add("tornadoFade");					// Animation CSS de la disparition progressive de la tornade
		}
	})
}

document.getElementById('jeu').onclick = checkDiv;								// Cliquer sur une div pour obtenir son ID
document.getElementById('autoClickBois').onclick = CabaneBucheron; 				// Acheter un Auto clicker
document.getElementById('upgradeClickBois').onclick = UpgradeBois; 				// Améliorer le click du bois
document.getElementById('autoClickPierre').onclick = MinePierre; 				// Acheter un Auto clicker
document.getElementById('upgradeClickPierre').onclick = UpgradePierre;			// Améliorer le click de la pierre
document.getElementById('batimentSoldat').onclick = construireCaserne 			// construire une caserne
document.getElementById('batimentDefense').onclick = construireBatimentDefense 	// construire la défense	

Affichage();		// Affichage
