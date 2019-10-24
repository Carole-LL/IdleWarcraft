var ressourceBois = parseInt(0); // Nombre total de clicks enmagasiné pour le bois.
var ressourcePierre = parseInt(0); // Nombre total de clicks enmagasiné pour la pierre.
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
var piege;
var ennemi = parseInt(0); //ennemi de base 
var divEnnemi = document.getElementById('y3x2'); // emplacement des ennemies de base
var caserne = document.getElementById('y6x6'); // correspond à la div de la construction caserne
var btDefense = false;                         //est ce que le batiment est construit
var btMurailles = false;						//est ce que le batiment est construit
var btCaserne = false;							//est ce que le batiment est construit
var btMine = false;								//est ce que le batiment est construit
var btBucheron = false;							//est ce que le batiment est construit
var batimentDefenseGriser = document.getElementById('ItemBonus6');  //bouton griser
var bucheronsGriser = document.getElementById('ItemBonus1');		//bouton griser
var mineursGriser = document.getElementById('ItemBonus2');			//bouton griser
var campBucheronGriser = document.getElementById('ItemBonus3');		//bouton griser
var caserneGriser = document.getElementById('ItemBonus5');			//bouton griser
var mineGriser = document.getElementById('ItemBonus4');				//bouton griser
var guerriersGriser = document.getElementById('ItemBonus7');		//bouton griser
var muraillesGriser = document.getElementById('ItemBonus8');		//bouton griser
var murailles1 = document.getElementById('y2x7');  //emplacement murailles
var murailles2 = document.getElementById('y2x6');	//emplacement murailles
var murailles3 = document.getElementById('y3x5');	//emplacement murailles
var murailles4 = document.getElementById('y4x3');	//emplacement murailles
var murailles5 = document.getElementById('y8x2');	//emplacement murailles
var murailles6 = document.getElementById('y3x6');	//emplacement murailles
var murailles7 = document.getElementById('y4x5');	//emplacement murailles
var murailles8 = document.getElementById('y8x3');	//emplacement murailles
var murailles9 = document.getElementById('y4x4');	//emplacement murailles
var murailles10 = document.getElementById('y5x3');	//emplacement murailles
var murailles11 = document.getElementById('y6x3');	//emplacement murailles
var murailles12 = document.getElementById('y7x3');	//emplacement murailles
var murailles13 = document.getElementById('y9x2');//emplacement murailles
var batimentDefense = document.getElementById('y5x7');//correspond à la div du construction batiment de défense
var creerSoldat = document.getElementById('newSoldat'); // bouton création soldat
var caseSoldat = document.getElementById('y5x5');
var caserneConstruite=false; //est ce que le batiment est construit
var armee= parseInt(0); //armee
var vieArmee=0; //incremente les pv selon la création ou la perte de soldat
var tuerArmee;
var divEvents= document.getElementById('events');
var divimgEvents=document.getElementById('imgEvents');
var btnMurailles = document.getElementById('murailles');
var docteur = 1;
var dalek = 2;
var affichageDocteur;
var vieMurailles = parseInt(0);
var upBatDefense = 20;                                // Prix amelioration
var upBatCaserne = 5;                                // Prix amelioration
var upBatGuerrier = 4;                                // Prix amelioration
var upBatMurailles = 20;                                // Prix amelioration
var upVieMuraille = 50;                                // Prix amelioration
var nbRats = parseInt(6);		// Nombre de rats à pop pour l'évent zombiesRats
var ratLife = [] 	// Tableau de la vie de chaque rat
var nbRatsMorts = 0 // Nombre de rats morts (compteur pour faire disparaitre la pop UP)


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

function bruitTsunami() {
	var sonTsunami = new Audio();
	sonTsunami.src = "./Sons/tsunami.mp3";
	sonTsunami.play();
}

function bruitAlien() {
	var sonAlien = new Audio();
	sonAlien.src = "./Sons/alien.mp3";
	sonAlien.play();
}

function bruitDragon() {
	var sonDragon = new Audio();
	sonDragon.src = "./Sons/dragon.mp3";
	sonDragon.play();
}

function bruitRats() {
	var sonRats = new Audio();
	sonRats.src = "./Sons/rats.mp3";
	sonRats.play();
}

function bruitCombats() {
	var sonCombats = new Audio();
	sonCombats.src = "./Sons/combat.mp3";
	sonCombats.play();
}

function bruitTornade() {
	var sonTornade = new Audio();
	sonTornade.src = "./Sons/tornade.mp3";
	sonTornade.play();
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
					setTimeout(function() { newDiv.remove(); }, 900); // Démarrer le timer pour supprimer la div
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
					setTimeout(function() { newDiv.remove(); }, 900); // Démarrer le timer pour supprimer la div
					newDiv.className += " ressourceMove";		// Ajoute la class "ressourceMove", ce qui lance l'animation CSS
	}
	else if (e.target.contains(divEnnemi)) {
		detruireEnnemi();
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
	document.getElementById('autoClickPierre').innerHTML = 'Mine :</br> ('+PrixBatimentMine+') de pierres';
	document.getElementById('clickerAutoPierre').innerHTML = 'Nombre de mineurs: '+autoClickPierre+"</br>(1 click/s)";
	document.getElementById('upgradeClickPierre').innerHTML = 'Mineurs plus rapides :</br> ('+priceClickPierreUpgrade+') de pierres';
	//soldat
  document.getElementById('nbSoldat').innerHTML = 'Nombre de guerriers: '+armee;
	affichageArmee();
	//ennemi
	document.getElementById('afficheEnnemi').innerHTML = "Nombre d'ennemis: "+ennemi;
	//muraille
	document.getElementById('murailles').innerHTML = "Créer Murailles : </br>(20) de Bois / (20) de Pierre"
	//batiments
	document.getElementById('batimentSoldat').innerHTML = "Créer Caserne :</br>(5) de Bois / (5) de Pierre"
	document.getElementById('batimentDefense').innerHTML = "Créer Centre de défense :</br>(20) de Bois / (20) de Pierre"
  
	document.getElementById('newSoldat').innerHTML = "Créer Guerrier :</br>(4) de Bois / (4) de Pierre"
	document.getElementById('afficheVieMuraille').innerHTML = "Vie Muraille : "+vieMurailles;



		//boutons griser

		if (ressourceBois < upBatDefense && ressourcePierre < upBatDefense) {
			batimentDefenseGriser.style.opacity = '0.2';
		}

		else if (ressourceBois >= upBatDefense && ressourcePierre >= upBatDefense && btDefense ==false) {
			batimentDefenseGriser.style.opacity = '1';
		}

		else if (btDefense==true) {
			batimentDefenseGriser.style.opacity = '0.2';
		}

		if (ressourceBois <= priceClickBoisUpgrade) {
			bucheronsGriser.style.opacity = '0.2';
		}

		else if (ressourceBois >= priceClickBoisUpgrade) {
			bucheronsGriser.style.opacity = '1';
		}

		if (ressourcePierre < priceClickPierreUpgrade) {
			mineursGriser.style.opacity = '0.2';
		}

		else if (ressourcePierre >= priceClickPierreUpgrade) {
			mineursGriser.style.opacity = '1';
		}

		if (ressourceBois < PrixBatimentBucheron) {
			campBucheronGriser.style.opacity = '0.2';
		}

		else if (ressourceBois >= PrixBatimentBucheron) {
			campBucheronGriser.style.opacity = '1';
		}

		if (ressourcePierre < PrixBatimentMine) {
			mineGriser.style.opacity = '0.2';
		}

		else if (ressourcePierre >= PrixBatimentMine) {
			mineGriser.style.opacity = '1';
		}

		if (ressourceBois < upBatCaserne && ressourcePierre < upBatCaserne) {
			caserneGriser.style.opacity = '0.2'
		}
		else if (ressourceBois >= upBatCaserne && ressourcePierre >= upBatCaserne && caserneConstruite == false) {
			caserneGriser.style.opacity = '1'
		}
		else if (caserneConstruite == true) {
			caserneGriser.style.opacity = '0.2'
		}
		if (ressourcePierre<upBatGuerrier && ressourceBois<upBatGuerrier) {
			guerriersGriser.style.opacity = '0.2'

		}
		else if (ressourcePierre>upBatGuerrier && ressourceBois>upBatGuerrier && btCaserne == true) {
			guerriersGriser.style.opacity = '1'
		}

		else if (btCaserne == false) {
			guerriersGriser.style.opacity = '0.2'
		}

		if (ressourcePierre<upBatMurailles && ressourceBois<upBatMurailles) {
			muraillesGriser.style.opacity = '0.2'
		}

		if (ressourcePierre>upBatMurailles && ressourceBois>upBatMurailles && btMurailles==false && btDefense==true) {
			muraillesGriser.style.opacity = '1'
		}
		if (btMurailles==true) {
			muraillesGriser.style.opacity = '0.2'
		}

		//Destruction batiments

		if (btCaserne==false) {
			caserne.style.backgroundImage = 'none';
			caserneConstruite = false;
			armee=0;
		}

		if (btDefense==false) {
			batimentDefense.style.backgroundImage = 'none';
			btMurailles = false;
		}

		if (btMurailles==false) {
			murailles1.style.backgroundImage = 'none';
			murailles2.style.backgroundImage = 'none';
			murailles3.style.backgroundImage = 'none';
			murailles4.style.backgroundImage = 'none';
			murailles5.style.backgroundImage = 'none';
			murailles6.style.backgroundImage = 'none';
			murailles7.style.backgroundImage = 'none';
			murailles8.style.backgroundImage = 'none';
			murailles9.style.backgroundImage = 'none';
			murailles10.style.backgroundImage = 'none';
			murailles11.style.backgroundImage = 'none';
			murailles12.style.backgroundImage = 'none';
			murailles13.style.backgroundImage = 'none';
			vieMurailles=0;
		}

		if (btMine==false) {
			batimentMine.style.backgroundImage = 'none';
			PrixBatimentMine= 10;
		}

		if (btBucheron==false) {
			batimentBucheron.style.backgroundImage = 'none';
			PrixBatimentBucheron = 10;
		}


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
		construireBatimentBucheron();
		setInterval(ClickManuelBois, 1000);
		btBucheron = true;
		bruitConstruction()
		
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
Affichage();
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
		construireBatimentMineur();
		setInterval(ClickManuelPierre, 1000);
		btMine = true;
		bruitConstruction()
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
Affichage();
}


// Fin Compteur et Bonus PIERRE.




// Construire Batiment Soldat (y6x6)

function construireCaserne() {
	if (ressourceBois >= upBatCaserne && ressourcePierre >= upBatCaserne) {
		caserne.style.backgroundImage = "url(./Images/Orc_Barracks.gif)";
		caserneConstruite=true;
		ressourceBois = ressourceBois- upBatCaserne ;
		ressourcePierre = ressourcePierre- upBatCaserne ;
		btCaserne = true;
		Affichage();
		bruitConstruction();
	}
	else alert ( "Augmenter vos ressources Bois et Pierre");
}

// fin Construire Batiment Soldat



// Construire Batiment Défense (y2x11)

function construireBatimentDefense () {
	if (ressourceBois > upBatDefense && ressourcePierre > upBatDefense) {
		batimentDefense.style.backgroundImage = "url(./Images/Orc_Blacksmith.gif)";
		ressourceBois = ressourceBois - upBatDefense;
		ressourcePierre = ressourcePierre - upBatDefense;
		btDefense= true;
		Affichage();
		bruitConstruction();

	}
	else alert ("Augmenter vos ressources Bois et Pierre");
}

/* construire muraille */

function construireMurailles() {
	if (ressourceBois > upBatMurailles && ressourcePierre > upBatMurailles && btDefense == true && btMurailles==false) {
	
		murailles1.style.backgroundImage = "url(./Images/wallEndRight.png)";
		murailles2.style.backgroundImage = "url(./Images/wallAngle.png)";
		murailles3.style.backgroundImage = "url(./Images/wallAngle.png)";
		murailles4.style.backgroundImage = "url(./Images/wallAngle.png)";
		murailles5.style.backgroundImage = "url(./Images/wallAngle.png)";
		murailles6.style.backgroundImage = "url(./Images/wallAngleInterieur.png)";
		murailles7.style.backgroundImage = "url(./Images/wallAngleInterieur.png)";
		murailles8.style.backgroundImage = "url(./Images/wallAngleInterieur.png)";
		murailles9.style.backgroundImage = "url(./Images/wallHorizontal.png)";
		murailles10.style.backgroundImage = "url(./Images/wallVertical.png)";
		murailles11.style.backgroundImage = "url(./Images/wallVertical.png)";
		murailles12.style.backgroundImage = "url(./Images/wallVertical.png)";
		murailles13.style.backgroundImage = "url(./Images/wallVertical.png)";
		ressourceBois=ressourceBois-20;
		ressourcePierre=ressourcePierre-20;
		btMurailles=true;
		vieMurailles = upVieMuraille;
		bruitConstruction();
	}
	else if (btMurailles==true) {
		alert('Deja Construit');
	}

	else  {
		alert('pas de ressources');
	}
	Affichage()

}

// fin Construire Batiment Soldat

/* construire batiment bucheron (y7x11) */
function construireBatimentBucheron	(){
	
		batimentBucheron.style.backgroundImage ="url(./Images/Orc_Lumbermill.gif)";
		bruitConstruction();
		btBucheron = true;
		Affichage();
		
	}
/* construire batiment bucheron (y2x11) */
function construireBatimentMineur(){
	batimentMine.style.backgroundImage ="url(./Images/Orc_Mine.gif)";
	bruitConstruction();
	btMine = true;
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
 if (ressourceBois>=upBatGuerrier && ressourcePierre>=upBatGuerrier){
  armee = armee+1;
  ressourceBois= ressourceBois- upBatGuerrier ;
  ressourcePierre=ressourcePierre- upBatGuerrier ;
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

function enleverVieMuraille() {
	if (vieMurailles>0) {
	vieMurailles=vieMurailles-ennemi;
	Affichage();
	}
}

//creation ennemies de base

function ennemiNbRandom() {
	divEnnemi.style.backgroundImage="url(./Images/ennemi.png)";
	ennemi = Math.floor((Math.random() * (20)) + 1);
	divEvents.style.display='block';
	divimgEvents.style.backgroundImage='url(./Images/warrior.gif)';
	document.getElementById("txtEvents").innerHTML = "<strong>Attaque d'HUMAINS !!!! </strong></br><em>Il y'a "+ennemi+" humains qui vous attaques, ils détruisent vos remparts, votre armée et vos ressources !!!</em>";
	bruitCombats();

	console.log(ennemi)
		if (divEvents.style.display='block') {
		setTimeout(function(){divEvents.style.display='none';}, 8000); 	

		}
		
		if (vieMurailles>0) {
			setInterval(enleverVieMuraille, 6000);
		}

		if (armee>0) {
			setInterval(enleverVieArmee, 5000);
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

/* EVENT RATS ZOMBIES */

function zombiesRats() {
	// POP UP
	divEvents.style.display='block';
	divimgEvents.style.backgroundImage='url(./Images/ratAlert.gif)';
	document.getElementById("txtEvents").innerHTML = "<strong>Des rats ont envahi votre camp !!</strong></br><em>Ils rongent votre bois ! Tuez les rapidement !</em>";
	bruitRats(); // Son de rats : Avertis le joueur de l'évent
	// Création des rats
	for (var i = 0; i < nbRats; i++) {	// Exécute nbRats fois la boucle pour créer nbRats rats.
		var newDiv = document.createElement("div");				// Créer une nouvelle div
		newDiv.id = "rat"+i					//	Ajoute une ID selon l'indice "i" à la div du rat
		newDiv.style.height = "37px";
		newDiv.style.width = "36px";
		newDiv.style.backgroundImage = "url(./Images/rat.gif)";
		newDiv.addEventListener('click', killRat);	// Lance la fonction killRat lorsqu'on clique sur ce rat

		ratLife[i] = 3 // Assigne 3pv pour chaque rat.
		ratLife[i+nbRats] = setInterval(function(){ // Début timer malus rat , entrer l'interval dans le tableau pour pouvoir l'arreter plus tard
			if (ressourceBois > 0) {
			ressourceBois = parseInt((ressourceBois-(ressourceBois*1/100)));  // Enleve 1% du bois
			Affichage();
			}
		}
		, 1000); // chaque seconde
		/* Placement random du rat */
		var ratX = Math.floor(Math.random() * (12-3 +1) )+ 3; 	// Génère un nombre random entre 3 et 12 pour déterminer le X du pop
		var ratY = Math.floor(Math.random() * (9-2 +1) )+ 2;	// Génère un nombre random entre 2 et 9 pour déterminer le Y du pop
			// Relancer le random si c'est en dehors des remparts ou sur une ressource cliquable
		while ((ratY == 1) || (ratY == 2) || (ratY == 3) || (ratX == 1) || (ratX == 2) || (ratX == 3) || (ratX == 4 && ratY < 5) || (ratX == 5 && ratY < 5) || (ratX == 6 && ratY < 4) || (ratX == 8 && ratY == 9) || (ratX == 9 && ratY > 7) || (ratX == 10 && ratY > 6) || (ratX == 11 && ratY > 7) || (ratX == 12 && ratY > 7) || (ratX == 13 && ratY == 9) || (ratX > 12 && ratY == 6) || (ratY == 7 && ratX > 12) || (ratX == 14 && ratY == 8)) {
				var ratX = Math.floor(Math.random() * (12-3 +1) )+ 3;
				var ratY = Math.floor(Math.random() * (9-2 +1) )+ 2;
		}
		document.getElementById("y"+ratY+"x"+ratX).appendChild(newDiv); // Place la div du rat dans la case randomisée
	}
}

function killRat(e) {
	// FX Sanglant lorsque l'on clique sur un rat
		bloodDiv = document.createElement("div");				// Créer une nouvelle div
		bloodDiv.style.pointerEvents = "none";					// Désactiver la possilité de cliquer dessus
		document.getElementById(e.target.id).appendChild(bloodDiv);	// Insérer la nouvelle div dans la div précédement cliquée
		bloodDiv.style.height = "40px";
		bloodDiv.style.width = "40px";
		bloodDiv.style.position = "absolute";
		bloodDiv.style.zIndex = "999";							// La mettre au dessus de tout
		bloodDiv.style.backgroundImage = "url(./Images/fxBloodHit.gif)";
		setTimeout(function() { bloodDiv.remove(); }, 600);		// Puis la faire disparaitre
	// Enlever de la vie à un rat
		for (var i = 0; i < nbRats; i++) {	// Parcours le tableau des rats
			if (e.target.id == "rat"+i) {	// Comparer si le rat cliqué est = au rat[i]
				ratLife[i]--				// Enlever 1pv au rat i
				if (ratLife[i] == 0) {		// Si le rat meurs
					nbRatsMorts++
					e.target.remove();		// Supprimer la div du rat
					clearInterval(ratLife[i+nbRats]); // Arrêter le malus du rat tué
				}
			}
		}
		if (nbRatsMorts == nbRats) {		// Si le nombre de rats morts est = au nombre de rats pops
			divEvents.style.display='none'; // Disparaitre la POP UP
			nbRatsMorts = 0;				// Réinitialiser les rats morts à 0
			ratCerveauBonus();
		}


	
}

/* EVENT SHARKNADO */

function sharknado() {

	bruitTornade();

	// POP UP
	divEvents.style.display='block';
	divimgEvents.style.backgroundImage='url(./Images/sharknadoAlert.gif)';
	document.getElementById("txtEvents").innerHTML = "<strong>Une sharknado est apparue !!</strong></br><em>Débarassez vous en avant qu'elle n'emporte toutes vos ressources et soldats !</em>";

	// Création de la tornade	

	var shark = document.createElement("div");			// Création d'une nouvelle div pour la tornade
	document.body.insertBefore(shark, jeu);				// Insérer la div avant "jeu"
	setTimeout(function(){ shark.style.transform = "translateX(600px)"; }, 5000) // Fixer la position de la tornade à la fin de l'animation CSS
	shark.classList.add("tornado");						// Ajouter le class "tornado" : Lancer l'anim de déplacement CSS
	var sharkLife = 10;									// Vie de la tornade
		var sharkDamage = setInterval(function(){		// DEGATS DE LA TORNADE PAR SECONDE !
		if (armee > 0) {
			armee--;									// Retirer un soldat
		} 
		if (ressourcePierre > 0) {
			ressourcePierre = parseInt((ressourcePierre-(ressourcePierre*2/100)));  // Enlever 2% de la pierre
		}
		if (ressourceBois > 0) {
			ressourceBois = parseInt((ressourceBois-(ressourceBois*2/100))); 		// Enlever 2% du bois
		}
		Affichage(); // Mettre à jour l'affichage après le retrait des ressources
		}, 1000); // chaque seconde

	// Cliquer sur la tornade
	shark.addEventListener('click', function destroyTornado(e) {	// Similaire au "onclick" sauf qu'il est valable en dehors de la fonction -> éxécute "destroyTornado" quand on clique sur la tornade.
		
		var newDiv = document.createElement("div");		// Créer une nouvelle div
		document.body.insertBefore(newDiv, jeu);		// Insérer la nouvelle div avant "jeu"
		newDiv.style.position = "absolute";				// Position absolute, pour ne pas déformer le reste du jeu
		newDiv.style.zIndex = "999";					// Est au dessus de tout
		newDiv.style.marginTop = "-60px";				// Pour centrer
		newDiv.style.marginLeft = "-60px";				// le gif sur le curseur
		newDiv.style.left = e.pageX + 'px';				// Positionner en X la div selon le curseur du joueur
		newDiv.style.top = e.pageY + 'px';				// Positionner en Y la div selon le curseur du joueur
			
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
			divEvents.style.display='none';						// Disparaitre la POP UP
			clearInterval(sharkDamage);							// Arrêt des dégats
			setTimeout(function(){ shark.remove(); }, 3000);	// Suppression de la div après l'animation CSS 
			shark.classList.add("tornadoFade");					// Animation CSS de la disparition progressive de la tornade
		}
	})
}

/* Event Malus Tsunami*/

function tsunamiEvent(){
	divEvents.style.display='block';
	divimgEvents.style.backgroundImage='url(./Images/tsunami.gif)';
	document.getElementById("txtEvents").innerHTML = "<strong>Attaque TSUNAMI !!!! </strong></br><em>Cette vague détruit 50% de vos ressources de bois et de pierre</em>";
	ressourceBois=parseInt(ressourceBois/2);
	ressourcePierre=parseInt(ressourcePierre/2);
	armee = parseInt(armee/2);
	bruitTsunami();
	Affichage();
	if (divEvents.style.display='block') {
		setTimeout(function(){divEvents.style.display='none';}, 6000); 	
	}
}


/* Event Soucoupe*/

function soucoupeEvent(){
	divEvents.style.display="block";
	divimgEvents.style.backgroundImage="url(./Images/ufo.gif)";
	document.getElementById("txtEvents").innerHTML = "<strong>Attaque des martiens !!!! </strong></br><em>Cette soucoupe emmène 1 de vos soldat</em>";
	armee=parseInt(armee-(armee*3/100));
	bruitAlien();
	Affichage();
  
	if (divEvents.style.display="block") {
		setTimeout(function(){divEvents.style.display="none";}, 7000); 	
		
	}
}

/* Event Bonus Dr Who */

function drWho(){
if (btCaserne==false){
	drWhoDebut();
}
	if (affichageDocteur==dalek) {
		setTimeout(drWhoTardisDalek, 5000) ;
	}
	if (affichageDocteur==docteur){
		setTimeout(drWhoTardisDoc1, 5000) ;
	}

	setTimeout(function(){divEvents.style.display="none";}, 10000);
}	
function drWhoDebut(){
affichageDocteur=Math.floor(Math.random() * dalek )+ docteur;
	console.log(affichageDocteur);
	divEvents.style.display="block";
	divimgEvents.style.backgroundImage="url(./Images/TardisPop.gif)";
	document.getElementById("txtEvents").innerHTML="Attention Dr WHO arrive";
}
function drWhoTardisDoc1(){
	divimgEvents.style.backgroundImage="url('./Images/TardisDoc1.gif')";
	document.getElementById("txtEvents").innerHTML="Dr WHO vous aide et </br>vous offre 10% de ressources supplémentaires";
	ressourceBois= parseInt(ressourceBois +(ressourceBois*10/100));
	ressourcePierre= parseInt(ressourcePierre +(ressourcePierre*10/100));
	Affichage();

}

function drWhoTardisDalek(){
	divimgEvents.style.backgroundImage="url(./Images/TardisDalek.gif)";
	document.getElementById("txtEvents").innerHTML="le Dalek vous prend des 10 % de vos ressources";
	ressourceBois= parseInt(ressourceBois -(ressourceBois*10/100));
	ressourcePierre= parseInt(ressourcePierre -(ressourcePierre*10/100));
	Affichage();


if (divEvents.style.display='block') {
		setTimeout(function(){divEvents.style.display='none';}, 10000); 	
	}
}

/* Event Dragon*/

function dragonEvent(){
	divEvents.style.display='block';
	divimgEvents.style.backgroundImage='url(./Images/dragon2.gif)';
	document.getElementById("txtEvents").innerHTML = "<strong>Attaque du Dragon Destructeur !!!! </strong></br><em>Sa puissante attaque est inévitable, il va détruire toutes vos défenses... Oups !</em>";
	btDefense=false;
	btMurailles=false;
	bruitDragon();
	Affichage();
	if (divEvents.style.display='block') {
		setTimeout(function(){divEvents.style.display='none';}, 10000); 	
	}
}

function ratCerveauBonus(){
	divEvents.style.display='block';
	divimgEvents.style.backgroundImage='url(./Images/brain3.png)';
	document.getElementById("txtEvents").innerHTML = "<strong>*** BONUS ***</br> Sales bêtes à tuer mais leurs petites cervelles est un parfait snacks ! Miam !!!</strong></br><em>Ca boostera la rage de vos guerriers jusqu'au prochain combat ! </em>";
	
	Affichage();
	if (divEvents.style.display='block') {
		setTimeout(function(){divEvents.style.display='none';}, 11000); 
	}
}

/* EVENT POP RANDOM */

function eventRnd() {
	var timerEvent = ( (Math.floor(Math.random() * (3*60) + 1))*1000 ); // Une fois toutes les 3 minutes (3*60 secondes) x1000 pour convertir en millisecondes
	console.log("Event dans "+timerEvent/1000+" secondes.");
	setTimeout(function () {
		var randomizeEvent = (Math.floor(Math.random() * 100 + 1)); // Random entre 1 et 100
		if (randomizeEvent >= 1 && randomizeEvent <= 50) {
			// ENNEMIS
			ennemiNbRandom();
		}
		else if (randomizeEvent > 50 && randomizeEvent < 60) {
			// SOUCOUPE VOLANTE
			soucoupeEvent();
		}
		else if (randomizeEvent >= 60 && randomizeEvent < 70) {
			// RATS
			zombiesRats();
		}
		else if (randomizeEvent >= 70 && randomizeEvent < 90) {
			// DOC WHO
			drWho();
		}
		else if (randomizeEvent >= 90 && randomizeEvent < 93) {
			// DRAGON
			dragonEvent();
		}
		else if (randomizeEvent >= 93 && randomizeEvent < 96) {
			// TSUNAMI
			tsunamiEvent();
		}
		else if (randomizeEvent >= 96 && randomizeEvent <= 100) {
			// SHARKNADO
			sharknado();
		}
		eventRnd();
	}, timerEvent)
}

document.getElementById('jeu').onclick = checkDiv;								// Cliquer sur une div pour obtenir son ID
document.getElementById('autoClickBois').onclick = CabaneBucheron; 				// Acheter un Auto clicker
document.getElementById('upgradeClickBois').onclick = UpgradeBois; 				// Améliorer le click du bois
document.getElementById('autoClickPierre').onclick = MinePierre; 				// Acheter un Auto clicker
document.getElementById('upgradeClickPierre').onclick = UpgradePierre;			// Améliorer le click de la pierre
document.getElementById('batimentSoldat').onclick = construireCaserne; 			// construire une caserne
document.getElementById('batimentDefense').onclick = construireBatimentDefense; // construire la défense
btnMurailles.onclick = construireMurailles;										// construire la muraille de base

eventRnd();
Affichage();		// Affichage