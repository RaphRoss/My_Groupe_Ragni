document.addEventListener("DOMContentLoaded", () => {
    loadDevisList();
});

function loadDevisList() {
    const devisList = document.getElementById("devisList");
    const devis = JSON.parse(localStorage.getItem("devis"));

    if (devis) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${devis.name} ${devis.surname}</span>
            <button onclick="removeDevis()">Supprimer</button>
        `;
        devisList.appendChild(listItem);
    }
}

function removeDevis() {
    localStorage.removeItem("devis");
    location.reload();
}
