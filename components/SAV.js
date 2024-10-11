function sortTable(columnIndex) {
    const table = document.getElementById("dataTable");
    let switching = true;
    let direction = "asc";  // Par défaut, on trie en ascendant
    let switchCount = 0;  // Compte le nombre d'inversions

    while (switching) {
        switching = false;
        let rows = table.rows;
        let shouldSwitch = false;

        // Boucle sur toutes les lignes sauf l'en-tête
        for (let i = 1; i < rows.length - 1; i++) {
            let x = rows[i].getElementsByTagName("td")[columnIndex];
            let y = rows[i + 1].getElementsByTagName("td")[columnIndex];

            // Comparaison en fonction de la direction
            if (direction === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            // Inverser les lignes
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            // Si aucun switch n'a été fait, et que la direction était "asc", on change à "desc"
            if (switchCount === 0 && direction === "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}

function filterTable() {
    const filterInput = document.getElementById("filterInput").value.toUpperCase();
    const filterMarque = document.getElementById("filter-marque").value.toUpperCase();
    const filterDeclarant = document.getElementById("filter-declarant").value.toUpperCase();
    const filterAffaire = document.getElementById("filter-affaire").value.toUpperCase();
    const filterVille = document.getElementById("filter-ville").value.toUpperCase();
    const filterStatus = document.getElementById("filter-satus").value.toUpperCase();
    const filterType = document.getElementById("filter-type").value.toUpperCase();
    const filterLibelle = document.getElementById("filter-libelle").value.toUpperCase();
    const filterAttribue = document.getElementById("filter-attribue").value.toUpperCase();

    const table = document.getElementById("dataTable");
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(row => {
        const cells = row.getElementsByTagName("td");
        const ticketNumber = cells[0].textContent.toUpperCase();
        const marque = cells[1].textContent.toUpperCase();
        const date = cells[2].textContent.toUpperCase();
        const declarant = cells[3].textContent.toUpperCase();
        const affaire = cells[4].textContent.toUpperCase();
        const ville = cells[5].textContent.toUpperCase();
        const status = cells[6].textContent.toUpperCase();
        const type = cells[7].textContent.toUpperCase();
        const libelle = cells[8].textContent.toUpperCase();
        const attribue = cells[9].textContent.toUpperCase();

        // Vérification des critères de filtrage
        const isVisible = (
            (filterInput === "" || 
            ticketNumber.includes(filterInput) || 
            marque.includes(filterInput) || 
            date.includes(filterInput) || 
            declarant.includes(filterInput) || 
            affaire.includes(filterInput) || 
            ville.includes(filterInput) || 
            status.includes(filterInput) || 
            type.includes(filterInput) || 
            libelle.includes(filterInput) || 
            attribue.includes(filterInput)) &&
            marque.includes(filterMarque) &&
            declarant.includes(filterDeclarant) &&
            affaire.includes(filterAffaire) &&
            ville.includes(filterVille) &&
            (filterStatus === "" || status.includes(filterStatus)) &&
            (filterType === "" || type.includes(filterType)) &&
            libelle.includes(filterLibelle) &&
            attribue.includes(filterAttribue)
        );

        row.style.display = isVisible ? "" : "none";
    });
}

function showDetails(ticketId) {
    // Récupérer les détails du ticket (simulation)
    const ticketDetails = {
        '1': `
            N° de ticket : #00001
            Marque : NOVEA
            Date : 07/10/2023
            Déclarant : AREL
            N° d'affaire : 2360
            Commune : LYON(69) - FRA
            Statut : New
            Type de Sav : ND
            Libelle : *
            Attribue : DMA
        `,
        '2': `
            N° de ticket : #00002
            Marque : RAGNI
            Date : 08/11/2023
            Déclarant : B-LIGHT
            N° d'affaire : 114587
            Commune : NANTES(49) - FRA
            Statut : En cours
            Type de Sav : ND
            Libelle : *
            Attribue : CBO
        `,
        '3': `
            N° de ticket : #00003
            Marque : RAGNI
            Date : 08/01/2024
            Déclarant : NOVEA CDI
            N° d'affaire : 194
            Commune : ABIJAN - CDI
            Statut : Terminé
            Type de Sav : Sous Garantie
            Libelle : driver LED
            Attribue : CBO
        `,
        '4': `
            N° de ticket : #00004
            Marque : NOVEA
            Date : 28/09/2024
            Déclarant : AREL
            N° d'affaire : 49970
            Commune : BESANCON(25) - FRA
            Statut : Terminé
            Type de Sav : Geste commercial
            Libelle : PV330W
            Attribue : DMA
        `
    };

    // Afficher les détails dans la popup
    document.getElementById('ticketDetails').innerText = ticketDetails[ticketId];
    document.getElementById('ticketPopup').style.display = 'flex'; // Afficher la popup
}

function closePopup() {
    document.getElementById('ticketPopup').style.display = 'none'; // Cacher la popup
}

function gotodetaille() {
    window.location.href = "detaille_sav.html";
}