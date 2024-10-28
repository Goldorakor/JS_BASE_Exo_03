document.querySelectorAll('.carre').forEach(carres => {
    carres.addEventListener('click', function() {
        // Vérifie si le carré est déjà modifié
        if (this.classList.contains('active')) {
            // Rétablir les propriétés initiales
            this.style.transform = 'scale(1) rotate(0deg)'; // revient à la taille initiale et rotation inverse
            this.style.backgroundColor = '#50945c93'; // retrouve la couleur verte
            this.classList.remove('active'); // le carré n'est pas en mode actif
        } else {
            // Appliquer les nouvelles propriétés
            this.style.transform = 'scale(0.9) rotate(360deg)'; // ça rétrécit et ça tourne
            this.style.backgroundColor = '#cd6650'; // on applique la couleur rouge brique
            this.classList.add('active'); // le carré passe en mode actif -> on lui ajoute la classe 'active'
        }
    });
});


/*

Le terme classList en JavaScript est une propriété d'un élément DOM (Document Object Model) qui renvoie une collection des classes CSS de cet élément. Voici quelques points clés à propos de classList :

1. Accès aux classes :

    classList te permet d'accéder à toutes les classes d'un élément sous forme d'une liste. Par exemple, si un élément a les classes class1 et class2, element.classList renverra une collection contenant ces deux classes.

2. Méthodes utiles :

classList fournit plusieurs méthodes pratiques :

    add(className) : Ajoute une classe à l'élément.
    remove(className) : Supprime une classe de l'élément.
    toggle(className) : Ajoute la classe si elle n'est pas présente, sinon la supprime.
    contains(className) : Vérifie si l'élément possède une classe spécifique et renvoie true ou false.


en HTML, un élément peut avoir plusieurs classes ! 
Tu peux spécifier plusieurs classes pour un même élément en les séparant par des espaces dans l'attribut class. 
Cela te permet de combiner plusieurs styles et comportements CSS.


*/

/*
Notre schéma logique :


if (this.classList.contains('active')) {
    // Rétablir les propriétés initiales
    ...
    this.classList.remove('active'); // Retire la classe 'active'
} else {
    // Appliquer les nouvelles propriétés
    ...
    this.classList.add('active'); // Ajoute la classe 'active'
}



*/