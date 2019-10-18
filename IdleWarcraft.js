var ressourceBois = 0; // Nombre total de clicks enmagasiné pour le bois.
var ressourcePierre = 0; // Nombre total de clicks enmagasiné pour la pierre.
var PrixBatimentBucheron = 10; // Prix du clicker auto (Cabane de bucherons) Bois.
var clickBois = 1;			// Nombre de click obtenu par click sur le Bois.
var autoClickBois = 0;		// Nombre de clicker auto
var priceClickBoisUpgrade = 75;	// Prix de l'amélioration du click
var ressourceOr;
var soldat;
var batimentBase;
var batimentCaserne;
var batimentMine; 
var rempart;
var piege;
var ennemi;


// Fonction cliquer sur une div
function checkDiv(e) {
	alert(e.target.id);
}

// Fonction mise à jour de l'affichage des compteurs Pour le bois.
function Affichage() {
	document.getElementById('nbClickBois').innerHTML = 'Compte de $clicks$: '+ressourceBois;
	document.getElementById('autoClickBois').innerHTML = 'Acheter clicker auto $'+PrixBatimentBucheron+'clicks$';
	document.getElementById('clickerAutoBois').innerHTML = 'Nombre de clicker auto (1 click/s): '+autoClickBois;
	document.getElementById('btnClickManuelBois').innerHTML = clickBois+' $clicks$';
	document.getElementById('upgradeClickBois').innerHTML = 'Améliorer clicks $'+priceClickBoisUpgrade+'clicks$';
}






//Compteur et Bonus BOIS.







// Fonction click manuel
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

document.getElementById('jeu').onclick = checkDiv;				// Cliquer sur une div pour obtenir son ID
document.getElementById('autoClickBois').onclick = CabaneBucheron; 		// Acheter un Auto clicker
document.getElementById('btnClickManuelBois').onclick = ClickManuelBois;			// Cliquer manuellement
document.getElementById('upgradeClickBois').onclick = UpgradeBois; // Améliorer le click


Affichage();		// Affichage




// Fin Compteur et Bonus BOIS.