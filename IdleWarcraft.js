var nbTotal = 0;		// Nombre total de clicks enmagasiné
var click = 1;			// Nombre de click obtenu par click
var priceAuto = 10;		// Prix du clicker auto
var autoClick = 0;		// Nombre de clicker auto
var priceUpgrade = 75;	// Prix de l'amélioration du click

// Fonction cliquer sur une div
function checkDiv(e) {
	alert(e.target.id);
}

// Fonction mise à jour de l'affichage des compteurs
function updateNb() {
	document.getElementById('nbClick').innerHTML = 'Compte de $clicks$: '+nbTotal;
	document.getElementById('autoClick').innerHTML = 'Acheter clicker auto $'+priceAuto+'clicks$';
	document.getElementById('clickerAuto').innerHTML = 'Nombre de clicker auto (1 click/s): '+autoClick;
	document.getElementById('btnClick').innerHTML = click+' $clicks$';
	document.getElementById('upgradeClick').innerHTML = 'Améliorer clicks $'+priceUpgrade+'clicks$';
}

// Fonction click manuel
function addClick() {
	nbTotal = nbTotal + click;
	updateNb();
}

// Fonction amélioration du click (multiplicateur)
function upgradeClick() {
	if (nbTotal >= priceUpgrade) {
		click++;
		nbTotal = (nbTotal - priceUpgrade);
		priceUpgrade = priceUpgrade*2;
		updateNb();
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
}

// Fonction clicker auto
function timerClick() {
	if (nbTotal >= priceAuto){
		nbTotal = (nbTotal - priceAuto);
		autoClick++;
		priceAuto = parseInt(priceAuto*1.5);
		updateNb();
		setInterval(addClick, 1000);
	}
	else {
		alert('Pas assez de $clicks$ !');
	}
}

document.getElementById('jeu').onclick = checkDiv;				// Cliquer sur une div pour obtenir son ID
document.getElementById('autoClick').onclick = timerClick; 		// Acheter un Auto clicker
document.getElementById('btnClick').onclick = addClick;			// Cliquer manuellement
document.getElementById('upgradeClick').onclick = upgradeClick; // Améliorer le click


updateNb();		// Affichage