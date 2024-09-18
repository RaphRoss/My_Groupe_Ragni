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
                    <p>Commentaire à destination de l'agent (non modifiable) :</p>
                    <textarea disabled></textarea><br><br>
                    <p>Date estimée :</p>
                    <input type="text" value="Un mois à partir de la création" disabled><br><br>
                    <label>Langue de l'étude :</label>
                    <select>
                        <option value="fr">Français</option>
                        <option value="en">Anglais</option>
                    </select><br><br>
                    <input type="checkbox" id="urgent"><label for="urgent">Demande urgente</label><br><br>
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
                    <input type="checkbox" id="urgent2"><label for="urgent2">Demande urgente</label><br><br>
                    <label for="commentaire_modif">Commentaire de la demande de modification :</label>
                    <textarea id="commentaire_modif"></textarea><br><br>
                    <label for="elements_complementaires">Éléments complémentaires :</label>
                    <textarea id="elements_complementaires"></textarea>
                </fieldset>

                <!-- Section Brouillon d'étude -->
                <fieldset>
                    <legend>Brouillon d'étude</legend>
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
                    <label for="temperature">Température de couleur :</label>
                    <select multiple>
                        <option value="ambre">Ambre</option>
                        <option value="2200K">2200K</option>
                        <option value="2700K">2700K</option>
                        <option value="3000K">3000K</option>
                        <option value="4000K">4000K</option>
                        <option value="autre">Autre</option>
                    </select><br><br>
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
                    <input type="checkbox" id="urgent_infographique"><label for="urgent_infographique">Demande urgente</label><br><br>
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
                    <input type="checkbox" id="urgent_infographique_2"><label for="urgent_infographique_2">Demande urgente</label><br><br>
                </fieldset>

                <!-- Section Brouillon d'étude -->
                <fieldset>
                    <legend>Brouillon d'étude</legend>
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
                    <input type="radio" name="visavis" value="oui"> Oui
                    <input type="radio" name="visavis" value="non"> Non<br><br>

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
                    <input type="radio" name="implantation_mat" value="oui"> Oui
                    <input type="radio" name="implantation_mat" value="non"> Non<br><br>
                </fieldset>

                <!-- Bouton d'envoi -->
                <button type="submit">Envoyer la demande</button>
            </form>
        `;
    }
    formContainer.innerHTML = formHtml;
}
