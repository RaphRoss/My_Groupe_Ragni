function showForm(type) {
    const formContainer = document.getElementById('form-container');
    let formHtml = '';

    if (type === 'photometrique') {
        formHtml = `
            <h2>Demande d'étude photométrique</h2>
            <form>
                <!-- Section Validation d'étude -->
                <fieldset>
                    <legend>Validation d'étude</legend>
                    <label>Fichier à joindre :</label>
                    <input type="file" multiple><br><br>
                    <label>Commentaire à destination de l'agent :</label>
                    <textarea></textarea>
                </fieldset>

                <!-- Section Réalisation de l'étude -->
                <fieldset>
                    <legend>Réalisation de l'étude</legend>
                    <p>Commentaire à destination de l'agent :</p>
                    <textarea disabled></textarea><br><br>
                    <p>Date estimée :</p>
                    <input type="text" value="Un mois à partir de la création" disabled><br><br>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                        <label class="checkbox-label"><input type="checkbox" name="urgent" value="urgent">Demande urgente</label>
                    <p>Liste des images jointes :</p>
                    <ul>
                        <li>Image1.png</li>
                        <li>Image2.png</li>
                    </ul>
                </fieldset>

                <!-- Section Prise en compte de la demande -->
                <fieldset>
                    <legend>Prise en compte de la demande</legend>
                    <label for="delai">Délai souhaité :</label>
                    <input type="date" id="delai"><br><br>
                    <label class="checkbox-label"><input type="checkbox" name="urgent" value="urgent">Demande urgente</label>
                    <label for="commentaire_modif">Commentaire de la demande de modification :</label>
                    <textarea id="commentaire_modif"></textarea><br><br>
                    <label for="elements_complementaires">Éléments complémentaires :</label>
                    <textarea id="elements_complementaires"></textarea>
                </fieldset>

                <!-- Section Brouillon d'étude photométrique -->
                <fieldset>
                    <legend>Brouillon d'étude photométrique</legend>
                    <!-- Sous-catégorie Informations générales -->
                    <h3>Informations générales</h3>
                    <label for="affaire">Affaire* :</label>
                    <input type="text" id="affaire" value="12345"><br><br>
                    <label for="nom_affaire">Nom de l'affaire* :</label>
                    <input type="text" id="nom_affaire" value="Nom de l'affaire"><br><br>
                    <label for="ville_installation">Ville d'installation* :</label>
                    <input type="text" id="ville_installation" value="Ville exemple"><br><br>
                    <label for="nom_client">Nom du client* :</label>
                    <input type="text" id="nom_client" value="Client Exemple"><br><br>
                    <label for="nom_projet">Nom du projet* :</label>
                    <input type="text" id="nom_projet" value="Projet Exemple"><br><br>

                    <!-- Sous-catégorie Saisie de la demande -->
                    <h3>Saisie de la demande</h3>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                    <label for="delai_souhaite">Délai souhaité :</label>
                    <input type="date" id="delai_souhaite"><br><br>

                    <!-- Sous-catégorie Type d'étude -->
                    <h3>Type d'étude</h3>
                    <label for="type_etude">Type d'étude* :</label>
                    <select id="type_etude">
                        <option value="passage_type">Passage type</option>
                        <option value="etude_plan">Étude sur plan</option>
                    </select><br><br>
                    <label>Implantation à optimiser* :</label>
                    <input type="radio" name="optimisation" value="oui"> Oui
                    <input type="radio" name="optimisation" value="non"> Non<br><br>
                    <label>L'implantation est-elle figée* :</label>
                    <input type="radio" name="figee" value="oui"> Oui
                    <input type="radio" name="figee" value="non"> Non<br><br>

                    <!-- Sous-catégorie Exigences -->
                    <h3>Exigences</h3>
                    <label for="classe_eclairage">Classe d'éclairage :</label>
                    <input type="text" id="classe_eclairage"><br><br>

                    <!-- Sous-catégorie Informations luminaire -->
                    <h3>Informations luminaire</h3>
                    <label for="nom_luminaire">Nom du luminaire :</label>
                    <input type="text" id="nom_luminaire"><br><br>
                    <label for="source">Source :</label>
                    <input type="text" id="source"><br><br>
                    <label for="hauteur_feu">Température de couleur :</label>
                    <input type="text" id="Ambre"> Ambre
                    <input type="radio" name="suite_affaire" value="oui" required> 2200K
                    <input type="radio" name="suite_affaire" value="oui" required> 2700K
                    <input type="radio" name="suite_affaire" value="oui" required> 3000K
                    <input type="radio" name="suite_affaire" value="oui" required> 4000K
                    <input type="radio" name="suite_affaire" value="non"> Autre
                    <input type="radio" name="suite_affaire" value="non"> <br><br>
                    <label for="hauteur_feu">Hauteur de feu (mât + crosse)* :</label>
                    <input type="number" id="hauteur_feu"><br><br>
                    <label for="longueur_crosse">Longueur de la crosse* :</label>
                    <input type="number" id="longueur_crosse"><br><br>
                    <label for="inclinaison">Inclinaison* :</label>
                    <input type="number" id="inclinaison"><br><br>
                    <label for="facteur_maintenance">Facteur maintenance* :</label>
                    <input type="number" id="facteur_maintenance"><br><br>

                    <!-- Sous-catégorie Commentaires -->
                    <h3>Commentaires</h3>
                    <label for="commentaire_etude">Commentaire de la demande d'étude :</label>
                    <textarea id="commentaire_etude"></textarea><br><br>
                    <label for="element_demande">Élément de la demande d'étude :</label>
                    <textarea id="element_demande"></textarea><br><br>
                </fieldset>

                <!-- Bouton d'envoi -->
                <button type="submit">Envoyer la demande</button>
            </form>
        `;
    } else if (type === 'infographique') {
        formHtml = `
            <h2>Demande d'étude infographique</h2>
            <form>
                <!-- Section Validation d'étude -->
                <fieldset>
                    <legend>Validation d'étude</legend>
                    <label>Commentaire à destination de l'agent :</label>
                    <textarea></textarea><br><br>
                    <label>Fichiers à joindre (glisser-déposer ou rechercher) :</label>
                    <input type="file" multiple><br><br>
                </fieldset>

                <!-- Section Réalisation de l'étude -->
                <fieldset>
                    <legend>Réalisation de l'étude</legend>
                    <label>Commentaire à destination de l'agent (non modifiable) :</label>
                    <textarea disabled></textarea><br><br>
                    <p>Date estimée :</p>
                    <input type="text" value="Un mois à partir de la création" disabled><br><br>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                    <label class="checkbox-label"><input type="checkbox" name="urgent" value="urgent">Demande urgente</label>
                    <p>Liste des images jointes :</p>
                    <ul>
                        <li>Image1.png</li>
                        <li>Image2.png</li>
                    </ul>
                </fieldset>

                <!-- Section Prise en compte de la demande -->
                <fieldset>
                    <legend>Prise en compte de la demande</legend>
                    <label for="delai_infographique">Délai souhaité :</label>
                    <input type="date" id="delai_infographique"><br><br>
                    <label class="checkbox-label"><input type="checkbox" name="urgent" value="urgent">Demande urgente</label>
                </fieldset>

                <!-- Section Brouillon d'étude infographique -->
                <fieldset>
                    <legend>Brouillon d'étude infographique</legend>
                    <!-- Sous-catégorie Informations générales -->
                    <h3>Informations générales</h3>
                    <label for="affaire_infographique">Affaire* :</label>
                    <input type="text" id="affaire_infographique" value="54321"><br><br>
                    <label for="nom_affaire_infographique">Nom de l'affaire* :</label>
                    <input type="text" id="nom_affaire_infographique" value="Affaire exemple"><br><br>
                    <label for="ville_installation_infographique">Ville d'installation* :</label>
                    <input type="text" id="ville_installation_infographique" value="Ville Exemple"><br><br>
                    <label for="nom_client_infographique">Nom du client* :</label>
                    <input type="text" id="nom_client_infographique" value="Client Exemple"><br><br>
                    <label for="nom_projet_infographique">Nom du projet* :</label>
                    <input type="text" id="nom_projet_infographique" value="Projet Exemple"><br><br>

                    <!-- Sous-catégorie Saisie de la demande -->
                    <h3>Saisie de la demande</h3>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                    <label for="delai_souhaite_infographique">Délai souhaité :</label>
                    <input type="date" id="delai_souhaite_infographique"><br><br>

                    <!-- Sous-catégorie Matrice et Vis-à-vis -->
                    <h3>Matrice et Vis-à-vis</h3>
                    <label for="matrice_infographique">Matrice :</label>
                    <select id="matrice_infographique">
                        <option value="urbain">Urbain</option>
                        <option value="lotissement">Lotissement</option>
                        <option value="routier">Routier</option>
                        <option value="traditionnel">Traditionnel</option>
                    </select><br><br>
                    <label>Vis-à-vis :</label>
                    <input type="text" id="oui"> Oui
                    <input type="radio" name="visavis" value="non"> Non
                    <input type="radio" name="visavis" value="non"> <br><br>

                    <!-- Sous-catégorie Type de solution -->
                    <h3>Type de solution</h3>
                    <label for="type_solution_infographique">Type de solution :</label>
                    <select id="type_solution_infographique">
                        <option value="simulation_korner">Simulation Korner</option>
                        <option value="simulation_traditionnelle">Simulation Traditionnelle</option>
                    </select><br><br>

                    <!-- Sous-sous catégorie Solution - Luminaire -->
                    <h3>Solution - Luminaire</h3>
                    <label for="nom_luminaire_infographique">Nom du luminaire :</label>
                    <input type="text" id="nom_luminaire_infographique"><br><br>
                    <label for="type_fixation_luminaire">Type de fixation :</label>
                    <input type="text" id="type_fixation_luminaire"><br><br>
                    <label for="taille_luminaire">Taille* :</label>
                    <input type="number" id="taille_luminaire" placeholder="Taille en cm"><br><br>
                    <label for="type_vasque_luminaire">Type de vasque :</label>
                    <input type="text" id="type_vasque_luminaire"><br><br>
                    <label for="nombre_led_luminaire">Nombre de LED* :</label>
                    <input type="number" id="nombre_led_luminaire"><br><br>

                    <!-- Sous-sous catégorie Solution - Console -->
                    <h3>Solution - Console</h3>
                    <label for="nom_console_infographique">Nom de la console :</label>
                    <input type="text" id="nom_console_infographique"><br><br>
                    <label for="type_fixation_console">Type de fixation :</label>
                    <input type="text" id="type_fixation_console"><br><br>
                    <label for="taille_console">Taille* :</label>
                    <input type="number" id="taille_console" placeholder="Taille en cm"><br><br>
                    <label for="inclinaison_console">Inclinaison* :</label>
                    <input type="number" id="inclinaison_console" placeholder="Inclinaison en °"><br><br>
                    <label for="accessoire_finition_console">Accessoire de finition :</label>
                    <input type="text" id="accessoire_finition_console"><br><br>

                    <!-- Sous-sous catégorie Solution - Mât -->
                    <h3>Solution - Mât</h3>
                    <label for="nom_mat_infographique">Nom du mât :</label>
                    <input type="text" id="nom_mat_infographique"><br><br>
                    <label for="hauteur_mat_infographique">Hauteur* :</label>
                    <input type="number" id="hauteur_mat_infographique" placeholder="Hauteur en cm"><br><br>
                    <label for="diametre_mat_infographique">Diamètre* :</label>
                    <input type="number" id="diametre_mat_infographique" placeholder="Diamètre en cm"><br><br>
                    <label for="accessoire_finition_mat">Accessoire de finition :</label>
                    <input type="text" id="accessoire_finition_mat"><br><br>
                    <label>Implantation :</label>
                    <input type="texte" id="oui"> Oui
                    <input type="radio" name="implantation_mat" value="non"> Non
                    <input type="radio" name="implantation_mat" value="non"><br><br>
                </fieldset>

                <!-- Bouton d'envoi -->
                <button type="submit">Envoyer la demande</button>
            </form>
        `;
    } else if (type === 'mecanique') {
        formHtml = `
            <h2>Demande d'étude mécanique</h2>
            <form>
                <!-- Section Validation d'étude -->
                <fieldset>
                    <legend>Validation d'étude</legend>
                    <label>Commentaire à destination de l'agent :</label>
                    <textarea></textarea><br><br>
                    <label>Fichiers à joindre (glisser-déposer ou rechercher) :</label>
                    <input type="file" multiple><br><br>
                </fieldset>
    
                <!-- Section Réalisation de l'étude -->
                <fieldset>
                    <legend>Réalisation de l'étude</legend>
                    <label>Commentaire à destination de l'agent (non modifiable) :</label>
                    <textarea disabled></textarea><br><br>
                    <p>Date estimée :</p>
                    <input type="text" value="Un mois à partir de la création" disabled><br><br>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                    <label class="checkbox-label"><input type="checkbox" name="urgent" value="urgent">Demande urgente</label>
                    <p>Liste des images jointes :</p>
                    <ul>
                        <li>Image1.png</li>
                        <li>Image2.png</li>
                    </ul>
                </fieldset>
    
                <!-- Section Prise en compte de la demande -->
                <fieldset>
                    <legend>Prise en compte de la demande</legend>
                    <label for="delai_mecanique">Délai souhaité :</label>
                    <input type="date" id="delai_mecanique"><br><br>
                    <label class="checkbox-label"><input type="checkbox" name="urgent" value="urgent">Demande urgente</label>
                </fieldset>
    
                <!-- Section Brouillon d'étude mécanique -->
                <fieldset>
                    <legend>Brouillon d'étude mécanique</legend>
                    <!-- Sous-catégorie Informations générales -->
                    <h3>Informations générales</h3>
                    <label for="affaire_mecanique">Affaire* :</label>
                    <input type="text" id="affaire_mecanique" value="98765"><br><br>
                    <label for="nom_affaire_mecanique">Nom de l'affaire* :</label>
                    <input type="text" id="nom_affaire_mecanique" value="Affaire exemple"><br><br>
                    <label for="ville_installation_mecanique">Ville d'installation* :</label>
                    <input type="text" id="ville_installation_mecanique" value="Ville Exemple"><br><br>
                    <label for="nom_client_mecanique">Nom du client* :</label>
                    <input type="text" id="nom_client_mecanique" value="Client Exemple"><br><br>
                    <label for="nom_projet_mecanique">Nom du projet* :</label>
                    <input type="text" id="nom_projet_mecanique" value="Projet Exemple"><br><br>
    
                    <!-- Sous-catégorie Saisie de la demande -->
                    <h3>Saisie de la demande</h3>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                    <label for="delai_souhaite_mecanique">Délai souhaité :</label>
                    <input type="date" id="delai_souhaite_mecanique"><br><br>
    
                    <!-- Sous-catégorie Type de structure -->
                    <h3>Type de structure</h3>
                    <label for="type_structure_mecanique">Type de structure* :</label>
                    <select id="type_structure_mecanique">
                        <option value="structure_korner">Structure Korner</option>
                        <option value="structure_traditionnelle">Structure Traditionnelle</option>
                    </select><br><br>
    
                    <!-- Sous-catégorie Matériaux -->
                    <h3>Matériaux</h3>
                    <label for="materiaux_mecanique">Type de matériaux :</label>
                    <input type="text" id="materiaux_mecanique"><br><br>
                    <label for="poids_mecanique">Poids :</label>
                    <input type="number" id="poids_mecanique" placeholder="Poids en kg"><br><br>
                    <label for="dimension_mecanique">Dimensions (LxHxP) :</label>
                    <input type="text" id="dimension_mecanique" placeholder="Dimensions en cm"><br><br>
    
                    <!-- Sous-catégorie Résistance -->
                    <h3>Résistance</h3>
                    <label for="charge_max">Charge maximale (en kg) :</label>
                    <input type="number" id="charge_max"><br><br>
                    <label for="facteur_securite">Facteur de sécurité* :</label>
                    <input type="number" id="facteur_securite"><br><br>
    
                    <!-- Sous-catégorie Commentaires -->
                    <h3>Commentaires</h3>
                    <label for="commentaire_mecanique">Commentaire de la demande d'étude :</label>
                    <textarea id="commentaire_mecanique"></textarea><br><br>
                </fieldset>
    
                <!-- Bouton d'envoi -->
                <button type="submit">Envoyer la demande</button>
            </form>
        `;
    } else if (type === 'projetSpecifique') {
        formHtml = `
            <h2>Demande de projet spécifique</h2>
            <form>
                <!-- Section Date de la demande -->
                <fieldset>
                    <legend>Date de la demande</legend>
                    <label for="date_demande">Date* :</label>
                    <input type="date" id="date_demande" required><br><br>
                </fieldset>

                <!-- Section Nom et prénom -->
                <fieldset>
                    <legend>Nom et prénom</legend>
                    <label for="nom_prenom">Nom et prénom* :</label>
                    <input type="text" id="nom_prenom" required><br><br>
                </fieldset>

                <!-- Section Titre de l'affaire -->
                <fieldset>
                    <legend>Titre de l'affaire</legend>
                    <label for="titre_affaire">Titre de l'affaire* :</label>
                    <input type="text" id="titre_affaire" required><br><br>
                </fieldset>

                <!-- Section Numéro d'affaire My Groupe Ragni -->
                <fieldset>
                    <legend>Veuillez renseigner votre numéro d'affaire My Groupe Ragni</legend>
                    <label for="num_affaire">Numéro d'affaire* :</label>
                    <input type="text" id="num_affaire" required><br><br>
                </fieldset>

                <!-- Section Description de la solution recherchée -->
                <fieldset>
                    <legend>Description de la solution recherchée</legend>
                    <label for="description_solution">Description de la solution recherchée* :</label>
                    <textarea id="description_solution" required></textarea><br><br>
                </fieldset>

                <!-- Section Probabilité de commande -->
                <fieldset>
                    <legend>Probabilité de commande</legend>
                    <label>Probabilité de commande* :</label>
                    <select id="probabilite_commande" required>
                        <option value="je_tente">Je tente de prendre l'affaire</option>
                        <option value="concurrence">RAGNI est normalement sélectionnée mais des concurrents sont positionnés</option>
                        <option value="commande_assuree">La commande est assurée</option>
                    </select><br><br>
                </fieldset>

                <!-- Section Quantité escomptée -->
                <fieldset>
                    <legend>Quantité escomptée</legend>
                    <label for="quantite">Quantité escomptée* :</label>
                    <input type="number" id="quantite" required><br><br>
                </fieldset>

                <!-- Section Suite d'affaire envisagée -->
                <fieldset>
                    <legend>Suite d'affaire envisagée</legend>
                    <label>Suite d'affaire envisagée* :</label>
                    <input type="text" id="oui"> Oui
                    <input type="radio" name="suite_affaire" value="non"> Non
                    <input type="radio" name="suite_affaire" value="non"><br><br>
                </fieldset>

                <!-- Section Prix de vente ciblé -->
                <fieldset>
                    <legend>Prix de vente ciblé</legend>
                    <label for="prix_vente">Prix de vente ciblé* :</label>
                    <input type="text" id="prix_vente" required><br><br>
                </fieldset>

                <!-- Section Type de livrable souhaité -->
                <fieldset>
                    <legend>Type de livrable souhaité</legend>
                    <label for="livrable">Ajouter un fichier* :</label>
                    <input type="file" id="livrable" required><br><br>
                    <img id="livrable_preview" style="display:none; max-width: 200px;"><br><br>
                </fieldset>

                <!-- Choix de validation -->
                <fieldset>
                    <legend>Choix de validation</legend>
                    <label>Quel type de validation souhaitez-vous ?</label>
                    <input type="text" id="Validation"> Validation
                    <input type="radio" name="suite_affaire" value="oui" required> Validation + prix
                    <input type="radio" name="suite_affaire" value="non"> Validation + prix + détail technique
                    <input type="radio" name="suite_affaire" value="non"><br><br>
                </fieldset>

                <!-- Boutons de validation -->
                <button type="submit">Envoyer la demande</button>
            </form>
        `;

        // Script pour l'aperçu d'image
        setTimeout(() => {
            const inputFile = document.getElementById('livrable');
            const preview = document.getElementById('livrable_preview');

            inputFile.addEventListener('change', () => {
                const file = inputFile.files[0];
                const reader = new FileReader();

                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }

                if (file) {
                    reader.readAsDataURL(file);
                }
            });
        }, 100);
    }

    formContainer.innerHTML = formHtml;
}
