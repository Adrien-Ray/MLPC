import './TextATrou.css';
function RealApp(props) {
    return ( 
        <div className = "TextATrou widthComponent" >
            <h2>Mentions légales</h2>
            <h3>1 – Édition du site</h3>
            <p>
                En vertu de <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000801164#LEGIARTI000042038977">l’article 6 de la loi n° 2004-575 du 21 juin 2004</a> pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet {props.useStateForm.site} l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi : <br />
                Propriétaire du site : {props.useStateForm.enterprise} – Contact : {props.useStateForm.mail} / {props.useStateForm.tel} – Adresse : {props.useStateForm.adress}<br />
                Identification de l’entreprise : {props.useStateForm.typeEntreprise} {props.useStateForm.enterprise} au capital social de {props.useStateForm.capital} € – SIRET : {props.useStateForm.siret} – RCS {props.useStateForm.rcs} – Adresse postale : <br />
                {props.useStateForm.adress}<br />
                Responsable de la publication : {props.useStateForm.responsable} – Contact : {props.useStateForm.mail}<br />
                Hébergeur : {props.useStateForm.hosting}
            </p>
            <h3>2 – Propriété intellectuelle et contrefaçons</h3>
            <p>
            {props.useStateForm.enterprise} est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.<br />
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de {props.useStateForm.enterprise}.<br />
            Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles <a href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000032655082&cidTexte=LEGITEXT000006069414&dateTexte=20160605">L.335-2 et suivants du Code de Propriété Intellectuelle</a>.
            </p>
            <h3>3 – Limitations de responsabilité</h3>
            <p>
                {props.useStateForm.enterprise} ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site {props.useStateForm.site}.<br />
                L’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.<br />
                {props.useStateForm.enterprise} décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur {props.useStateForm.site}.<br />
                {props.useStateForm.enterprise} s’engage à sécuriser au mieux le site {props.useStateForm.site}, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.<br />
                Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. {props.useStateForm.enterprise} se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.<br />
                Le cas échéant, {props.useStateForm.enterprise} se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant ou pornographique, quel que soit le support utilisé (texte, photographie…).<br />
                Les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.<br />
                Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer.<br />
            </p>
            <h3>4 – CNIL et gestion des données personnelles</h3>
            <p>
                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site {props.useStateForm.site} dispose d’un droit d’accès, de modification et de suppression des informations collectées.<br />
                Pour plus d’informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire…), lisez notre notre page « Politique de confidentialité ».
            </p>
            <h3>5 – Liens hypertextes et cookies</h3>
            <p>
                Le site {props.useStateForm.site} contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers {props.useStateForm.site}.<br />
                La navigation sur le site {props.useStateForm.site} est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.<br />
                Un « cookie » est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d’obtenir des mesures de fréquentation, par exemple.<br />
                Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.<br />
                Pour plus d’informations sur la façon dont nous faisons usage des cookies, lisez notre page « Politique de confidentialité ».
            </p>
            <h3>6 – Droit applicable et attribution de juridiction</h3>
            <p>
                Tout litige en relation avec l’utilisation du site {props.useStateForm.site} est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de {props.useStateForm.rcs}.
            </p>
            <br />
            <br />
            <h2>Politique de confidentialité</h2>
            <p>Le site {props.useStateForm.site}, détenu par {props.useStateForm.enterprise}, traite les données de ses utilisateurs conformément à la politique de confidentialité.</p>
            <h3>DÉFINITIONS</h3>
            <p>
                Données personnelles : toute information se rapportant à une personne physique identifiée ou identifiable, directement ou indirectement.<br />
                <a href="https://www.cnil.fr/fr/definition/donnee-personnelle">https://www.cnil.fr/fr/definition/donnee-personnelle</a><br />
                Cookie : petit fichier stocké par un serveur dans le terminal (ordinateur, téléphone, etc.) d’un utilisateur et associé à un domaine web (c’est-à-dire dans la majorité des cas à l’ensemble des pages d’un même site web). Ce fichier est automatiquement renvoyé lors de contacts ultérieurs avec le même domaine.<br />
                <a href="https://www.cnil.fr/fr/definition/cookie">https://www.cnil.fr/fr/definition/cookie</a>
            </p>
            <h3>COLLECTE, GESTION ET SÉCURITÉ DES DONNÉES</h3>
            <p>
                Seules les données pertinentes et nécessaires, liées à l’utilisateur, sont collectées par le site {props.useStateForm.site} lors :<br />
                – de la navigation sur le site (cookies)<br />
                – d’une prise de contact via le formulaire<br />
                <br />
                Les informations pouvant être collectées par le site {props.useStateForm.site} sont celles relatives aux renseignements permettant d’identifier et de contacter l’utilisateur, c’est-à-dire, les coordonnées :<br />
                – Nom et Prénom<br />
                – Société<br />
                – Téléphone<br />
                – e-mail<br />
                <br />
                Les données personnelles sont conservées jusqu’à la demande de suppression effectuée par l’utilisateur ou jusqu’à 3 ans à compter du dernier contact pris par l’utilisateur.<br />
                Toutes les données personnelles collectées sont protégées grâce au certificat usuel de connexion sécurisée SSL (Secure Socket Layer). Les mesures de sécurité sont régulièrement révisées afin de garantir une protection contre toute manipulation, vol et perte partielle ou totale. 
            </p>
            <h3>DROIT D’ACCÈS ET DE SUPPRESSION DES DONNÉES PERSONNELLES</h3>
            <p>
                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur dispose d’un droit d’accès aux informations collectées par le site {props.useStateForm.site} et peut demander à tout moment :<br />
                – la modification de ses données<br />
                – la rectification de données erronées<br />
                – la suppression de données existantes<br />
                Pour exercer ce droit, l’utilisateur doit envoyer un message à l’adresse suivante : {props.useStateForm.mail}
            </p>
            <h3>UTILISATION DE COOKIES</h3>
            <p>
                Le site {props.useStateForm.site} peut être amené à utiliser des cookies. Lors de sa visite sur {props.useStateForm.site} l’utilisateur a le choix d’accepter ou de refuser l’utilisation des cookies en poursuivant sa navigation sur le site.<br />
                Ce site n’utilise actuellement aucun cookie nécessitant votre consentement, uniquement ceux nécessaires à son bon fonctionnement, permettant de :<br />
                – Conserver le choix exprimé par les utilisateurs sur le dépôt de cookies<br />
                – Mesurer l’audience grâce à certains traceurs dès lors qu’ils respectent les données personnelles<br />
                <br />
                Votre logiciel de navigation est configurable à tout moment afin de paramétrer les cookies ou de vider les caches.
            </p>
        </div>
    );
}

export default RealApp;