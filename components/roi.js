function openTab(evt, tabId) {
    const sections = document.getElementsByClassName('content-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        sections[i].classList.remove('active');
    }

    const tabs = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    document.getElementById(tabId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function increment(inputId) {
    const input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
}

function decrement(inputId) {
    const input = document.getElementById(inputId);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

document.getElementById('project-info').style.display = 'block';

let solutionCount = 2;

document.getElementById('add-solution-btn').addEventListener('click', function() {
    solutionCount++; 
    
    const solutionContainer = document.querySelector('.solution-container');
    const firstSolution = document.querySelector('.solution');
    const newSolution = firstSolution.cloneNode(true);
    
    newSolution.querySelector('input[id^="solution-name"]').value = 'Solution ' + solutionCount;

    solutionContainer.appendChild(newSolution);
});

function removeSolution(element) {
solutionCount--; 
const solution = element.closest('.solution');
solution.remove();
}

function addLuminaire(element) {
    const solution = element.closest('.solution');
    const luminaireContainer = solution.querySelector('.luminaire-container');
    luminaireCount = luminaireContainer.querySelectorAll('.luminaire').length + 1;

    luminaireCount++;
    const newLuminaire = document.createElement('div');
    newLuminaire.classList.add('luminaire');
    newLuminaire.innerHTML = `
        <label for="luminaire${luminaireCount}-name">Nom du luminaire</label>
        <input type="text" id="luminaire${luminaireCount}-name" value="Luminaire ${luminaireCount}">
        <label for="luminaire1-tech">Technologie utilisée</label>
        <select id="luminaire1-tech">
            <option value="conventionnel">Conventionnel</option>
            <option value="led">LED</option>
            <option value="led">Solaire</option>
        </select>

        <label for="luminaire1-quantity">Nombre de luminaires</label>
        <div class="input-group">
            <button class="btn-decrement" onclick="decrement('luminaire1-quantity')">-</button>
            <input type="number" id="luminaire1-quantity" value="1">
            <button class="btn-increment" onclick="increment('luminaire1-quantity')">+</button>
        </div>

        <label for="luminaire1-power">Puissance par luminaire (W)</label>
        <div class="input-group">
            <button class="btn-decrement" onclick="decrement('luminaire1-power')">-</button>
            <input type="number" id="luminaire1-power" value="250">
            <button class="btn-increment" onclick="increment('luminaire1-power')">+</button>
        </div>
        <!-- Ajoutez ici les autres champs du luminaire -->
    `;
    
    luminaireContainer.appendChild(newLuminaire);
}

function removeLuminaire(element) {
    luminaireCount--;
    const luminaireDiv = element.closest('.luminaire');
    luminaireDiv.remove();
}