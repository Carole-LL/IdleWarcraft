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
var batimentMine; 
var rempart;
var piege;
var ennemi;
var caserne = document.getElementById('y6x6'); // correspond à la div de la construction caserne
var batimentDefense = document.getElementById('y5x7');//correspond à la div du construction batiment de défense
var creerSoldat = document.getElementById('newSoldat'); // bouton création soldat
var caseSoldat = document.getElementById('y1x1');
var caserneConstruite=false;
var armee=0;




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
	if (e.target.classList.contains("wood"))		// Vérifie si la div est du bois
		ClickManuelBois();
	else if (e.target.classList.contains("rock"))	// Vérifie si la div est de la Pierre
		ClickManuelPierre();
	else
		alert(e.target.id);
}

// Fonction mise à jour de l'affichage des compteurs Pour le bois et pierre.
function Affichage() {
	// Bois 
	document.getElementById('nbClickBois').innerHTML = 'Bois '+ressourceBois;
	document.getElementById('autoClickBois').innerHTML = 'Acheter clicker auto  Bois$'+PrixBatimentBucheron+'clicks$';
	document.getElementById('clickerAutoBois').innerHTML = 'Nombre de bucherons (1 click/s): '+autoClickBois;
	document.getElementById('upgradeClickBois').innerHTML = 'Améliorer clicks Bois $'+priceClickBoisUpgrade+'clicks$';
	// Pierre 
	document.getElementById('nbClickPierre').innerHTML = 'Pierre '+ressourcePierre;
	document.getElementById('autoClickPierre').innerHTML = 'Acheter clicker auto Pierre $'+PrixBatimentMine+'clicks$';
	document.getElementById('clickerAutoPierre').innerHTML = 'Nombre de mineurs (1 click/s): '+autoClickPierre;
	document.getElementById('upgradeClickPierre').innerHTML = 'Améliorer clicks Pierre'+priceClickPierreUpgrade+'clicks$';
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



// fonction Bouton Soldat

creerSoldat.onclick=boutonSoldat;

function boutonSoldat(){
	if (caserneConstruite == true){
		creationSoldat();
		}		
		else {
			alert("vous n'avez pas construit la caserne");
		}
		
}


function creationSoldat(){
 if (ressourceBois>3 && ressourcePierre>3){
  armee = armee+1;
  ressourceBois= ressourceBois-4;
  ressourcePierre=ressourcePierre-4;
  Affichage();
}
	else {
	alert("Il vous faut des ressources supplémentaires");
	}
console.log(armee);
}


document.getElementById('jeu').onclick = checkDiv;								// Cliquer sur une div pour obtenir son ID
document.getElementById('autoClickBois').onclick = CabaneBucheron; 				// Acheter un Auto clicker
document.getElementById('upgradeClickBois').onclick = UpgradeBois; 				// Améliorer le click du bois
document.getElementById('autoClickPierre').onclick = MinePierre; 				// Acheter un Auto clicker
document.getElementById('upgradeClickPierre').onclick = UpgradePierre;			// Améliorer le click de la pierre
document.getElementById('batimentSoldat').onclick = construireCaserne 			// construire une caserne
document.getElementById('batimentDefense').onclick = construireBatimentDefense 	// construire la défense	

Affichage();		// Affichage